export default function Comandos() {
  return (
    <div className="space-y-6 text-texto text-lg">
      <h2 className="text-3xl text-moradoKids border-b-4 border-moradoKids pb-3 mb-6 font-extrabold">
        💻 Vulnerabilidad 3: Inyección de Comandos
      </h2>

      {/* BLOQUE DE EVIDENCIA */}
      <div>
        <h3 className="text-2xl font-extrabold text-principalOscuro mb-2">📸 Evidencia del Ataque</h3>
        <div className="bg-slate-50 p-4 rounded-3xl border-4 border-dashed border-borde text-center">
          <img src="/comandos_viefio.png" alt="Inyección de Comandos" className="mx-auto rounded-xl shadow-md max-h-96 object-contain" />
          <p className="text-sm font-bold text-slate-500 mt-3 italic">
            Figura 3: Evidencia del ataque de Inyección de Comandos, donde se observa el uso del carácter ';' para ejecutar el comando `cat /etc/passwd` y visualizar los usuarios del sistema.
          </p>
        </div>
      </div> 

      {/* BLOQUE DE EXPLICACIÓN */}
      <div>
        <h3 className="text-2xl font-extrabold text-principalOscuro mb-2">⚙️ Explicación Técnica</h3>
        <p>
          Esta vulnerabilidad surge cuando el código fuente de la página pasa parámetros proporcionados por el usuario directamente a una consola del sistema operativo (por ejemplo, usando funciones como <code>exec()</code> o <code>system()</code> en PHP).
        </p>
        <p className="mt-2">
          El sistema está programado para ejecutar un comando de red (<code>ping</code> a una IP). Sin embargo, en sistemas basados en Unix/Linux, el carácter punto y coma (<code>;</code>) actúa como un terminador de línea, indicando que se debe ejecutar un comando nuevo a continuación.
        </p>
        <p className="mt-2">
          Al ingresar <code className="bg-slate-200 px-2 py-1 rounded text-purple-700 font-bold">127.0.0.1; cat /etc/passwd</code>, el sistema primero hace el ping, y luego ejecuta maliciosamente <code>cat /etc/passwd</code>, exponiendo el archivo principal de usuarios del sistema operativo.
        </p>
      </div>

      {/* BLOQUE DE GRAVEDAD */}
      <div className="bg-purple-50 border-l-8 border-moradoKids p-5 rounded-r-2xl mt-4 shadow-sm">
        <h4 className="font-extrabold text-purple-800 text-xl mb-2">⚠️ Gravedad e Impacto</h4>
        <ul className="list-disc ml-6 space-y-1 text-purple-900">
          <li><strong>Puntaje CVSS v3.1:</strong> 9.8 (Crítico) - <code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H</code></li>
          <li><strong>Impacto en EduKids:</strong> Esta es la vulnerabilidad más devastadora, ya que otorga control total sobre la máquina que aloja la página web. Un atacante podría obtener una "shell inversa", eliminar completamente las carpetas con la información de la institución educativa o cifrar el servidor para exigir un rescate (Ransomware), destruyendo la disponibilidad de los sistemas.</li>
        </ul>
      </div>

      {/* BLOQUE DE PREVENCIÓN */}
      <div>
        <h3 className="text-2xl font-extrabold text-principalOscuro mb-2 mt-6">🛡️ Políticas de Prevención y Controles</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Política de Prevención:</strong> La regla fundamental es evitar llamar a comandos del sistema operativo desde la aplicación web. Si la funcionalidad es indispensable, se debe validar estrictamente la entrada. Para este caso, el servidor debe verificar mediante expresiones regulares que el texto ingresado es exclusivamente una dirección IP con el formato <code>X.X.X.X</code>, rechazando inmediatamente cualquier otro carácter.</li>
          <li><strong>Control de Mitigación:</strong> Aplicar el principio de "Sandboxing". La aplicación web debe ejecutarse bajo un usuario del sistema operativo con privilegios mínimos absolutos, aislado en un contenedor (ej. Docker) que no tenga acceso a los archivos críticos (<code>/etc/passwd</code>) ni permisos para instalar programas adicionales.</li>
        </ul>
      </div>
    </div>
  )
}