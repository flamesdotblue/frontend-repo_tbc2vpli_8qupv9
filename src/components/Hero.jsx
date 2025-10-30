import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm"
            >
              <Sparkles size={16} className="text-indigo-600" />
              <span className="text-xs sm:text-sm">AI-powered product imagery in seconds</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900"
            >
              Create studio-grade photos without a studio
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 text-lg text-slate-600 max-w-xl"
            >
              Remove backgrounds, add on-brand scenes, and export high-converting images for your store and ads. No lighting setup, no retouching — just results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <button className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition">
                Try it free
                <ArrowRight size={18} />
              </button>
              <button className="inline-flex items-center justify-center h-11 px-6 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition">
                Watch a demo
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex items-center gap-4 text-sm text-slate-600"
            >
              <div className="flex -space-x-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/48?img=${i + 3}`}
                    alt="User"
                    className="h-8 w-8 rounded-full ring-2 ring-white"
                    loading="lazy"
                  />
                ))}
              </div>
              <span>
                Trusted by 5k+ brands and creators
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-xl aspect-[4/3] rounded-2xl border border-slate-200 bg-white/60 backdrop-blur p-2 shadow-xl">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-50">
                <img
                  src="https://images.unsplash.com/photo-1520697222864-4a71ce9f3a13?q=80&w=2069&auto=format&fit=crop"
                  alt="Product showcase"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 via-black/30 to-transparent text-white">
                  <p className="font-medium">Background removed and scene generated</p>
                  <p className="text-sm text-white/80">Took 4.2 seconds</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
