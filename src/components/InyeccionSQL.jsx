export default function InyeccionSQL() {
  return (
    <div className="space-y-6 text-texto text-lg">
      <h2 className="text-3xl text-rojoKids border-b-4 border-rojoKids pb-3 mb-6 font-extrabold">
        🚨 Vulnerabilidad 1: Inyección SQL (SQLi)
      </h2>

      <div>
        <h3 className="text-2xl font-extrabold text-principalOscuro mb-2">📸 Evidencia del Ataque</h3>
        <div className="bg-slate-50 p-4 rounded-3xl border-4 border-dashed border-borde text-center">
          <img src="/img_viefio/sqli_viefio.png" alt="Inyección SQL" className="mx-auto rounded-xl shadow-md max-h-96 object-contain" />
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-extrabold text-principalOscuro mb-2">⚙️ Explicación Técnica</h3>
        <p>
          La Inyección SQL ocurre debido a una falla crítica en la validación de los datos de entrada. La aplicación web toma el input del usuario (el ID) y lo concatena directamente en la consulta de la base de datos.
        </p>
        <p className="mt-2">
          Al inyectar el payload <code className="bg-slate-200 px-2 py-1 rounded text-red-600 font-bold">' OR '1'='1</code>, la consulta original se transforma maliciosamente en:<br/>
          <code className="bg-slate-800 text-green-400 p-2 rounded block mt-2">SELECT * FROM usuarios WHERE id = '' OR '1'='1'</code>
        </p>
        <p className="mt-2">
          Como la afirmación matemática <code>1=1</code> es siempre verdadera, el motor de la base de datos ignora cualquier filtro de autenticación y devuelve absolutamente todos los registros almacenados en la tabla.
        </p>
      </div>

      <div className="bg-red-50 border-l-8 border-rojoKids p-5 rounded-r-2xl mt-4 shadow-sm">
        <h4 className="font-extrabold text-red-700 text-xl mb-2">⚠️ Gravedad e Impacto</h4>
        <ul className="list-disc ml-6 space-y-1 text-red-900">
          <li><strong>Puntaje CVSS v3.1:</strong> 9.8 (Crítico) - <code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H</code></li>
          <li><strong>Impacto en EduKids:</strong> Exposición total de la base de datos. Un atacante obtiene acceso inmediato a todos los RUTs, direcciones, teléfonos y fichas médicas de los menores, lo que constituye una infracción gravísima a la privacidad y un riesgo de seguridad física.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-extrabold text-principalOscuro mb-2 mt-6">🛡️ Políticas de Prevención y Controles</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Política de Prevención:</strong> Reestructurar el código de acceso a datos utilizando <strong>Consultas Parametrizadas (Prepared Statements)</strong> u ORMs. Esto obliga a la base de datos a tratar el input del usuario estrictamente como texto inofensivo, impidiendo que modifique la lógica de la consulta.</li>
          <li><strong>Control de Mitigación:</strong> Encriptar los campos sensibles en la base de datos (Data at Rest) para que, en caso de extracción, la información médica y personal de los niños sea ilegible sin la llave criptográfica. Adicionalmente, limitar los privilegios del usuario de la base de datos solo a operaciones de lectura (<code>SELECT</code>), bloqueando permisos de borrado o modificación.</li>
        </ul>
      </div>
    </div>
  )
}