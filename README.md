# Alarma Conversacional Frontend

Frontend navegable del proyecto **Alarma Conversacional**, construido en Angular como entrega académica de la Maestría en Ingeniería de Software.

La página inicial permite acceder a dos áreas:

- **Maquetación mobile:** implementación completa del MVP con 17 pantallas y 12 overlays.
- **Maquetación web:** espacio reservado y preparado para que el integrante responsable agregue su propuesta.

## Tecnologías

- Angular 22 con componentes standalone.
- Angular Router con navegación hash compatible con GitHub Pages.
- TypeScript en modo estricto.
- SCSS.
- Tipografía Manrope incluida localmente.
- GitHub Actions para despliegue automático.

## Requisitos

- Node.js 22 o superior.
- npm 11 o superior.

## Instalación

```bash
npm install
```

## Ejecución local

```bash
npm start
```

Después abre `http://localhost:4200`.

## Compilación

```bash
npm run build
```

## Pruebas

```bash
npm test
```

## Navegación principal

| Ruta | Contenido |
|---|---|
| `/#/` | Selección entre maquetación web y mobile |
| `/#/web` | Área reservada para la propuesta web |
| `/#/mobile/inicio` | Inicio del prototipo móvil |

El inventario completo se encuentra en [docs/SCREEN_MAP.md](docs/SCREEN_MAP.md).

## Alcance funcional

Los botones, chips, switches, selectores, campos, diálogos y navegación están activos. Su comportamiento simula la interacción del prototipo, pero no se conecta con backend ni servicios del dispositivo.

No incluye:

- Persistencia de datos.
- Autenticación.
- Notificaciones reales.
- Reconocimiento de voz real.
- Micrófono del dispositivo.
- Analítica, evidencia o contacto de confianza.

## Publicación en GitHub Pages

El repositorio incluye el flujo `.github/workflows/deploy-pages.yml`.

### Crear el repositorio remoto

1. Crea un repositorio público vacío en GitHub, sin agregar README ni `.gitignore`.
2. Desde la carpeta del proyecto ejecuta:

```bash
git config user.name "TU NOMBRE"
git config user.email "TU CORREO DE GITHUB"
git commit -m "feat: crea prototipo navegable web y mobile"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
git push -u origin main
```

Los archivos del paquete ya quedan agregados al índice de Git; por eso no es necesario repetir `git init` ni `git add`.

### Activar el sitio

Después de subir el código al repositorio público:

1. Ingresa a `Settings`.
2. Abre `Pages`.
3. En `Build and deployment`, selecciona `GitHub Actions`.
4. Haz push a la rama `main`.

El workflow instalará las dependencias, compilará Angular y publicará el resultado.

## Convención de ramas

- `main`: versión estable y entregable.
- `develop`: integración del equipo.
- `feature/mobile-*`: trabajo de maquetación móvil.
- `feature/web-*`: trabajo de maquetación web.

## Convención de commits

```text
feat: agrega pantalla de creación de alarma
fix: corrige espaciado de selector de días
docs: actualiza instrucciones de ejecución
style: ajusta tokens del design system
```

## Identidad visual

- Concepto: energía para actuar sin perder el control.
- Tipografía: Manrope.
- Color principal: `#4F46E5`.
- Color de acción: `#F59E0B`.
- Interfaz clara durante configuración y oscura durante la alarma activa.
