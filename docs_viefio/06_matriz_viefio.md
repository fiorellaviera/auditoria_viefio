# Matriz de Riesgo y Mapa de Calor

La siguiente evaluación clasifica las vulnerabilidades descubiertas en la plataforma de EduKids, basándose en la fórmula de **Riesgo = Probabilidad de Explotación × Impacto en el Negocio**.

## Evaluación de Vulnerabilidades

| Vulnerabilidad | Probabilidad | Impacto en EduKids | Nivel de Riesgo | Justificación del Nivel |
| :--- | :---: | :---: | :---: | :--- |
| **Inyección SQL (SQLi)** | **Alta** | **Crítico** | **CRÍTICO** | La falta de sanitización hace que el ataque sea trivial (Alta prob.). El impacto es Crítico porque expone el 100% de los datos de los apoderados, violando la confidencialidad. |
| **Cross-Site Scripting (XSS)** | **Media** | **Alto** | **ALTO** | Requiere interacción de la víctima (Media prob.), pero permite redirigir a los apoderados a pasarelas de pago falsas para robar dinero de matrículas (Alto impacto). |
| **Command Injection** | **Baja** | **Crítico** | **CRÍTICO** | Requiere que el atacante entienda la infraestructura subyacente (Baja prob.), pero otorga control total del servidor. Permite borrar todas las bases de datos o instalar Ransomware (Impacto Crítico). |

## Mapa de Calor Visual
*(Nota para el desarrollo: Este mapa se representará visualmente mediante componentes React en la aplicación final).*

* **Zona Roja (Inaceptable):** SQLi y Command Injection. Requieren parcheo inmediato antes de que el portal vuelva a estar en línea.
* **Zona Naranja (Alto):** XSS. Requiere mitigación en el próximo ciclo de desarrollo (máximo 7 días).
* **Zona Amarilla / Verde:** (Sin hallazgos en esta auditoría).