import React from 'react';
import { Rocket, Star } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 grid place-items-center text-white shadow-md">
            <Rocket size={18} />
          </div>
          <span className="font-semibold tracking-tight text-slate-900">Spexi Studio</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          <a href="#features" className="hover:text-slate-900 transition">Features</a>
          <a href="#showcase" className="hover:text-slate-900 transition">Showcase</a>
          <a href="#pricing" className="hover:text-slate-900 transition">Pricing</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex px-4 h-9 rounded-lg border border-slate-200 hover:bg-slate-50 transition text-slate-700">Sign in</button>
          <button className="inline-flex items-center gap-2 px-4 h-9 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition">
            <Star size={16} />
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
}
