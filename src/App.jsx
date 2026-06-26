import { useState } from 'react'

export default function App() {
  const [seccionActiva, setSeccionActiva] = useState('resumen');

  const renderizarSeccion = () => {
    switch (seccionActiva) {
      case 'resumen':
        return <div><h2 className="text-2xl text-salviaOscuro border-b-2 border-borde pb-3 mb-4 font-bold">Resumen Ejecutivo</h2><p>Aquí irá el componente Resumen.jsx...</p></div>;
      case 'sqli':
        return <div><h2 className="text-2xl text-salviaOscuro border-b-2 border-borde pb-3 mb-4 font-bold">Inyección SQL</h2><p>Aquí irá el componente InyeccionSQL.jsx...</p></div>;
      case 'xss':
        return <div><h2 className="text-2xl text-salviaOscuro border-b-2 border-borde pb-3 mb-4 font-bold">Cross-Site Scripting</h2><p>Aquí irá el componente XSS.jsx...</p></div>;
      case 'comandos':
        return <div><h2 className="text-2xl text-salviaOscuro border-b-2 border-borde pb-3 mb-4 font-bold">Inyección de Comandos</h2><p>Aquí irá el componente Comandos.jsx...</p></div>;
      default:
        return <div><h2 className="text-2xl text-salviaOscuro border-b-2 border-borde pb-3 mb-4 font-bold">Resumen Ejecutivo</h2><p>Selecciona una opción del menú.</p></div>;
    }
  };

  const menuButtonClass = (seccion) => `
    w-full text-left p-3 text-base rounded-xl transition-all duration-300 font-semibold border-2
    ${seccionActiva === seccion 
      ? 'bg-salvia text-white border-salviaOscuro shadow-md' 
      : 'bg-transparent text-slate-500 border-transparent hover:bg-slate-50 hover:border-slate-200 hover:translate-x-1'}
  `;

  return (
    <div className="max-w-6xl mx-auto min-h-screen">
      <header className="bg-salvia text-white p-6 text-left border-b-4 border-salviaOscuro rounded-b-2xl shadow-md">
        <h1 className="m-0 text-3xl tracking-wide font-bold">🛡️ Auditoría de Seguridad Web: EduKids</h1>
      </header>

      <div className="flex flex-col md:flex-row p-6 gap-8">
        {/* Menú Lateral */}
        <aside className="w-full md:w-72 bg-white p-6 rounded-2xl shadow-sm border-2 border-borde h-fit">
          <h3 className="mt-0 text-salviaOscuro border-b-2 border-dashed border-slate-300 pb-3 text-lg font-bold">Informe A: Vulnerabilidades</h3>
          <nav className="flex flex-col gap-2 mt-4">
            <button className={menuButtonClass('resumen')} onClick={() => setSeccionActiva('resumen')}>Resumen Ejecutivo</button>
            <button className={menuButtonClass('sqli')} onClick={() => setSeccionActiva('sqli')}>1. Inyección SQL</button>
            <button className={menuButtonClass('xss')} onClick={() => setSeccionActiva('xss')}>2. XSS Reflected</button>
            <button className={menuButtonClass('comandos')} onClick={() => setSeccionActiva('comandos')}>3. Command Injection</button>
          </nav>
        </aside>

        {/* Contenido Principal */}
        <main className="flex-1 bg-white p-8 rounded-2xl shadow-sm border-2 border-borde">
          {renderizarSeccion()}
        </main>
      </div>
    </div>
  )
}