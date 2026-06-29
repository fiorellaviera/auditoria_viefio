export default function XSS() {
  return (
    <div className="space-y-6 text-texto text-lg">
      <h2 className="text-3xl text-amarilloKids border-b-4 border-amarilloKids pb-3 mb-6 font-extrabold">
        🐛 Vulnerabilidad 2: Cross-Site Scripting (XSS Reflected)
      </h2>

      {/* BLOQUE DE EVIDENCIA */}
      <div>
        <h3 className="text-2xl font-extrabold text-principalOscuro mb-2">📸 Evidencia del Ataque</h3>
        <div className="bg-slate-50 p-4 rounded-3xl border-4 border-dashed border-borde text-center">
          <img src="/xss_viefio.png" alt="XSS Reflected" className="mx-auto rounded-xl shadow-md max-h-96 object-contain" />
          <p className="text-sm font-bold text-slate-500 mt-3 italic">
            Figura 2: Evidencia del ataque XSS Reflected mostrando la ejecución exitosa del script malicioso mediante la ventana emergente (alert) en el navegador.
          </p>
        </div>
      </div> 

      {/* BLOQUE DE EXPLICACIÓN */}
      <div>
        <h3 className="text-2xl font-extrabold text-principalOscuro mb-2">⚙️ Explicación Técnica</h3>
        <p>
          El Cross-Site Scripting Reflejado se produce cuando la aplicación web recibe un dato a través de una petición HTTP (como un formulario o la URL) y lo incluye inmediatamente en el código HTML de respuesta sin sanitizarlo ni escapar sus caracteres.
        </p>
        <p className="mt-2">
          Al enviar el payload <code className="bg-slate-200 px-2 py-1 rounded text-orange-600 font-bold">{'<script>alert(\'XSS\')</script>'}</code>, el servidor incrusta estas etiquetas directamente en la página. Cuando el navegador del usuario víctima recibe el HTML modificado, interpreta las etiquetas no como un texto normal, sino como un comando ejecutable, procesando el código malicioso en el contexto de su propia sesión.
        </p>
      </div>

      {/* BLOQUE DE GRAVEDAD */}
      <div className="bg-orange-50 border-l-8 border-amarilloKids p-5 rounded-r-2xl mt-4 shadow-sm">
        <h4 className="font-extrabold text-orange-700 text-xl mb-2">⚠️ Gravedad e Impacto</h4>
        <ul className="list-disc ml-6 space-y-1 text-orange-900">
          <li><strong>Puntaje CVSS v3.1:</strong> 6.1 (Medio) - <code>CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N</code></li>
          <li><strong>Impacto en EduKids:</strong> Un atacante podría enviar un correo simulando ser la dirección del jardín, incluyendo un link alterado. Al hacer clic, el script se ejecuta en el navegador del apoderado, permitiendo al atacante robar sus cookies de sesión (secuestro de cuenta) o inyectar un formulario falso para capturar datos de tarjetas de crédito al momento de pagar una mensualidad.</li>
        </ul>
      </div>

      {/* BLOQUE DE PREVENCIÓN */}
      <div>
        <h3 className="text-2xl font-extrabold text-principalOscuro mb-2 mt-6">🛡️ Políticas de Prevención y Controles</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Política de Prevención:</strong> Aplicar codificación de salida (Output Encoding) a cualquier dato introducido por el usuario antes de renderizarlo en el navegador. Las etiquetas HTML y caracteres especiales deben convertirse en entidades seguras (ej. <code>{'<'}</code> pasa a ser <code>&lt;</code>).</li>
          <li><strong>Control de Mitigación:</strong> Implementar en el servidor encabezados HTTP de seguridad como <strong>Content Security Policy (CSP)</strong>. Una política CSP restrictiva prohibirá al navegador ejecutar scripts que no provengan de los dominios oficiales de EduKids, bloqueando la ejecución del código inyectado.</li>
        </ul>
      </div>
    </div>
  )
}