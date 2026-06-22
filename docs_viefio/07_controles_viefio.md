# Políticas de Prevención y Controles de Mitigación

[cite_start]Para proteger a la comunidad de EduKids y garantizar la confidencialidad de los menores, se establecen las siguientes directrices de seguridad[cite: 71].

## Políticas de Prevención (Evitar que suceda)
1. **Adopción de Consultas Parametrizadas (Para SQLi):** Queda estrictamente prohibido concatenar texto introducido por el usuario directamente en las consultas SQL. Los desarrolladores deben usar *Prepared Statements* u ORMs (como Prisma o Sequelize).
2. **Validación de Entradas y Salidas (Para XSS y Comandos):** Implementar listas blancas estandarizadas. Un campo de "Nombre" solo debe aceptar letras, rechazando automáticamente caracteres especiales como `< > ; ' "`.
3. **Principio de Mínimo Privilegio:** El usuario de la base de datos que conecta la aplicación web web no debe tener permisos de `DROP` (borrar tablas) ni de administrador del sistema operativo.

## Controles de Mitigación (Reducir el daño si el ataque ocurre)
1. **Cifrado de Datos Sensibles (Data at Rest):** Los RUTs, contraseñas (mediante hashes seguros como bcrypt) y datos médicos deben estar encriptados en la base de datos. Si ocurre un SQLi, la información robada será inútil para el atacante.
2. **Implementación de un WAF (Web Application Firewall):** Desplegar un firewall de capa 7 (como Cloudflare) que detecte y bloquee automáticamente cargas útiles maliciosas de XSS e inyecciones antes de que toquen nuestro servidor.
3. **Aislamiento del Servidor (Sandboxing):** El servicio web debe ejecutarse en un contenedor (ej. Docker) sin acceso a los archivos críticos del sistema operativo (`/etc/passwd`), mitigando el impacto de una inyección de comandos.