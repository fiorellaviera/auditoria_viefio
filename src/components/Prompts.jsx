export default function Prompts() {
  return (
    <div className="space-y-6 text-texto text-lg animate-fade-in">
      <h2 className="text-3xl text-principalOscuro border-b-4 border-amarilloKids pb-3 mb-6 font-extrabold">
        🤖 Bitácora de Uso de IA
      </h2>

      <ul className="list-none space-y-3 bg-slate-50 p-6 rounded-3xl border-4 border-dashed border-borde">
        <li><strong>Herramienta utilizada:</strong> Gemini</li>
        <li><strong>Secciones donde se aplicó:</strong> Análisis de vulnerabilidades, activos y riesgos por industria, matriz de riesgo y controles.</li>
      </ul>

      <div className="mt-8">
        <h3 className="text-2xl font-extrabold text-principalOscuro mb-4">📝 Prompt Principal Utilizado</h3>
        <blockquote className="bg-blue-50 border-l-8 border-principal p-5 rounded-r-2xl shadow-sm italic text-blue-900 font-medium">
          "Actúa como un auditor de ciberseguridad. Estoy redactando un informe universitario para la empresa ficticia EduKids (Jardín Infantil). Necesito expandir mi matriz de riesgo y los controles de seguridad para SQLi, XSS y Command Injection. Enfoca el impacto específicamente en los riesgos de manejar datos médicos de párvulos, tutores legales y protocolos de seguridad física, usando un lenguaje técnico pero orientado al negocio."
        </blockquote>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-extrabold text-principalOscuro mb-4">🛠️ Qué se aceptó y qué se corrigió</h3>
        <ul className="list-disc ml-6 space-y-4">
          <li>
            <strong className="text-green-700">Aceptado:</strong> La estructuración de los controles divididos en prevención y mitigación, y la brillante relación entre la Inyección SQL y el riesgo físico de modificar autorizaciones de retiro de menores.
          </li>
          <li>
            <strong className="text-orange-600">Corregido:</strong> Se adaptaron los nombres de los archivos para que cumplan con la nomenclatura técnica del proyecto (<code className="bg-slate-200 px-2 py-1 rounded text-sm text-slate-700">&lt;aaa&gt;&lt;nnn&gt;</code>). Además, se verificó que la justificación tecnológica de los ataques coincidiera exactamente con las mecánicas del laboratorio DVWA utilizado en clases.
          </li>
        </ul>
      </div>

      <div className="mt-10 bg-green-50 p-6 rounded-3xl border-2 border-green-200 shadow-sm">
        <h3 className="text-2xl font-extrabold text-green-800 mb-3">💡 Reflexión Final</h3>
        <p className="text-green-900 leading-relaxed">
          La Inteligencia Artificial resultó ser una excelente herramienta para "traducir" hallazgos puramente técnicos en impactos de negocio reales. Sin embargo, requiere una dirección precisa (prompts contextualizados); de lo contrario, entrega medidas genéricas que no aplican a la realidad operativa de un jardín infantil. Su uso agilizó la redacción del DRP, pero la evaluación del nivel de riesgo se validó basándose en los conocimientos del curso.
        </p>
      </div>
    </div>
  )
}