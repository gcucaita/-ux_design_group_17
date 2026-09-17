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

## Compilación

```bash
npm run build
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





