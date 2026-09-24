# Generación del APK de Alarma Conversacional

## Requisitos del entregable

- Formato: APK instalable.
- Compatibilidad mínima: Android 8.1, API 27.
- Navegación: 17 pantallas principales y 12 overlays.
- Interacciones simuladas: botones, campos, selectores, chips, switches y diálogos.
- Backend: no requerido.

## Opción recomendada: GitHub Actions

1. Confirma que los cambios se encuentren en la rama `main`.
2. Abre la pestaña **Actions** del repositorio.
3. Selecciona **Build Android APK**.
4. Si no inició automáticamente, pulsa **Run workflow**, selecciona `main` y confirma.
5. Espera a que el trabajo **Generate installable APK** aparezca en verde.
6. Abre la ejecución terminada.
7. En **Artifacts**, descarga **Alarma-Conversacional-APK**.
8. Descomprime el archivo descargado. Su contenido incluye:
   - `Alarma_Conversacional_API27.apk`
   - `Alarma_Conversacional_API27.sha256`

## Publicación en una carpeta compartida

1. Crea una carpeta en Google Drive o OneDrive.
2. Carga únicamente `Alarma_Conversacional_API27.apk`.
3. Configura el acceso como **Cualquier persona con el vínculo** y permiso de lector.
4. Abre el enlace en una ventana de incógnito para comprobar que permite descargar sin solicitar acceso.
5. Entrega el vínculo de descarga de la carpeta o del archivo APK.

## Generación local opcional

Requiere Node.js 22, JDK 21 y Android Studio con Android SDK 36.

```bash
npm ci
npm run mobile:apk
```

El APK se genera en:

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

## Validación rápida

Instala el APK en un dispositivo Android permitiendo temporalmente la instalación desde la aplicación usada para abrirlo. Comprueba:

1. Apertura de la aplicación sin conexión.
2. Acceso desde Home a la maquetación móvil.
3. Creación de alarma.
4. Selección de días, intensidad y reintentos.
5. Confirmar, posponer y reprogramar.
6. Flujo alternativo de voz.
7. Switches de ajustes.
8. Diálogos de eliminación de alarmas y datos.

El APK generado es una versión de prueba firmada automáticamente. Es adecuado para instalación directa y entrega académica, pero no para publicación en Google Play.
