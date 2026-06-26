import { useState } from 'react'
import Resumen from './components/Resumen'
import InyeccionSQL from './components/InyeccionSQL'
import XSS from './components/XSS'
import Comandos from './components/Comandos'

export default function App() {
  const [seccionActiva, setSeccionActiva] = useState('resumen');

  const renderizarSeccion = () => {
    switch (seccionActiva) {
      case 'resumen':
        return <Resumen />;
      case 'sqli':
        return <InyeccionSQL />;
      case 'xss':
        return <XSS />;
      case 'comandos':
        return <Comandos />;
      default:
        return <Resumen />;
    }
  };

  const menuButtonClass = (seccion, colorClass) => `
    w-full text-left p-4 text-lg rounded-2xl transition-all duration-300 font-extrabold border-4
    ${seccionActiva === seccion 
      ? `${colorClass} text-white shadow-lg transform scale-105` 
      : 'bg-white text-texto border-borde hover:bg-slate-50 hover:border-principal hover:translate-x-2'}
  `;

  return (
    <div className="max-w-6xl mx-auto min-h-screen py-8">
      <header className="bg-principal text-white p-6 border-b-8 border-principalOscuro rounded-3xl shadow-xl mx-6 mb-8 transform -rotate-1 flex justify-center items-center">
        <h1 className="m-0 text-4xl tracking-wide font-extrabold flex items-center gap-4">
          <span className="inline-block animate-flotar text-5xl">🚀</span>
          Auditoría de Seguridad: EduKids
          <span className="inline-block animate-pintar text-5xl origin-bottom">🎨</span>
        </h1>
      </header>

      <div className="flex flex-col md:flex-row px-6 gap-8">
        <aside className="w-full md:w-80 bg-white p-6 rounded-3xl shadow-lg border-4 border-borde h-fit">
          <h3 className="mt-0 text-principalOscuro border-b-4 border-dashed border-amarilloKids pb-4 text-xl font-extrabold text-center">Menú de Informes</h3>
          <nav className="flex flex-col gap-4 mt-6">
            <button className={menuButtonClass('resumen', 'bg-principal border-principalOscuro')} onClick={() => setSeccionActiva('resumen')}>📝 Resumen Ejecutivo</button>
            <button className={menuButtonClass('sqli', 'bg-rojoKids border-red-700')} onClick={() => setSeccionActiva('sqli')}>🚨 1. Inyección SQL</button>
            <button className={menuButtonClass('xss', 'bg-amarilloKids border-orange-500')} onClick={() => setSeccionActiva('xss')}>🐛 2. XSS Reflected</button>
            <button className={menuButtonClass('comandos', 'bg-moradoKids border-purple-700')} onClick={() => setSeccionActiva('comandos')}>💻 3. Command Injection</button>
          </nav>
        </aside>

        <main className="flex-1 bg-white p-8 rounded-3xl shadow-lg border-4 border-borde">
          {renderizarSeccion()}
        </main>
      </div>
    </div>
  )
}