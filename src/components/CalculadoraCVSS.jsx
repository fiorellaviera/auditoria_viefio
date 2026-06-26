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
    <div className="bg-slate-50 p-6 rounded-3xl border-4 border-dashed border-borde my-8">
      <h3 className="text-2xl font-extrabold text-principalOscuro mb-4 text-center">🧮 Simulador CVSS v3.1</h3>
      <div className="flex flex-col items-center gap-6">
        <div className={`w-40 h-40 rounded-full flex flex-col items-center justify-center border-8 border-white shadow-xl transition-colors duration-500 ${info.color}`}>
          <span className={`text-4xl font-extrabold ${info.text}`}>{score}</span>
          <span className={`text-lg font-bold uppercase tracking-widest ${info.text}`}>{info.label}</span>
        </div>
        <div className="w-full max-w-md">
          <label className="block text-texto font-bold mb-2 text-center">Desliza para ajustar el impacto:</label>
          <input 
            type="range" min="0" max="10" step="0.1" value={score} 
            onChange={(e) => setScore(parseFloat(e.target.value))}
            className="w-full h-4 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-principal"
          />
        </div>
      </div>
    </div>
  );
}