export default function Activos() {
  return (
    <div className="space-y-6 text-texto text-lg animate-fade-in">
      <h2 className="text-3xl text-principalOscuro border-b-4 border-amarilloKids pb-3 mb-6 font-extrabold">
        🏫 Activos de Información y Riesgos del Negocio
      </h2>
      
      <p className="mb-4">
        El jardín infantil EduKids maneja información de carácter crítico. Según la normativa legal y ética, la vulneración de estos datos no solo afecta la operatividad, sino la integridad física y psicológica de menores de edad.
      </p>

      <div>
        <h3 className="text-2xl font-extrabold text-principalOscuro mb-4">📋 Inventario de Activos Críticos</h3>
        <ol className="list-decimal ml-6 space-y-4 bg-slate-50 p-6 rounded-3xl border-4 border-dashed border-borde">
          <li>
            <strong>Fichas Médicas de Párvulos:</strong>
            <ul className="list-disc ml-6 mt-1 text-base">
              <li><em>Contenido:</em> Alergias severas, condiciones crónicas, tipo de sangre, medicamentos diarios y rutinas neurológicas.</li>
              <li><em>Valor de Seguridad:</em> Alta Integridad y Confidencialidad.</li>
            </ul>
          </li>
          <li>
            <strong>Registro de Apoderados y Tutores Autorizados:</strong>
            <ul className="list-disc ml-6 mt-1 text-base">
              <li><em>Contenido:</em> Nombres completos, RUT, direcciones, teléfonos de emergencia y, críticamente, la lista de personas autorizadas (y no autorizadas, como en casos de medidas cautelares) para retirar al menor del recinto.</li>
              <li><em>Valor de Seguridad:</em> Crítica Integridad.</li>
            </ul>
          </li>
          <li>
            <strong>Plataforma Web y Base de Datos:</strong>
            <ul className="list-disc ml-6 mt-1 text-base">
              <li><em>Contenido:</em> El portal en sí mismo, la infraestructura del servidor y el motor de base de datos.</li>
              <li><em>Valor de Seguridad:</em> Alta Disponibilidad.</li>
            </ul>
          </li>
        </ol>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-extrabold text-principalOscuro mb-4">⚠️ Riesgos Asociados a la Industria (Educación Preescolar)</h3>
        <ul className="list-none space-y-4">
          <li className="bg-red-50 p-4 rounded-2xl border-l-8 border-red-500 shadow-sm">
            <strong className="text-red-700 block text-xl mb-1">Riesgo Físico y Legal (Secuestro o entrega indebida)</strong>
            Si un atacante altera la base de datos mediante Inyección SQL y añade a una persona no autorizada a la lista de retiro, el jardín podría entregar a un niño a un extraño o a un progenitor con orden de alejamiento.
          </li>
          <li className="bg-orange-50 p-4 rounded-2xl border-l-8 border-orange-500 shadow-sm">
            <strong className="text-orange-700 block text-xl mb-1">Riesgo de Salud Vital</strong>
            La alteración o secuestro (Ransomware mediante Inyección de Comandos) de las fichas médicas impediría a las educadoras saber qué niño es alérgico a qué alimento en la hora de colación.
          </li>
          <li className="bg-yellow-50 p-4 rounded-2xl border-l-8 border-yellow-500 shadow-sm">
            <strong className="text-yellow-700 block text-xl mb-1">Riesgo Reputacional y Cierre Operativo</strong>
            La filtración de datos de menores causaría una fuga masiva de matrículas, demandas civiles y la posible clausura de la institución por incumplimiento de la ley de protección de datos personales.
          </li>
        </ul>
      </div>
    </div>
  )
}