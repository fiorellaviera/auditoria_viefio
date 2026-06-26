export default function Controles() {
  return (
    <div className="space-y-6 text-texto text-lg animate-fade-in">
      <h2 className="text-3xl text-principalOscuro border-b-4 border-amarilloKids pb-3 mb-6 font-extrabold">
        🛡️ Políticas de Prevención y Controles
      </h2>

      <p className="bg-blue-50 border-l-8 border-principal p-5 rounded-r-2xl shadow-sm text-blue-900 font-bold">
        Para proteger a la comunidad de EduKids y garantizar la confidencialidad de los menores, se establecen las siguientes directrices de seguridad.
      </p>

      <div className="mt-8">
        <h3 className="text-2xl font-extrabold text-green-700 mb-4">🛑 Políticas de Prevención (Evitar que suceda)</h3>
        <ol className="list-decimal ml-6 space-y-3">
          <li><strong>Adopción de Consultas Parametrizadas (Para SQLi):</strong> Queda estrictamente prohibido concatenar texto introducido por el usuario directamente en las consultas SQL. Los desarrolladores deben usar <em>Prepared Statements</em> u ORMs (como Prisma o Sequelize).</li>
          <li><strong>Validación de Entradas y Salidas (Para XSS y Comandos):</strong> Implementar listas blancas estandarizadas. Un campo de "Nombre" solo debe aceptar letras, rechazando automáticamente caracteres especiales como <code className="bg-slate-200 px-2 py-1 rounded text-red-600 font-bold">{'< > ; \' "'}</code>.</li>
          <li><strong>Principio de Mínimo Privilegio:</strong> El usuario de la base de datos que conecta la aplicación web no debe tener permisos de <code className="bg-slate-200 px-2 py-1 rounded">DROP</code> (borrar tablas) ni de administrador del sistema operativo.</li>
        </ol>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-extrabold text-orange-600 mb-4">🩹 Controles de Mitigación (Reducir el daño)</h3>
        <ol className="list-decimal ml-6 space-y-3">
          <li><strong>Cifrado de Datos Sensibles (Data at Rest):</strong> Los RUTs, contraseñas (mediante hashes seguros como bcrypt) y datos médicos deben estar encriptados en la base de datos. Si ocurre un SQLi, la información robada será inútil para el atacante.</li>
          <li><strong>Implementación de un WAF (Web Application Firewall):</strong> Desplegar un firewall de capa 7 (como Cloudflare) que detecte y bloquee automáticamente cargas útiles maliciosas de XSS e inyecciones antes de que toquen nuestro servidor.</li>
          <li><strong>Aislamiento del Servidor (Sandboxing):</strong> El servicio web debe ejecutarse en un contenedor (ej. Docker) sin acceso a los archivos críticos del sistema operativo (<code className="bg-slate-200 px-2 py-1 rounded">/etc/passwd</code>), mitigando el impacto de una inyección de comandos.</li>
        </ol>
      </div>
    </div>
  )
}