import { useState } from 'react'
import Resumen from './components/Resumen'
import InyeccionSQL from './components/InyeccionSQL'
import XSS from './components/XSS'
import Comandos from './components/Comandos'
import Activos from './components/Activos'
import Matriz from './components/Matriz'
import Controles from './components/Controles'
import Recuperacion from './components/Recuperacion'
import Prompts from './components/Prompts'
import CalculadoraCVSS from './components/CalculadoraCVSS'

export default function App() {
  const [seccionActiva, setSeccionActiva] = useState('resumen');

  const renderizarSeccion = () => {
    switch (seccionActiva) {
      case 'resumen': return <Resumen />;
      case 'sqli': return <InyeccionSQL />;
      case 'xss': return <XSS />;
      case 'comandos': return <Comandos />;
      case 'activos': return <Activos />;
      case 'matriz': return <Matriz />;
      case 'controles': return <Controles />;
      case 'recuperacion': return <Recuperacion />;
      case 'prompts': return <Prompts />;
      case 'calculadora': return <CalculadoraCVSS />;
      default: return <Resumen />;
    }
  };

  const menuButtonClass = (seccion, colorClass) => `
    w-full text-left p-3 text-base md:text-lg rounded-xl transition-all duration-300 font-extrabold border-4
    ${seccionActiva === seccion 
      ? `${colorClass} text-white shadow-lg transform scale-105` 
      : 'bg-white text-texto border-borde hover:bg-slate-50 hover:border-principal hover:translate-x-2'}
  `;

  return (
    <div className="max-w-7xl mx-auto min-h-screen py-8">
      <header className="bg-principal text-white p-6 border-b-8 border-principalOscuro rounded-3xl shadow-xl mx-6 mb-8 transform -rotate-1 flex justify-center items-center">
        <h1 className="m-0 text-3xl md:text-4xl tracking-wide font-extrabold flex items-center gap-4">
          <span className="inline-block animate-flotar text-4xl md:text-5xl">🚀</span>
          Auditoría de Seguridad: EduKids
          <span className="inline-block animate-pintar text-4xl md:text-5xl origin-bottom">🎨</span>
        </h1>
      </header>

      <div className="flex flex-col lg:flex-row px-6 gap-8">
        <aside className="w-full lg:w-80 bg-white p-6 rounded-3xl shadow-lg border-4 border-borde h-fit">
          
          <h3 className="mt-0 text-principalOscuro border-b-4 border-dashed border-amarilloKids pb-2 text-xl font-extrabold text-center">Informe A</h3>
          <nav className="flex flex-col gap-3 mt-4 mb-6">
            <button className={menuButtonClass('resumen', 'bg-principal border-principalOscuro')} onClick={() => setSeccionActiva('resumen')}>📝 Resumen Ejecutivo</button>
            <button className={menuButtonClass('sqli', 'bg-rojoKids border-red-700')} onClick={() => setSeccionActiva('sqli')}>🚨 1. Inyección SQL</button>
            <button className={menuButtonClass('xss', 'bg-amarilloKids border-orange-500')} onClick={() => setSeccionActiva('xss')}>🐛 2. XSS Reflected</button>
            <button className={menuButtonClass('comandos', 'bg-moradoKids border-purple-700')} onClick={() => setSeccionActiva('comandos')}>💻 3. Command Injection</button>
          </nav>

          <h3 className="text-principalOscuro border-b-4 border-dashed border-amarilloKids pb-2 text-xl font-extrabold text-center">Informe B</h3>
          <nav className="flex flex-col gap-3 mt-4 mb-6">
            <button className={menuButtonClass('activos', 'bg-principal border-principalOscuro')} onClick={() => setSeccionActiva('activos')}>🏫 Activos y Riesgos</button>
            <button className={menuButtonClass('matriz', 'bg-green-500 border-green-700')} onClick={() => setSeccionActiva('matriz')}>🗺️ Matriz de Riesgo</button>
            <button className={menuButtonClass('controles', 'bg-blue-500 border-blue-700')} onClick={() => setSeccionActiva('controles')}>🛡️ Controles (OWASP)</button>
            <button className={menuButtonClass('recuperacion', 'bg-teal-500 border-teal-700')} onClick={() => setSeccionActiva('recuperacion')}>🔄 Plan Recuperación</button>
          </nav>

          <h3 className="text-principalOscuro border-b-4 border-dashed border-amarilloKids pb-2 text-xl font-extrabold text-center">Extras</h3>
          <nav className="flex flex-col gap-3 mt-4">
            <button className={menuButtonClass('calculadora', 'bg-slate-800 border-black')} onClick={() => setSeccionActiva('calculadora')}>🧮 Calculadora CVSS</button>
            <button className={menuButtonClass('prompts', 'bg-pink-500 border-pink-700')} onClick={() => setSeccionActiva('prompts')}>🤖 Bitácora IA</button>
          </nav>

        </aside>

        <main className="flex-1 bg-white p-8 rounded-3xl shadow-lg border-4 border-borde overflow-hidden">
          {renderizarSeccion()}
        </main>
      </div>
    </div>
  )
}