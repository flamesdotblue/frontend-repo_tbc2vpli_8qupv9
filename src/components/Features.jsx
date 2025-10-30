import React from 'react';
import { Image, Shield, Sparkles, Zap, Check } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'AI Scene Generator',
    desc: 'Place your product in lifestyle scenes that match your brand with a single prompt.'
  },
  {
    icon: Image,
    title: '1-Click Background Removal',
    desc: 'Get crisp cutouts with perfect edges, even around hair, glass, and shadows.'
  },
  {
    icon: Zap,
    title: 'Batch Processing',
    desc: 'Upload a folder and transform hundreds of images in minutes, not hours.'
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Privacy',
    desc: 'Your assets stay private. We never train on your data and meet SOC2 standards.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 border-t border-black/5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Everything you need to ship beautiful images</h2>
          <p className="mt-4 text-slate-600">Purpose-built tools that turn raw shots into high-impact visuals for storefronts, ads, and socials.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-lg grid place-items-center bg-indigo-50 text-indigo-600">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2"><Check size={14} className="text-emerald-600"/> Fast and consistent results</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-emerald-600"/> Exports for web and print</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
