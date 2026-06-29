import { useState } from 'react';

export default function CalculadoraCVSS() {
  const [score, setScore] = useState(9.8);

  const getSeverityInfo = (val) => {
    if (val === 0) return { label: 'Ninguno', color: 'bg-slate-400', text: 'text-slate-800' };
    if (val < 4.0) return { label: 'Bajo', color: 'bg-green-400', text: 'text-green-900' };
    if (val < 7.0) return { label: 'Medio', color: 'bg-yellow-400', text: 'text-yellow-900' };
    if (val < 9.0) return { label: 'Alto', color: 'bg-orange-500', text: 'text-orange-900' };
    return { label: 'Crítico', color: 'bg-red-600', text: 'text-white' };
  };

  const info = getSeverityInfo(score);

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Calculadora Interactiva */}
      <div className="bg-slate-50 p-6 rounded-3xl border-4 border-dashed border-borde">
        <h3 className="text-2xl font-extrabold text-principalOscuro mb-4 text-center">🧮 Simulador CVSS v3.1</h3>
        <div className="flex flex-col items-center gap-6">
          <div className={`w-40 h-40 rounded-full flex flex-col items-center justify-center border-8 border-white shadow-xl transition-colors duration-500 ${info.color}`}>
            <span className={`text-4xl font-extrabold ${info.text}`}>{score}</span>
            <span className={`text-lg font-bold uppercase tracking-widest ${info.text}`}>{info.label}</span>
          </div>
          <div className="w-full max-w-md">
            <label className="block text-texto font-bold mb-2 text-center">Ajusta el puntaje para ver la severidad:</label>
            <input 
              type="range" min="0" max="10" step="0.1" value={score} 
              onChange={(e) => setScore(parseFloat(e.target.value))}
              className="w-full h-4 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-principal"
            />
          </div>
        </div>
      </div>

      {/* Explicación Técnica */}
      <div className="space-y-6 text-texto text-lg">
        <h2 className="text-3xl text-principalOscuro border-b-4 border-amarilloKids pb-3 font-extrabold">
          ¿Cómo medimos el riesgo? (CVSS v3.1)
        </h2>
        <p>
          El <strong>CVSS (Common Vulnerability Scoring System)</strong> es el estándar internacional para medir la severidad de una vulnerabilidad. No es un número al azar; es el resultado de un vector de métricas que evalúa qué tan fácil es atacar y qué tanto daño causa.
        </p>

        <div className="bg-white p-6 rounded-3xl border-2 border-borde shadow-sm">
          <h4 className="font-extrabold text-principalOscuro text-xl mb-3">Caso de Estudio: SQL Injection en EduKids</h4>
          <p className="mb-4">
            Nuestro hallazgo de SQLi obtuvo un <strong>9.8 (Crítico)</strong>. El vector es <code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H</code>. Desglosémoslo:
          </p>
          <ul className="space-y-2 list-none">
            <li>✅ <strong>AV:N (Network):</strong> El ataque se puede hacer remotamente por internet, sin estar en el jardín.</li>
            <li>✅ <strong>AC:L (Low Complexity):</strong> No se necesita técnica avanzada, cualquier atacante con conocimientos básicos lo logra.</li>
            <li>✅ <strong>PR:N / UI:N (No Privileges / No User Interaction):</strong> No requiere cuenta de usuario ni que alguien haga clic; el ataque es automático.</li>
            <li>✅ <strong>C:H / I:H / A:H (High Impact):</strong> La Confidencialidad, Integridad y Disponibilidad se ven <strong>totalmente comprometidas</strong>.</li>
          </ul>
        </div>

        <p className="font-bold text-lg bg-red-50 border-l-8 border-red-500 p-4 rounded-r-2xl">
          En EduKids, este puntaje 9.8 significa una exposición total: RUTs, fichas médicas y datos personales de menores de edad quedan a merced de cualquier atacante. Es una infracción gravísima a la privacidad y un riesgo de seguridad física real para los niños.
        </p>
      </div>
    </div>
  );
}