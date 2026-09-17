# Mapa de pantallas e interacciones

## Pantallas completas

| Código | Ruta | Propósito |
|---|---|---|
| M01 | `/#/mobile/inicio` | Consultar alarmas y acceder al flujo principal |
| X01 | `/#/mobile/sin-alarmas` | Estado inicial sin alarmas |
| V01 | `/#/mobile/crear-alarma` | Crear una alarma en una sola pantalla |
| M05 | `/#/mobile/alarma-guardada` | Confirmar que la alarma fue guardada |
| M06 | `/#/mobile/alarma-activa` | Presentar la activación contextual |
| V02 | `/#/mobile/responder` | Responder mediante botones o voz |
| X02 | `/#/mobile/voz-no-reconocida` | Recuperarse de una respuesta no reconocida |
| X03 | `/#/mobile/sin-conexion` | Continuar sin conexión mediante botones |
| M08 | `/#/mobile/actividad-confirmada` | Confirmar el compromiso de iniciar |
| M11 | `/#/mobile/posponer` | Seleccionar el intervalo de posposición |
| M12 | `/#/mobile/reprogramar` | Cambiar fecha y hora |
| M13 | `/#/mobile/proximo-intento` | Mostrar cuándo ocurrirá el siguiente intento |
| M14 | `/#/mobile/cierre-seguro` | Finalizar al alcanzar el límite de intentos |
| M15 | `/#/mobile/microfono` | Explicar y solicitar el permiso de micrófono |
| M19 | `/#/mobile/ajustes` | Consultar preferencias |
| M20 | `/#/mobile/privacidad` | Gestionar privacidad y eliminación |
| X16 | `/#/mobile/datos-eliminados` | Confirmar la eliminación total |

## Overlays

| Código | Control que lo abre |
|---|---|
| X04 | Intensidad en Crear alarma |
| X05 | Eliminar alarmas en Privacidad |
| X06 | Eliminar todos los datos |
| X07 | Selector de hora |
| X08 | Reintentos máximos |
| X09 | Permiso del sistema para micrófono |
| X10 | Selector de fecha |
| X11 | Propósito de la alarma |
| X12 | Notificaciones |
| X13 | Accesibilidad |
| X14 | Ayuda |
| X15 | Intervalo personalizado |

Todos los controles tienen respuesta visual. El proyecto no implementa backend, persistencia, notificaciones del sistema ni reconocimiento de voz real.
