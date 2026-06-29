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

      {/* Guía Explicativa */}
      <div className="space-y-6 text-texto text-lg">
        <h2 className="text-3xl text-principalOscuro border-b-4 border-amarilloKids pb-3 font-extrabold">
          ¿Cómo funciona el CVSS v3.1?
        </h2>
        <p>
          El <strong>CVSS (Common Vulnerability Scoring System)</strong> es el estándar mundial para evaluar qué tan grave es una vulnerabilidad de seguridad. Funciona como un "termómetro de riesgo".
        </p>

        <div className="bg-white p-6 rounded-3xl border-2 border-borde shadow-sm space-y-4">
          <h4 className="font-extrabold text-principalOscuro text-xl">¿Cómo se usa?</h4>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Métricas de Base:</strong> Se evalúa qué tan fácil es acceder a la falla (¿es por internet o requiere estar en el jardín?), qué tanto esfuerzo requiere el ataque y si se necesita algún privilegio especial.</li>
            <li><strong>Impacto:</strong> Se mide cuánto se daña la confidencialidad, la integridad de los datos de los niños y la disponibilidad del servicio.</li>
            <li><strong>Resultado:</strong> El sistema entrega un número del 0 al 10. Mientras más alto sea, más urgente es aplicar un parche de seguridad.</li>
          </ul>
        </div>

        <p className="p-4 bg-yellow-50 border-l-8 border-amarilloKids rounded-r-2xl font-bold">
          💡 En esta auditoría, usamos este sistema para priorizar nuestros esfuerzos: las vulnerabilidades con puntajes superiores a 9.0 (como nuestras inyecciones críticas) se consideran de remediación inmediata para proteger a la comunidad de EduKids.
        </p>
      </div>
    </div>
  );
}