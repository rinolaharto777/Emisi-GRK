import React, { useState } from 'react';
import { CalculationType } from './types';
import ModuleCard from './components/ModuleCard';
import { Plane, Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [activeType, setActiveType] = useState<CalculationType>(CalculationType.RNAV2);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = Object.values(CalculationType);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b border-slate-200 p-4 flex justify-between items-center sticky top-0 z-20">
        <div className="flex items-center gap-2 font-bold text-slate-800 text-lg">
          <Plane className="w-6 h-6 text-blue-600" />
          EcoNav
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-600">
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`
        fixed md:sticky md:top-0 z-10 h-[calc(100vh-4rem)] md:h-screen w-64 bg-white border-r border-slate-200 flex flex-col
        transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0 top-16' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-6 hidden md:flex items-center gap-2 font-bold text-slate-800 text-xl border-b border-slate-100">
          <div className="bg-blue-600 text-white p-1.5 rounded-lg">
            <Plane className="w-5 h-5" />
          </div>
          EcoNav KP146
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Modul Kalkulasi</p>
          {navItems.map((type) => (
            <button
              key={type}
              onClick={() => {
                setActiveType(type);
                setIsMobileMenuOpen(false);
              }}
              className={`
                w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all
                ${activeType === type 
                  ? 'bg-blue-50 text-blue-700 shadow-sm border border-blue-100' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}
              `}
            >
              {type}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100 text-xs text-slate-400">
          <p>© 2024 EcoNav Indonesia</p>
          <p className="mt-1">Sesuai Regulasi KP146 Tahun 2021</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">{activeType}</h1>
            <p className="text-slate-600">
              Kalkulasi pengurangan emisi Gas Rumah Kaca (GRK) berdasarkan parameter operasional navigasi penerbangan.
            </p>
          </header>

          <ModuleCard type={activeType} />
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="font-semibold text-slate-800 mb-2">Metodologi KP146</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Menggunakan faktor emisi standar ICAO di mana 1 kg avtur menghasilkan 3.15 kg CO2. Perhitungan berbasis selisih jarak (PBN vs Konvensional) atau waktu (Taxi/Holding).
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="font-semibold text-slate-800 mb-2">RNP2 Papua</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Modul khusus untuk wilayah Papua yang mengutamakan navigasi berbasis satelit (GNSS) untuk mengatasi keterbatasan infrastruktur darat dan medan ekstrem.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="font-semibold text-slate-800 mb-2">A-SMGCS</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Optimalisasi pergerakan di darat (apron/taxiway) untuk mengurangi waktu mesin menyala (idle) sebelum take-off atau setelah landing.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
