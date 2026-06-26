export default function Resumen() {
  return (
    <div className="space-y-4 text-texto text-lg animate-fade-in">
      <h2 className="text-3xl text-principalOscuro border-b-4 border-amarilloKids pb-3 mb-6 font-extrabold">
        📝 Resumen Ejecutivo
      </h2>
      
      {/* ¡AQUÍ PEGAS TU TEXTO REAL! */}
      <p>
        El presente informe detalla los resultados de la auditoría de seguridad web realizada a la plataforma <strong>EduKids</strong>. Durante la evaluación, se identificaron vulnerabilidades críticas que comprometen la integridad de los datos de los estudiantes y apoderados.
      </p>
      
      <p>
        El objetivo principal es exponer estas brechas (como la Inyección SQL y el Cross-Site Scripting) y proporcionar las recomendaciones técnicas necesarias para asegurar el entorno digital del jardín infantil.
      </p>

      {/* Una cajita de alerta bonita para conclusiones */}
      <div className="bg-yellow-50 border-l-8 border-amarilloKids p-5 rounded-r-2xl mt-8 shadow-sm">
        <h4 className="font-extrabold text-amber-600 mb-1">💡 Conclusión Principal</h4>
        <p className="text-amber-800 text-base">
          Se requiere acción inmediata para parchar los formularios de entrada y evitar la exposición de la base de datos escolar.
        </p>
      </div>
    </div>
  )
}