import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function PricingCTA() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-slate-50 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Simple, transparent pricing</h2>
            <p className="mt-4 text-slate-600">Only pay for what you use. Start free, then scale with your workflow. Cancel anytime.</p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                'Unlimited background removal',
                'AI scenes included',
                'Commercial usage rights',
                'Priority rendering',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-slate-700">
                  <Check size={16} className="text-emerald-600" /> {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm max-w-md ml-auto">
              <div className="flex items-end gap-2">
                <span className="text-5xl font-extrabold tracking-tight text-slate-900">$19</span>
                <span className="text-slate-600 mb-1">/ month</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">Includes 500 credits. Additional credits billed at $0.04 each.</p>

              <button className="mt-6 w-full inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition">
                Start free trial
                <ArrowRight size={18} />
              </button>

              <p className="mt-3 text-xs text-slate-500 text-center">No credit card required • Cancel anytime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
