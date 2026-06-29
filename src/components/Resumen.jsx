export default function Resumen() {
  return (
    <div className="space-y-6 text-texto text-lg animate-fade-in">
      <h2 className="text-3xl text-principalOscuro border-b-4 border-amarilloKids pb-3 mb-6 font-extrabold">
        📝 Resumen Ejecutivo: Auditoría de Seguridad Web
      </h2>
      
      <div>
        <h3 className="text-2xl font-extrabold text-principalOscuro mb-2">🏫 Contexto de la Empresa: EduKids Jardín Infantil</h3>
        <p>
          El presente informe detalla los resultados de la auditoría de vulnerabilidades realizada al portal de clientes de <strong>EduKids</strong>, una institución de educación preescolar. Este entorno maneja activos de información de categoría crítica, incluyendo datos de identificación de menores de edad, registros de salud (fichas médicas, alergias) y datos de contacto de apoderados y tutores legales[cite: 52].
        </p>
      </div>
      
      <div>
        <h3 className="text-2xl font-extrabold text-principalOscuro mb-2">🎯 Alcance y Metodología</h3>
        <p>
          La auditoría se llevó a cabo en un ambiente controlado (laboratorio DVWA) con el objetivo de evaluar la postura de seguridad de la aplicación web frente a amenazas externas[cite: 45]. Se simuló la perspectiva de un atacante no autenticado o con privilegios mínimos, enfocando las pruebas en las tres vulnerabilidades web más críticas que afectan a los sistemas actuales.
        </p>
        <p className="mt-4">
          Para la cuantificación del nivel de gravedad de los hallazgos, se utilizó el estándar internacional <strong>CVSS v3.1</strong> (Common Vulnerability Scoring System), permitiendo priorizar la remediación técnica basándose en el impacto real sobre la integridad, confidencialidad y disponibilidad de la comunidad educativa de EduKids[cite: 45, 76].
        </p>
      </div>

      {/* NUEVO CONTENIDO: Objetivo y Conclusión */}
      <div className="bg-slate-50 p-6 rounded-3xl border-2 border-borde shadow-sm mt-8">
        <h3 className="text-xl font-extrabold text-principalOscuro mb-3">🚀 Objetivo de este Informe</h3>
        <p className="text-base">
          El objetivo es exponer las brechas de seguridad encontradas (Inyección SQL, XSS Reflejado e Inyección de Comandos) y proporcionar las recomendaciones técnicas necesarias para asegurar el entorno digital del jardín infantil.
        </p>
        <p className="text-base mt-3 font-bold text-red-600">
          Nota crítica: La exposición de estas vulnerabilidades representa un riesgo inaceptable que requiere un plan de remediación inmediato para garantizar el cumplimiento normativo y la protección de los datos de menores[cite: 69].
        </p>
      </div>
    </div>
  )
}