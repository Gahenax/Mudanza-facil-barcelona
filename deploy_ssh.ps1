# Mudanza Facil Barcelona - SSH Professional Deployment
# Gahenax-Fast-Pipe v1.0

$ErrorActionPreference = "Stop"

# 1. Configuracion de Identidad
$IdentityFile = "$env:USERPROFILE\.ssh\id_ed25519_mudanza"
$SSH_Port = 65002
$SSH_User = "u709967052"
$SSH_Host = "82.29.191.206"
$LocalPath = "dist\*"
$RemotePath = "domains/mudanzafacilbcn.com/public_html/"

Write-Host "Iniciando Build de Produccion..." -ForegroundColor Cyan
npm run build

$SshOpts = "-p $SSH_Port -i $IdentityFile -o ConnectTimeout=10 -o ServerAliveInterval=5 -o ServerAliveCountMax=3"

Write-Host "Limpiando assets remotos..." -ForegroundColor Gray
Invoke-Expression "ssh $SshOpts `"$($SSH_User)@$($SSH_Host)`" `"rm -rf $RemotePath/assets/* $RemotePath/*.html $RemotePath/*.js $RemotePath/*.css 2>/dev/null; exit 0`""

Write-Host "Sincronizando con el servidor via SCP (incluyendo archivos ocultos)..." -ForegroundColor Green
Invoke-Expression "scp -P $SSH_Port -i $IdentityFile -o ConnectTimeout=10 -o ServerAliveInterval=5 -r dist/. `"$($SSH_User)@$($SSH_Host):$RemotePath`""

Write-Host "Ajustando Permisos Remotos (755 carpetas / 644 archivos)..." -ForegroundColor Yellow
Invoke-Expression "ssh $SshOpts `"$($SSH_User)@$($SSH_Host)`" `"find $RemotePath -type d -exec chmod 755 {} \; && find $RemotePath -type f -exec chmod 644 {} \;`""

Write-Host "¡DESPLIEGUE SSH COMPLETADO!" -ForegroundColor Yellow
Write-Host "Verifica en: https://mudanzafacilbcn.com"
