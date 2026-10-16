import React from 'react';
import { PRICING_PACKAGES } from '../data/plansData';
import { Check, ArrowRight, ShieldCheck, Clock, Zap } from 'lucide-react';

interface PricingPackagesProps {
  onSelectPackage: (packageName: string) => void;
}

export const PricingPackages: React.FC<PricingPackagesProps> = ({ onSelectPackage }) => {
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
            Transparent Pricing · No Hidden Fees
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            House Floor Plans Starting at Only ₹499/-
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Choose the package that fits your stage of construction. Upgrade anytime with full credit.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                pkg.popular
                  ? 'bg-slate-900 text-white shadow-2xl ring-2 ring-amber-400 lg:-translate-y-2'
                  : 'bg-slate-50 text-slate-900 border border-slate-200 shadow-sm hover:shadow-lg'
              }`}
            >
              {/* Popular Flag */}
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 text-xs font-black uppercase px-4 py-1 rounded-full shadow-md flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 fill-current" />
                  <span>Most Popular · Featured on Poster</span>
                </div>
              )}

              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/40">
                  <h3 className="text-xl font-bold tracking-tight">
                    {pkg.name}
                  </h3>
                  <div className="flex items-center gap-1 text-xs opacity-80">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{pkg.deliveryTime}</span>
                  </div>
                </div>

                <p className={`mt-3 text-xs sm:text-sm leading-relaxed ${pkg.popular ? 'text-slate-300' : 'text-slate-600'}`}>
                  {pkg.tagline}
                </p>

                {/* Price Display */}
                <div className="my-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight font-mono">
                      ₹{pkg.price.toLocaleString()}
                    </span>
                    <span className={`text-sm ${pkg.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                      /-
                    </span>
                    <span className="text-xs line-through text-slate-400 ml-2 font-mono">
                      ₹{pkg.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-[11px] font-semibold text-emerald-500 mt-1">
                    Save ₹{(pkg.originalPrice - pkg.price).toLocaleString()} today
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 pt-2">
                  <div className={`text-xs font-bold uppercase tracking-wider ${pkg.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                    What&apos;s Included:
                  </div>
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.popular ? 'text-amber-400' : 'text-emerald-600'}`} />
                      <span className={pkg.popular ? 'text-slate-200' : 'text-slate-700'}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-slate-200/40">
                <button
                  onClick={() => onSelectPackage(pkg.name)}
                  className={`w-full py-3.5 px-4 font-heading font-black text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer ${
                    pkg.popular
                      ? 'bg-amber-400 hover:bg-amber-300 text-slate-950'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  <span>{pkg.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* 100% Satisfaction Guarantee Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-amber-600 shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-slate-900">100% Satisfaction & Revision Promise</h4>
              <p className="text-xs text-slate-600">
                We make modifications to your layout until you and your family are completely confident in the design before site execution.
              </p>
            </div>
          </div>
          <div className="text-xs font-bold text-amber-900 whitespace-nowrap">
            Support on WhatsApp: 7 Days a Week
          </div>
        </div>

      </div>
    </section>
  );
};
