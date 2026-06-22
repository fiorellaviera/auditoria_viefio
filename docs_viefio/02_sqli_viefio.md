# Vulnerabilidad 1: Inyección SQL (SQLi)

## Evidencia del Ataque
![Inyección SQL](img_viefio/sqli_viefio.png)

## Explicación Técnica de la Vulnerabilidad
La Inyección SQL ocurre debido a una falla crítica en la validación de los datos de entrada. La aplicación web toma el input del usuario (el ID) y lo concatena directamente en la consulta de la base de datos. 

[cite_start]Al inyectar el payload `' OR '1'='1`[cite: 33], la consulta original (por ejemplo: `SELECT * FROM usuarios WHERE id = '$id'`) se transforma maliciosamente en:
`SELECT * FROM usuarios WHERE id = '' OR '1'='1'`

[cite_start]Como la afirmación matemática `1=1` es siempre verdadera, el motor de la base de datos ignora cualquier filtro de autenticación y devuelve absolutamente todos los registros almacenados en la tabla[cite: 33].

## Gravedad y Puntaje CVSS
* **Puntaje CVSS v3.1:** 9.8 (Crítico) - `CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H`
* [cite_start]**Impacto en EduKids:** Exposición total de la base de datos[cite: 33]. Un atacante obtiene acceso inmediato a todos los RUTs, direcciones, teléfonos y fichas médicas de los menores, lo que constituye una infracción gravísima a la privacidad y un riesgo de seguridad física.

## Políticas de Prevención y Controles de Mitigación
* **Política de Prevención:** Reestructurar el código de acceso a datos utilizando **Consultas Parametrizadas (Prepared Statements)** u ORMs. [cite_start]Esto obliga a la base de datos a tratar el input del usuario estrictamente como texto inofensivo, impidiendo que modifique la lógica de la consulta[cite: 127].
* **Control de Mitigación:** Encriptar los campos sensibles en la base de datos (Data at Rest) para que, en caso de extracción, la información médica y personal de los niños sea ilegible sin la llave criptográfica. Adicionalmente, limitar los privilegios del usuario de la base de datos solo a operaciones de lectura (`SELECT`), bloqueando permisos de borrado o modificación.