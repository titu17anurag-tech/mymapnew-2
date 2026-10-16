import React from 'react';
import { TESTIMONIALS } from '../data/plansData';
import { Star, MapPin, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
            Homeowner Stories
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Trusted by 5,000+ Families Across India
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            From plot registration to concrete casting—hear from genuine home builders who built their dream houses using MyMap floor plans.
          </p>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between hover:border-amber-400 transition-colors"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <div className="font-bold text-slate-900 text-sm">
                  {t.name}
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-500 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{t.city}</span>
                </div>
                <div className="text-[11px] font-semibold text-amber-700 mt-1">
                  Plot: {t.plot}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quantified Trust Strip */}
        <div className="mt-16 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-extrabold font-heading text-slate-900 font-mono">5,200+</div>
            <div className="text-xs text-slate-500 mt-1">Floor Plans Delivered</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold font-heading text-slate-900 font-mono">24 Hrs</div>
            <div className="text-xs text-slate-500 mt-1">Average Turnaround</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold font-heading text-slate-900 font-mono">4.9 / 5</div>
            <div className="text-xs text-slate-500 mt-1">Homeowner Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold font-heading text-slate-900 font-mono">100%</div>
            <div className="text-xs text-slate-500 mt-1">Vastu Compliant Design</div>
          </div>
        </div>

      </div>
    </section>
  );
};
