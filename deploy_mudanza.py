import os
import ftplib
import sys

def deploy_mudanza():
    # FTP Connection Details
    FTP_HOST = "151.106.106.26"
    PASS = "Luisdaniel949."
    # Usernames to try
    USERS = ["u314799704.gahenaxaisolutions.xyz", "u314799704.limpiamaxweb.com"]
    LOCAL_DIR = r"C:\Users\jotam\OneDrive\Desktop\GahenaxAI\move-fluent-barcelona\dist"

    print(f"🚀 Iniciando despliegue de MUDANZA FÁCIL BCN: {FTP_HOST}")
    
    if not os.path.exists(LOCAL_DIR):
        print(f"❌ Error: La carpeta local {LOCAL_DIR} no existe.")
        return

    ftp = None
    connected = False
    
    for user in USERS:
        try:
            print(f"👤 Intentando usuario: {user}...")
            ftp = ftplib.FTP(FTP_HOST)
            ftp.login(user, PASS)
            print(f"✅ Conexión establecida con {user}!")
            connected = True
            break
        except Exception as e:
            print(f"⚠️ Falló {user}: {e}")
            if ftp:
                try: ftp.quit()
                except: pass

    if not connected:
        print("❌ Ningún usuario funcionó. Revisa la contraseña.")
        return

    try:
        # Navigate to public_html
        try:
            ftp.cwd('public_html')
            print("📁 Entrando en public_html...")
        except Exception as e:
            print(f"⚠️ No se pudo entrar en public_html: {e}")

        def upload_directory(local_path):
            # ... (same logic)
            for item in os.listdir(local_path):
                l_item_path = os.path.join(local_path, item)
                if os.path.isfile(l_item_path):
                    with open(l_item_path, 'rb') as f:
                        print(f"  ⬆️ Subiendo: {item}")
                        try:
                            ftp.storbinary(f'STOR {item}', f)
                        except Exception as e:
                            print(f"  ❌ Error subiendo {item}: {e}")
                elif os.path.isdir(l_item_path):
                    if item in ['.git', 'node_modules']: continue
                    print(f"  📂 Creando directorio: {item}")
                    try:
                        ftp.mkd(item)
                    except:
                        pass # Ya existe
                    
                    ftp.cwd(item)
                    upload_directory(l_item_path)
                    ftp.cwd('..')

        # Iniciar subida recursiva
        upload_directory(LOCAL_DIR)

        ftp.quit()
        print("\n✨ ¡DESPLIEGUE COMPLETADO! ✨")
        print(f"🌐 La web ya debería estar LIVE en: https://gahenaxaisolutions.xyz")

    except Exception as e:
        print(f"❌ Error crítico durante el despliegue: {e}")

if __name__ == "__main__":
    deploy_mudanza()
