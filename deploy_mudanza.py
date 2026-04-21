import os
import ftplib
import sys

def load_env(filepath: str) -> dict:
    """Carga credenciales desde .env.deploy (fuente única de verdad)."""
    env = {}
    if not os.path.exists(filepath):
        print(f"❌ Archivo {filepath} no encontrado.")
        sys.exit(1)
    with open(filepath, "r") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            if "=" in line:
                key, val = line.split("=", 1)
                env[key.strip()] = val.strip()
    return env

def deploy_mudanza():
    # Cargar credenciales desde .env.deploy (NO hardcodeadas aquí)
    env_path = os.path.join(os.path.dirname(__file__), ".env.deploy")
    env = load_env(env_path)

    FTP_HOST    = env.get("FTP_HOST", "").replace("ftp://", "")
    FTP_USER    = env.get("FTP_USER", "")
    FTP_PASS    = env.get("FTP_PASS", "")
    REMOTE_PATH = env.get("REMOTE_PATH", "/domains/mudanzafacilbcn.com/public_html")
    LOCAL_DIR   = os.path.join(os.path.dirname(__file__), "dist")

    print(f"🚀 Iniciando despliegue de MUDANZA FÁCIL BCN → {FTP_HOST}")
    print(f"👤 Usuario: {FTP_USER}")
    print(f"📁 Destino remoto: {REMOTE_PATH}")

    if not os.path.exists(LOCAL_DIR):
        print(f"❌ Error: La carpeta dist/ no existe. Ejecuta 'npm run build' primero.")
        sys.exit(1)

    try:
        ftp = ftplib.FTP(FTP_HOST)
        ftp.login(FTP_USER, FTP_PASS)
        print(f"✅ Conexión FTP establecida.")
    except Exception as e:
        print(f"❌ Error de conexión FTP: {e}")
        sys.exit(1)

    try:
        # Navegar al directorio destino
        for part in REMOTE_PATH.strip("/").split("/"):
            try:
                ftp.cwd(part)
            except Exception:
                ftp.mkd(part)
                ftp.cwd(part)
        print(f"📂 Dentro de: {REMOTE_PATH}")

        def upload_directory(local_path: str):
            for item in os.listdir(local_path):
                l_item = os.path.join(local_path, item)
                if item in [".git", "node_modules", "__pycache__"]:
                    continue
                if os.path.isfile(l_item):
                    with open(l_item, "rb") as f:
                        print(f"  ⬆️ {item}")
                        try:
                            ftp.storbinary(f"STOR {item}", f)
                        except Exception as e:
                            print(f"  ❌ Error subiendo {item}: {e}")
                elif os.path.isdir(l_item):
                    print(f"  📂 {item}/")
                    try:
                        ftp.mkd(item)
                    except Exception:
                        pass  # Ya existe
                    ftp.cwd(item)
                    upload_directory(l_item)
                    ftp.cwd("..")

        upload_directory(LOCAL_DIR)
        ftp.quit()

        print("\n✨ ¡DESPLIEGUE COMPLETADO! ✨")
        print(f"🌐 Verifica en: https://mudanzafacilbcn.com")

    except Exception as e:
        print(f"❌ Error crítico durante el despliegue: {e}")
        sys.exit(1)

if __name__ == "__main__":
    deploy_mudanza()

