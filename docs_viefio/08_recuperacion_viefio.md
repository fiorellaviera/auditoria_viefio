# Mejora Tecnológica y Plan de Recuperación

[cite_start]En caso de que las defensas fallen, EduKids debe tener la capacidad de restaurar sus servicios sin comprometer la seguridad física de los menores[cite: 73].

## Plan de Recuperación ante Desastres (DRP)
1. **Contención:** Ante sospecha de brecha, aislar la aplicación web de internet inmediatamente para detener la exfiltración de datos. Cambiar todas las contraseñas de administradores y bases de datos.
2. **Erradicación:** Identificar la vulnerabilidad explotada revisando los logs del servidor y eliminar cualquier "puerta trasera" (webshell) dejada por el atacante mediante inyección de comandos.
3. **Recuperación:** Restaurar el sistema utilizando el último backup inmutable disponible (copias de seguridad que no pueden ser alteradas ni borradas). Validar que la base de datos restaurada no contenga manipulaciones.
4. **Comunicación:** Notificar formalmente a los apoderados sobre el incidente, el alcance de los datos comprometidos y las acciones a seguir (como estar atentos a intentos de suplantación o phishing).

## Plan de Mejora Tecnológica
La arquitectura actual (DVWA simulada) es obsoleta e insegura por diseño. Se propone:
* **Migración de Framework:** Reescribir el portal web utilizando React para el frontend (que mitiga el XSS por defecto al escapar los datos renderizados) y Node.js para el backend.
* **Auditorías Periódicas:** Establecer pruebas de penetración (Pentesting) semestrales antes de cada periodo de matrículas.