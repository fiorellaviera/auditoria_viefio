export default function Matriz() {
  return (
    <div className="space-y-6 text-texto text-lg animate-fade-in">
      <h2 className="text-3xl text-principalOscuro border-b-4 border-amarilloKids pb-3 mb-6 font-extrabold">
        🗺️ Matriz de Riesgo y Mapa de Calor
      </h2>

      <p>
        La siguiente evaluación clasifica las vulnerabilidades descubiertas en la plataforma de EduKids, basándose en la fórmula de <strong>Riesgo = Probabilidad de Explotación × Impacto en el Negocio</strong>.
      </p>

      {/* Tabla de Evaluación de Vulnerabilidades */}
      <div className="mt-8">
        <h3 className="text-2xl font-extrabold text-principalOscuro mb-4">📋 Evaluación de Vulnerabilidades</h3>
        <div className="overflow-x-auto rounded-2xl border-4 border-borde shadow-sm">
          <table className="w-full text-left border-collapse bg-white">
            <thead className="bg-principal text-white">
              <tr>
                <th className="p-3 border-b-4 border-principalOscuro">Vulnerabilidad</th>
                <th className="p-3 border-b-4 border-principalOscuro text-center">Probabilidad</th>
                <th className="p-3 border-b-4 border-principalOscuro text-center">Impacto en EduKids</th>
                <th className="p-3 border-b-4 border-principalOscuro text-center">Nivel de Riesgo</th>
                <th className="p-3 border-b-4 border-principalOscuro w-1/3">Justificación del Nivel</th>
              </tr>
            </thead>
            <tbody className="text-base">
              <tr className="border-b-2 border-borde hover:bg-slate-50">
                <td className="p-3 font-bold text-red-700">Inyección SQL (SQLi)</td>
                <td className="p-3 text-center font-bold">Alta</td>
                <td className="p-3 text-center font-bold">Crítico</td>
                <td className="p-3 text-center"><span className="bg-red-600 text-white px-3 py-1 rounded-lg font-bold shadow-sm">CRÍTICO</span></td>
                <td className="p-3 text-sm">La falta de sanitización hace que el ataque sea trivial (Alta prob.). El impacto es Crítico porque expone el 100% de los datos de los apoderados, violando la confidencialidad.</td>
              </tr>
              <tr className="border-b-2 border-borde hover:bg-slate-50">
                <td className="p-3 font-bold text-orange-600">Cross-Site Scripting (XSS)</td>
                <td className="p-3 text-center font-bold">Media</td>
                <td className="p-3 text-center font-bold">Alto</td>
                <td className="p-3 text-center"><span className="bg-orange-500 text-white px-3 py-1 rounded-lg font-bold shadow-sm">ALTO</span></td>
                <td className="p-3 text-sm">Requiere interacción de la víctima (Media prob.), pero permite redirigir a los apoderados a pasarelas de pago falsas para robar dinero de matrículas (Alto impacto).</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3 font-bold text-red-700">Command Injection</td>
                <td className="p-3 text-center font-bold">Baja</td>
                <td className="p-3 text-center font-bold">Crítico</td>
                <td className="p-3 text-center"><span className="bg-red-600 text-white px-3 py-1 rounded-lg font-bold shadow-sm">CRÍTICO</span></td>
                <td className="p-3 text-sm">Requiere que el atacante entienda la infraestructura subyacente (Baja prob.), pero otorga control total del servidor. Permite borrar todas las bases de datos o instalar Ransomware (Impacto Crítico).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Mapa de Calor Visual */}
      <div className="mt-10">
        <h3 className="text-2xl font-extrabold text-principalOscuro mb-4">🔥 Mapa de Calor Visual</h3>
        
        <div className="bg-slate-50 p-6 rounded-3xl border-4 border-dashed border-borde">
          <div className="overflow-x-auto bg-white p-4 rounded-2xl shadow-inner border-2 border-borde">
            <table className="w-full text-center border-collapse">
              <tbody>
                <tr>
                  <td rowSpan="4" className="font-extrabold text-slate-500 transform -rotate-90 w-12 tracking-widest">PROBABILIDAD</td>
                  <td className="p-3 border-2 border-white bg-slate-100 font-bold w-24 text-right pr-4">Alta</td>
                  <td className="p-6 border-4 border-white bg-yellow-300 font-bold text-yellow-900 rounded-tl-2xl w-1/3">
                    Riesgo Medio
                  </td>
                  <td className="p-6 border-4 border-white bg-orange-500 font-bold text-white w-1/3">
                    Riesgo Alto
                  </td>
                  <td className="p-6 border-4 border-white bg-red-600 font-bold text-white rounded-tr-2xl animate-pulse shadow-inner w-1/3 relative">
                    <span className="block text-xl">🚨 SQLi</span>
                    <span className="text-xs font-normal opacity-90">Riesgo Crítico</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-2 border-white bg-slate-100 font-bold w-24 text-right pr-4">Media</td>
                  <td className="p-6 border-4 border-white bg-green-400 font-bold text-green-950">
                    Riesgo Bajo
                  </td>
                  <td className="p-6 border-4 border-white bg-orange-400 font-bold text-orange-950 shadow-inner relative">
                    <span className="block text-xl">🐛 XSS</span>
                    <span className="text-xs font-normal opacity-90">Riesgo Alto</span>
                  </td>
                  <td className="p-6 border-4 border-white bg-red-500 font-bold text-white">
                    Riesgo Crítico
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-2 border-white bg-slate-100 font-bold w-24 text-right pr-4">Baja</td>
                  <td className="p-6 border-4 border-white bg-green-400 font-bold text-green-950 rounded-bl-2xl">
                    Riesgo Bajo
                  </td>
                  <td className="p-6 border-4 border-white bg-yellow-300 font-bold text-yellow-900">
                    Riesgo Medio
                  </td>
                  <td className="p-6 border-4 border-white bg-red-600 font-bold text-white rounded-br-2xl animate-pulse shadow-inner relative">
                    <span className="block text-xl">💻 Comandos</span>
                    <span className="text-xs font-normal opacity-90">Riesgo Crítico</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-2 border-white bg-slate-100 font-bold"></td>
                  <td className="p-3 border-2 border-white bg-slate-100 font-bold">Medio</td>
                  <td className="p-3 border-2 border-white bg-slate-100 font-bold">Alto</td>
                  <td className="p-3 border-2 border-white bg-slate-100 font-bold">Crítico</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td colSpan="3" className="font-extrabold text-slate-500 pt-3 tracking-widest">IMPACTO EN EDUKIDS</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <ul className="mt-6 space-y-2 text-base">
            <li><span className="inline-block w-4 h-4 bg-red-600 rounded-full mr-2"></span> <strong>Zona Roja (Inaceptable):</strong> SQLi y Command Injection. Requieren parcheo inmediato antes de que el portal vuelva a estar en línea.</li>
            <li><span className="inline-block w-4 h-4 bg-orange-500 rounded-full mr-2"></span> <strong>Zona Naranja (Alto):</strong> XSS. Requiere mitigación en el próximo ciclo de desarrollo (máximo 7 días).</li>
            <li><span className="inline-block w-4 h-4 bg-green-400 rounded-full mr-2"></span> <strong>Zona Amarilla / Verde:</strong> (Sin hallazgos en esta auditoría).</li>
          </ul>
        </div>
      </div>
    </div>
  )
}