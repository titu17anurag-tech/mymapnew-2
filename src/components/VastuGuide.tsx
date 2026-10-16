import React from 'react';
import { Compass, Sparkles, CheckCircle2, ShieldAlert } from 'lucide-react';

export const VastuGuide: React.FC = () => {
  const vastuZones = [
    {
      direction: 'North-East (Ishanya)',
      title: 'Pooja Room & Main Gate',
      color: 'border-sky-400 bg-sky-50 text-sky-950',
      badge: 'Spiritual Peace',
      description: 'The most sacred zone. Ideal for Mandir, meditation niche, and underground water sump. Must remain light and clutter-free.',
    },
    {
      direction: 'South-East (Agni Corner)',
      title: 'Kitchen & Cooking Zone',
      color: 'border-amber-400 bg-amber-50 text-amber-950',
      badge: 'Health & Vitality',
      description: 'Ruled by Fire (Agni). Platform facing East ensures morning light while cooking. Electrical inverter & meter location.',
    },
    {
      direction: 'South-West (Nairutya)',
      title: 'Master Bedroom Suite',
      color: 'border-emerald-400 bg-emerald-50 text-emerald-950',
      badge: 'Stability & Wealth',
      description: 'The heaviest quadrant of the house. Ideal for the master of the house, heavy wardrobes, and reinforced structural columns.',
    },
    {
      direction: 'North-West (Vayu)',
      title: 'Guest Room & Car Parking',
      color: 'border-indigo-400 bg-indigo-50 text-indigo-950',
      badge: 'Movement & Social',
      description: 'Governed by Air. Perfect for children’s study room, guest bedroom, vehicle parking, and septic tank placements.',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2 flex items-center justify-center gap-1.5">
            <Compass className="w-4 h-4 text-amber-500" />
            <span>Traditional Wisdom Meets Civil Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            100% Vastu Shastra Compliant Floor Plans
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Every home designed by MyMap balances Vedic directional energy with modern spatial ergonomics, maximizing cross-ventilation, natural sunlight, and harmonious living.
          </p>
        </div>

        {/* 4 Directional Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vastuZones.map((zone) => (
            <div
              key={zone.direction}
              className={`p-6 rounded-2xl border-2 ${zone.color} shadow-xs flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-white/80 px-2 py-0.5 rounded shadow-2xs">
                    {zone.badge}
                  </span>
                </div>

                <div className="text-xs font-extrabold opacity-75 uppercase tracking-wide">
                  {zone.direction}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">
                  {zone.title}
                </h3>

                <p className="text-xs text-slate-700 leading-relaxed">
                  {zone.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-300/40 flex items-center gap-1.5 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified in our ₹499 plan</span>
              </div>
            </div>
          ))}
        </div>

        {/* Central Brahmasthan Note */}
        <div className="mt-8 p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">
                The Central Brahmasthan Harmony
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                We ensure the center of your house is never choked with heavy columns or toilets. Our layouts introduce open dining halls or skylight shafts that invite positive energy and natural breezes.
              </p>
            </div>
          </div>
          <div className="text-xs font-bold text-slate-500 whitespace-nowrap bg-slate-100 px-3 py-2 rounded-lg">
            NBC Bye-Laws & Vastu Certified
          </div>
        </div>

      </div>
    </section>
  );
};
