# Vulnerabilidad 2: Cross-Site Scripting (XSS Reflected)

## Evidencia del Ataque
![XSS Reflected](img_viefio/xss_viefio.png)

## Explicación Técnica de la Vulnerabilidad
El Cross-Site Scripting Reflejado se produce cuando la aplicación web recibe un dato a través de una petición HTTP (como un formulario o la URL) y lo incluye inmediatamente en el código HTML de respuesta sin sanitizarlo ni escapar sus caracteres.

[cite_start]Al enviar el payload `<script>alert('XSS')</script>`[cite: 33], el servidor incrusta estas etiquetas directamente en la página. [cite_start]Cuando el navegador del usuario víctima recibe el HTML modificado, interpreta las etiquetas `<script>` no como un texto normal, sino como un comando ejecutable, procesando el código malicioso en el contexto de su propia sesión[cite: 33].

## Gravedad y Puntaje CVSS
* **Puntaje CVSS v3.1:** 6.1 (Medio) - `CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N`
* **Impacto en EduKids:** Un atacante podría enviar un correo simulando ser la dirección del jardín, incluyendo un link alterado. Al hacer clic, el script se ejecuta en el navegador del apoderado, permitiendo al atacante robar sus cookies de sesión (secuestro de cuenta) o inyectar un formulario falso para capturar datos de tarjetas de crédito al momento de pagar una mensualidad.

## Políticas de Prevención y Controles de Mitigación
* **Política de Prevención:** Aplicar codificación de salida (Output Encoding) a cualquier dato introducido por el usuario antes de renderizarlo en el navegador. Las etiquetas HTML y caracteres especiales deben convertirse en entidades seguras (ej. `<` pasa a ser `&lt;`).
* **Control de Mitigación:** Implementar en el servidor encabezados HTTP de seguridad como **Content Security Policy (CSP)**. Una política CSP restrictiva prohibirá al navegador ejecutar scripts que no provengan de los dominios oficiales de EduKids, bloqueando la ejecución del código inyectado.