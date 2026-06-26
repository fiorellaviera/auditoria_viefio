export default function Recuperacion() {
  return (
    <div className="space-y-6 text-texto text-lg animate-fade-in">
      <h2 className="text-3xl text-principalOscuro border-b-4 border-amarilloKids pb-3 mb-6 font-extrabold">
        🔄 Mejora Tecnológica y Plan de Recuperación
      </h2>

      <p className="font-bold text-principalOscuro mb-6">
        En caso de que las defensas fallen, EduKids debe tener la capacidad de restaurar sus servicios sin comprometer la seguridad física de los menores.
      </p>

      <div>
        <h3 className="text-2xl font-extrabold text-principalOscuro mb-4">🆘 Plan de Recuperación ante Desastres (DRP)</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-red-50 p-5 rounded-3xl border-2 border-red-200 shadow-sm">
            <h4 className="font-extrabold text-red-700 text-xl mb-2">1. Contención</h4>
            <p className="text-base">Ante sospecha de brecha, aislar la aplicación web de internet inmediatamente para detener la exfiltración de datos. Cambiar todas las contraseñas de administradores y bases de datos.</p>
          </div>
          <div className="bg-orange-50 p-5 rounded-3xl border-2 border-orange-200 shadow-sm">
            <h4 className="font-extrabold text-orange-700 text-xl mb-2">2. Erradicación</h4>
            <p className="text-base">Identificar la vulnerabilidad explotada revisando los logs del servidor y eliminar cualquier "puerta trasera" (webshell) dejada por el atacante mediante inyección de comandos.</p>
          </div>
          <div className="bg-yellow-50 p-5 rounded-3xl border-2 border-yellow-200 shadow-sm">
            <h4 className="font-extrabold text-yellow-700 text-xl mb-2">3. Recuperación</h4>
            <p className="text-base">Restaurar el sistema utilizando el último backup inmutable disponible. Validar que la base de datos restaurada no contenga manipulaciones.</p>
          </div>
          <div className="bg-blue-50 p-5 rounded-3xl border-2 border-blue-200 shadow-sm">
            <h4 className="font-extrabold text-blue-700 text-xl mb-2">4. Comunicación</h4>
            <p className="text-base">Notificar formalmente a los apoderados sobre el incidente, el alcance de los datos comprometidos y las acciones a seguir (como estar atentos a intentos de suplantación o phishing).</p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-extrabold text-principalOscuro mb-4">🚀 Plan de Mejora Tecnológica</h3>
        <p className="mb-4">La arquitectura actual (DVWA simulada) es obsoleta e insegura por diseño. Se propone:</p>
        <ul className="list-disc ml-6 space-y-2 bg-slate-50 p-6 rounded-3xl border-4 border-dashed border-borde">
          <li><strong>Migración de Framework:</strong> Reescribir el portal web utilizando React para el frontend (que mitiga el XSS por defecto al escapar los datos renderizados) y Node.js para el backend.</li>
          <li><strong>Auditorías Periódicas:</strong> Establecer pruebas de penetración (Pentesting) semestrales antes de cada periodo de matrículas.</li>
        </ul>
      </div>
    </div>
  )
}