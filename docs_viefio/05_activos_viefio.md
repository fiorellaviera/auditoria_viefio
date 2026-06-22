# Activos de Información y Riesgos del Negocio

El jardín infantil EduKids maneja información de carácter crítico. Según la normativa legal y ética, la vulneración de estos datos no solo afecta la operatividad, sino la integridad física y psicológica de menores de edad.

## Inventario de Activos Críticos
1. **Fichas Médicas de Párvulos:** * *Contenido:* Alergias severas, condiciones crónicas, tipo de sangre, medicamentos diarios y rutinas neurológicas.
   * *Valor de Seguridad:* Alta Integridad y Confidencialidad.
2. **Registro de Apoderados y Tutores Autorizados:** * *Contenido:* Nombres completos, RUT, direcciones, teléfonos de emergencia y, críticamente, la lista de personas autorizadas (y no autorizadas, como en casos de medidas cautelares) para retirar al menor del recinto.
   * *Valor de Seguridad:* Crítica Integridad.
3. **Plataforma Web y Base de Datos:** * *Contenido:* El portal en sí mismo, la infraestructura del servidor y el motor de base de datos.
   * *Valor de Seguridad:* Alta Disponibilidad.

## Riesgos Asociados a la Industria (Educación Preescolar)
* **Riesgo Físico y Legal (Secuestro o entrega indebida):** Si un atacante altera la base de datos mediante Inyección SQL y añade a una persona no autorizada a la lista de retiro, el jardín podría entregar a un niño a un extraño o a un progenitor con orden de alejamiento.
* **Riesgo de Salud Vital:** La alteración o secuestro (Ransomware mediante Inyección de Comandos) de las fichas médicas impediría a las educadoras saber qué niño es alérgico a qué alimento en la hora de colación.
* **Riesgo Reputacional y Cierre Operativo:** La filtración de datos de menores causaría una fuga masiva de matrículas, demandas civiles y la posible clausura de la institución por incumplimiento de la ley de protección de datos personales.