# Vulnerabilidad 3: Inyección de Comandos (Command Injection)

## Evidencia del Ataque
![Inyección de Comandos](img_viefio/comandos_viefio.png)

## Explicación Técnica de la Vulnerabilidad
Esta vulnerabilidad surge cuando el código fuente de la página pasa parámetros proporcionados por el usuario directamente a una consola del sistema operativo (por ejemplo, usando funciones como `exec()` o `system()` en PHP).

El sistema está programado para ejecutar un comando de red (`ping` a una IP). Sin embargo, en sistemas basados en Unix/Linux, el carácter punto y coma (`;`) actúa como un terminador de línea, indicando que se debe ejecutar un comando nuevo a continuación. [cite_start]Al ingresar `127.0.0.1; cat /etc/passwd` [cite: 33][cite_start], el sistema primero hace el ping, y luego ejecuta maliciosamente `cat /etc/passwd`, exponiendo el archivo principal de usuarios del sistema operativo[cite: 33].

## Gravedad y Puntaje CVSS
* **Puntaje CVSS v3.1:** 9.8 (Crítico) - `CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H`
* [cite_start]**Impacto en EduKids:** Esta es la vulnerabilidad más devastadora, ya que otorga control total sobre la máquina que aloja la página web[cite: 33]. Un atacante podría obtener una "shell inversa", eliminar completamente las carpetas con la información de la institución educativa o cifrar el servidor para exigir un rescate (Ransomware), destruyendo la disponibilidad de los sistemas.

## Políticas de Prevención y Controles de Mitigación
* **Política de Prevención:** La regla fundamental es evitar llamar a comandos del sistema operativo desde la aplicación web. Si la funcionalidad es indispensable, se debe validar estrictamente la entrada. Para este caso, el servidor debe verificar mediante expresiones regulares que el texto ingresado es exclusivamente una dirección IP con el formato `X.X.X.X`, rechazando inmediatamente cualquier otro carácter.
* **Control de Mitigación:** Aplicar el principio de "Sandboxing". La aplicación web debe ejecutarse bajo un usuario del sistema operativo con privilegios mínimos absolutos, aislado en un contenedor (ej. Docker) que no tenga acceso a los archivos críticos (`/etc/passwd`) ni permisos para instalar programas adicionales.