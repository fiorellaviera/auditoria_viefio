import { useState } from 'react'

export default function App() {
  const [seccionActiva, setSeccionActiva] = useState('resumen');

  const renderizarSeccion = () => {
    switch (seccionActiva) {
      case 'resumen':
        return <div><h2 className="text-3xl text-principalOscuro border-b-4 border-amarilloKids pb-3 mb-6 font-extrabold">📝 Resumen Ejecutivo</h2><p className="text-lg">Aquí irá el componente Resumen.jsx...</p></div>;
      case 'sqli':
        return <div><h2 className="text-3xl text-rojoKids border-b-4 border-rojoKids pb-3 mb-6 font-extrabold">🚨 Inyección SQL</h2><p className="text-lg">Aquí irá el componente InyeccionSQL.jsx...</p></div>;
      case 'xss':
        return <div><h2 className="text-3xl text-amarilloKids border-b-4 border-amarilloKids pb-3 mb-6 font-extrabold">🐛 Cross-Site Scripting</h2><p className="text-lg">Aquí irá el componente XSS.jsx...</p></div>;
      case 'comandos':
        return <div><h2 className="text-3xl text-moradoKids border-b-4 border-moradoKids pb-3 mb-6 font-extrabold">💻 Inyección de Comandos</h2><p className="text-lg">Aquí irá el componente Comandos.jsx...</p></div>;
      default:
        return <div><h2 className="text-3xl text-principalOscuro border-b-4 border-amarilloKids pb-3 mb-6 font-extrabold">Resumen Ejecutivo</h2><p className="text-lg">Selecciona una opción del menú.</p></div>;
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
      {/* Cabecera con un ligero giro juguetón */}
      <header className="bg-principal text-white p-6 text-center border-b-8 border-principalOscuro rounded-3xl shadow-xl mx-6 mb-8 transform -rotate-1">
        <h1 className="m-0 text-4xl tracking-wide font-extrabold">🚀 Auditoría de Seguridad: EduKids 🎨</h1>
      </header>

      <div className="flex flex-col md:flex-row px-6 gap-8">
        {/* Menú Lateral */}
        <aside className="w-full md:w-80 bg-white p-6 rounded-3xl shadow-lg border-4 border-borde h-fit">
          <h3 className="mt-0 text-principalOscuro border-b-4 border-dashed border-amarilloKids pb-4 text-xl font-extrabold text-center">Menú de Informes</h3>
          <nav className="flex flex-col gap-4 mt-6">
            <button className={menuButtonClass('resumen', 'bg-principal border-principalOscuro')} onClick={() => setSeccionActiva('resumen')}>📝 Resumen Ejecutivo</button>
            <button className={menuButtonClass('sqli', 'bg-rojoKids border-red-700')} onClick={() => setSeccionActiva('sqli')}>🚨 1. Inyección SQL</button>
            <button className={menuButtonClass('xss', 'bg-amarilloKids border-orange-500')} onClick={() => setSeccionActiva('xss')}>🐛 2. XSS Reflected</button>
            <button className={menuButtonClass('comandos', 'bg-moradoKids border-purple-700')} onClick={() => setSeccionActiva('comandos')}>💻 3. Command Injection</button>
          </nav>
        </aside>

        {/* Contenido Principal */}
        <main className="flex-1 bg-white p-8 rounded-3xl shadow-lg border-4 border-borde">
          {renderizarSeccion()}
        </main>
      </div>
    </div>
  )
}