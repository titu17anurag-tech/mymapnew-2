import React, { useState } from 'react';
import { SAMPLE_PLANS } from '../data/plansData';
import { FloorPlanItem } from '../types';
import { ArrowRight, Compass, Home, Layers, Check, Sparkles } from 'lucide-react';

interface PlansGalleryProps {
  onSelectPlan: (plan: FloorPlanItem) => void;
  onOpenRequirementForPlan: (planTitle: string) => void;
}

export const PlansGallery: React.FC<PlansGalleryProps> = ({
  onSelectPlan,
  onOpenRequirementForPlan,
}) => {
  const [filter, setFilter] = useState<string>('all');

  const filteredPlans = SAMPLE_PLANS.filter((p) => {
    if (filter === 'all') return true;
    if (filter === '30x40') return p.plotSize.includes('30 x 40');
    if (filter === '20x50') return p.plotSize.includes('20 x 50');
    if (filter === '40x60') return p.plotSize.includes('40 x 60');
    if (filter === 'single') return p.floors.includes('Ground');
    return true;
  });

  return (
    <section id="plans" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
              Standard Plot Library
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              Popular House Floor Plans & Layouts
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-xl">
              Engineered by certified architects for standard Indian plot sizes. Every design can be customized to match your exact plot boundary and road orientation.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto shrink-0 border border-slate-200">
            {[
              { id: 'all', label: 'All Layouts' },
              { id: '30x40', label: '30x40 (1200 sqft)' },
              { id: '20x50', label: '20x50 Linear' },
              { id: '40x60', label: '40x60 Bungalow' },
              { id: 'single', label: 'Ground Floor' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  filter === tab.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredPlans.map((plan) => (
            <div
              key={plan.id}
              className="group bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Thumbnail Switcher */}
                <div className="relative aspect-16/10 overflow-hidden bg-slate-900">
                  <img
                    src={plan.image3D}
                    alt={plan.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = '/images/floorplan_3d.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="bg-amber-400 text-slate-950 font-black text-xs px-2.5 py-1 rounded-md shadow-md">
                      {plan.plotSize}
                    </span>
                    <span className="bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold px-2 py-0.5 rounded border border-slate-700">
                      {plan.bhk}
                    </span>
                  </div>

                  {/* Vastu Badge */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-amber-300 font-semibold bg-slate-950/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-800">
                    <Compass className="w-3.5 h-3.5 text-amber-400" />
                    <span>{plan.facing} Facing (Vastu Compliant)</span>
                  </div>
                </div>

                {/* Plan Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                    {plan.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2">
                    {plan.description}
                  </p>

                  {/* Rooms list preview */}
                  <div className="mt-4 pt-4 border-t border-slate-200 grid grid-cols-2 gap-2 text-xs text-slate-700">
                    {plan.rooms.slice(0, 4).map((room) => (
                      <div key={room.name} className="flex items-center gap-1.5 truncate">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{room.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions Strip */}
              <div className="p-5 bg-white border-t border-slate-200 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] text-slate-500 block uppercase font-bold">Standard Plan Fee</span>
                  <span className="text-lg font-heading font-extrabold text-slate-900 font-mono">
                    ₹499<span className="text-xs text-slate-500 font-normal">/-</span>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectPlan(plan)}
                    className="px-3.5 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                  >
                    View Drawing Details
                  </button>
                  <button
                    onClick={() => onOpenRequirementForPlan(plan.title)}
                    className="px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-all shadow-xs flex items-center gap-1 cursor-pointer"
                  >
                    <span>Order Plan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
