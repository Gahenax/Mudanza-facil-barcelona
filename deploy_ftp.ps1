# Mudanza Facil Barcelona - FTP Deployment Script
# Gahenax-FTP-Pipe v1.1 - Credentials loaded from .env.deploy

$ErrorActionPreference = "Stop"

# Cargar credenciales desde .env.deploy
$EnvFile = Join-Path $PSScriptRoot ".env.deploy"
if (-not (Test-Path $EnvFile)) {
  Write-Error "❌ Archivo .env.deploy no encontrado."
  exit 1
}
$env_vars = Get-Content $EnvFile | Where-Object { $_ -match "^\s*[^#]" } | ForEach-Object {
  $parts = $_ -split "=", 2
  [PSCustomObject]@{ Key = $parts[0].Trim(); Value = $parts[1].Trim() }
}
$FtpHost    = ($env_vars | Where-Object { $_.Key -eq "FTP_HOST" }).Value
$FtpUser    = ($env_vars | Where-Object { $_.Key -eq "FTP_USER" }).Value
$FtpPass    = ($env_vars | Where-Object { $_.Key -eq "FTP_PASS" }).Value
$FtpPort    = [int]($env_vars | Where-Object { $_.Key -eq "FTP_PORT" }).Value
$RemotePath = ($env_vars | Where-Object { $_.Key -eq "REMOTE_PATH" }).Value
$LocalDist  = Join-Path $PSScriptRoot "dist"

Write-Host "Iniciando Build de Produccion..." -ForegroundColor Cyan
Push-Location $PSScriptRoot
npm run build

if ($LASTEXITCODE -ne 0) {
  Write-Error "Build fallido. Abortando despliegue."
  exit 1
}

Write-Host "Build completado. Iniciando subida FTP..." -ForegroundColor Green

function Upload-FtpFile {
  param([string]$LocalFile, [string]$RemoteFile)
  $uri = "$FtpHost`:$FtpPort$RemoteFile"
  $req = [System.Net.FtpWebRequest]::Create($uri)
  $req.Method = [System.Net.WebRequestMethods+Ftp]::UploadFile
  $req.Credentials = [System.Net.NetworkCredential]::new($FtpUser, $FtpPass)
  $req.UseBinary = $true
  $req.UsePassive = $true
  $req.KeepAlive = $false
  $content = [System.IO.File]::ReadAllBytes($LocalFile)
  $req.ContentLength = $content.Length
  $stream = $req.GetRequestStream()
  $stream.Write($content, 0, $content.Length)
  $stream.Close()
  $res = $req.GetResponse()
  $res.Close()
}

function Create-FtpDir {
  param([string]$RemoteDir)
  try {
    $uri = "$FtpHost`:$FtpPort$RemoteDir"
    $req = [System.Net.FtpWebRequest]::Create($uri)
    $req.Method = [System.Net.WebRequestMethods+Ftp]::MakeDirectory
    $req.Credentials = [System.Net.NetworkCredential]::new($FtpUser, $FtpPass)
    $req.UsePassive = $true
    $req.KeepAlive = $false
    $res = $req.GetResponse()
    $res.Close()
  } catch {}
}

$files = Get-ChildItem -Path $LocalDist -Recurse -File
$total = $files.Count
$count = 0

foreach ($file in $files) {
  $relativePath = $file.FullName.Substring((Resolve-Path $LocalDist).Path.Length).Replace("\", "/")
  $remoteFull   = "$RemotePath$relativePath"
  $remoteDir    = $remoteFull.Substring(0, $remoteFull.LastIndexOf("/"))
  if ($remoteDir -ne $RemotePath) { Create-FtpDir -RemoteDir $remoteDir }
  $count++
  Write-Host "[$count/$total] Subiendo: $relativePath" -ForegroundColor Gray
  Upload-FtpFile -LocalFile $file.FullName -RemoteFile $remoteFull
}

Pop-Location
Write-Host ""
Write-Host "¡DESPLIEGUE FTP COMPLETADO! ($total archivos)" -ForegroundColor Yellow
Write-Host "Verifica en: https://mudanzafacilbcn.com" -ForegroundColor Green
