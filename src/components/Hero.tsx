import React from 'react';
import { CheckCircle2, ArrowRight, Compass, Edit3, Send, ShieldCheck, FileText, Sparkles } from 'lucide-react';
import { HERO_IMAGES } from '../data/plansData';

interface HeroProps {
  onOpenRequirementModal: () => void;
  onOpenSampleModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenRequirementModal,
  onOpenSampleModal,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-8 pb-16 lg:pb-24">
      {/* Subtle blueprint grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tagline Strip matching the poster */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800/80 mb-8 text-xs sm:text-sm">
          <div className="flex items-center gap-3 text-slate-300 font-semibold tracking-wider uppercase text-[11px] sm:text-xs">
            <span className="text-amber-400">Floor Plans</span>
            <span className="text-slate-600">|</span>
            <span className="text-sky-400">3D Elevation</span>
            <span className="text-slate-600">|</span>
            <span className="text-emerald-400">Custom Design</span>
          </div>
          <div className="font-heading italic text-amber-300 text-sm sm:text-base font-medium flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-400" />
            &ldquo;Your Dream Home Starts with a Plan&rdquo;
          </div>
        </div>

        {/* Main 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headlines & Value Propositions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* House Floor Plan ₹499 Price Callout Hero Badge */}
            <div className="inline-block">
              <div className="bg-amber-400 text-slate-950 px-4 py-1.5 rounded-md font-heading font-black tracking-tight text-xl sm:text-2xl uppercase shadow-md transform -rotate-1 inline-block">
                House Floor Plan
              </div>
              <div className="mt-2.5 flex items-baseline gap-3">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400">
                  ONLY
                </span>
                <div className="relative inline-block bg-sky-950/80 border border-sky-400/40 rounded-xl px-5 py-2 backdrop-blur-sm shadow-xl">
                  <span className="text-4xl sm:text-6xl font-heading font-extrabold text-amber-400 tracking-tight">
                    ₹499<span className="text-2xl sm:text-3xl font-semibold text-slate-200">/-</span>
                  </span>
                  <span className="ml-3 text-xs sm:text-sm line-through text-slate-400 font-normal">
                    ₹1,499
                  </span>
                </div>
              </div>
            </div>

            {/* Sub-headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-4xl font-extrabold text-white leading-tight text-balance">
              Get your complete house floor plan <span className="text-amber-400 underline decoration-amber-400/50 underline-offset-4">online</span>, in just a few clicks!
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
              Professional civil & architectural CAD drawings customized to your plot dimensions and family requirements. Delivered directly to your WhatsApp in 24 hours.
            </p>

            {/* 4 Checkmark bullet points matching the poster */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200 font-medium">2D Floor Plan (As per your requirements)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200 font-medium">Use it for approval, construction or renovation</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200 font-medium">High quality, professional CAD drawing</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200 font-medium">Quick & easy 100% online process</span>
              </div>
            </div>

            {/* 4 Highlight Pillar Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-center">
                <div className="w-9 h-9 mx-auto mb-2 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold text-white">Custom Design</div>
                <div className="text-[11px] text-slate-400">Any Plot Size</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-center">
                <div className="w-9 h-9 mx-auto mb-2 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <Edit3 className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold text-white">Modify as You Want</div>
                <div className="text-[11px] text-slate-400">Revisions Included</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-center">
                <div className="w-9 h-9 mx-auto mb-2 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                  <Send className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold text-white">Online Delivery</div>
                <div className="text-[11px] text-slate-400">Within 24 Hours</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-center">
                <div className="w-9 h-9 mx-auto mb-2 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold text-white">100% Satisfaction</div>
                <div className="text-[11px] text-slate-400">Vastu Compliant</div>
              </div>
            </div>

            {/* CTAs: WhatsApp Primary + Sample Drawing Secondary */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={onOpenRequirementModal}
                className="group relative flex items-center justify-center gap-3 px-6 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-heading font-black text-base sm:text-lg rounded-xl shadow-lg hover:shadow-amber-400/25 active:scale-[0.98] transition-all cursor-pointer"
              >
                {/* WhatsApp icon glyph */}
                <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.976.533 1.942.825 3.149.825 3.182 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.767-5.767-5.767zm7.621 5.766c-.001 4.209-3.424 7.632-7.621 7.632-1.282 0-2.483-.319-3.534-.881l-4.507 1.182 1.206-4.398c-.658-1.109-1.034-2.399-1.033-3.766.001-4.209 3.424-7.632 7.621-7.632 4.21 0 7.622 3.423 7.622 7.632z"/>
                  </svg>
                </div>
                <span>Send Your Requirement on WhatsApp</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-slate-950" />
              </button>

              <button
                onClick={onOpenSampleModal}
                className="flex items-center justify-center gap-2.5 px-5 py-3.5 bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 border border-slate-700 rounded-xl font-semibold text-sm transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>I will send you a sample drawing</span>
              </button>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="flex items-center gap-2 text-xs text-slate-300 pt-1">
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.976.533 1.942.825 3.149.825 3.182 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.767-5.767-5.767zm7.621 5.766c-.001 4.209-3.424 7.632-7.621 7.632-1.282 0-2.483-.319-3.534-.881l-4.507 1.182 1.206-4.398c-.658-1.109-1.034-2.399-1.033-3.766.001-4.209 3.424-7.632 7.621-7.632 4.21 0 7.622 3.423 7.622 7.632z"/>
                </svg>
                Customer Support:
              </span>
              <a
                href="https://wa.me/917706966000?text=Hi%20mymap.co.in%20Support!%20I%20have%20a%20query%20regarding%20house%20floor%20plans."
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 font-extrabold hover:underline"
              >
                Chat for Any Query
              </a>
              <span className="text-slate-500">·</span>
              <span className="text-slate-400">Instant Sample & Replies</span>
            </div>
          </div>

          {/* Right Column: Visual Collage from the Poster */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Top Luxury Villa Render Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 bg-slate-900 group">
                <img
                  src={HERO_IMAGES.modernVilla}
                  alt="Modern two-story bungalow architectural elevation"
                  className="w-full h-56 sm:h-64 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = HERO_IMAGES.fallbackVilla;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
                  <span className="font-semibold text-white bg-slate-950/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-700/60">
                    Modern Luxury Elevation
                  </span>
                  <span className="text-amber-400 font-bold">2D + 3D Ready</span>
                </div>
              </div>

              {/* Isometric 3D Cutaway Overlap Layer */}
              <div className="relative -mt-16 sm:-mt-20 ml-6 sm:ml-10 rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-400/80 bg-slate-900 group">
                <img
                  src={HERO_IMAGES.isometric3D}
                  alt="Isometric 3D furnished house floor plan cutaway"
                  className="w-full h-60 sm:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = HERO_IMAGES.fallbackIsometric;
                  }}
                />
                <div className="absolute top-3 left-3 bg-amber-400 text-slate-950 text-xs font-black uppercase px-2.5 py-1 rounded-md shadow-md">
                  3D Cutaway View
                </div>
              </div>

              {/* Realistic Interactive Smartphone Mockup with WhatsApp conversation */}
              <div className="absolute -bottom-10 -right-2 sm:-right-6 w-56 sm:w-64 rounded-3xl bg-slate-950 p-2.5 shadow-2xl border-4 border-slate-800 backdrop-blur-md z-20">
                {/* Phone Speaker & Notch */}
                <div className="w-16 h-1.5 bg-slate-800 rounded-full mx-auto mb-2" />
                
                {/* WhatsApp Chat UI */}
                <div className="rounded-2xl bg-slate-900 overflow-hidden text-[11px] border border-slate-800">
                  {/* WhatsApp Green Top Header */}
                  <div className="bg-[#075e54] text-white px-3 py-2 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 rounded-full bg-emerald-700 flex items-center justify-center font-bold text-[10px]">
                        MM
                      </div>
                      <div>
                        <div className="font-bold text-[11px] leading-tight">MyMap Architect</div>
                        <div className="text-[9px] text-emerald-200">Customer Support • Online</div>
                      </div>
                    </div>
                  </div>

                  {/* Chat bubble messages */}
                  <div className="p-2.5 space-y-2 bg-[#0b141a]/95 min-h-[140px]">
                    {/* User message */}
                    <div className="bg-[#005c4b] text-white p-2 rounded-xl rounded-tr-none ml-6 shadow-xs">
                      <p className="leading-tight text-[11px]">
                        Hi! I need a 3 BHK floor plan for my 30x40 ft East facing plot.
                      </p>
                      <span className="text-[8px] text-emerald-200 block text-right mt-0.5">10:24 AM ✓✓</span>
                    </div>

                    {/* Architect message with thumbnail drawing */}
                    <div className="bg-[#202c33] text-slate-100 p-2 rounded-xl rounded-tl-none mr-4 shadow-xs">
                      <p className="font-medium text-amber-300 text-[10px] mb-1">
                        I will send you a sample drawing!
                      </p>
                      <div className="rounded-md overflow-hidden border border-slate-700 bg-white mb-1">
                        <img
                          src={HERO_IMAGES.blueprint2D}
                          alt="CAD plan preview"
                          className="w-full h-16 object-cover"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            e.currentTarget.src = HERO_IMAGES.fallbackBlueprint;
                          }}
                        />
                      </div>
                      <span className="text-[8px] text-slate-400 block text-right">10:25 AM</span>
                    </div>
                  </div>

                  {/* Bottom reply action */}
                  <div className="p-1.5 bg-[#202c33] border-t border-slate-800">
                    <button
                      onClick={onOpenRequirementModal}
                      className="w-full py-1.5 px-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold text-[10px] flex items-center justify-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>Send on WhatsApp</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Banner from the poster: "Simple | Smart | Affordable" */}
        <div className="mt-20 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-200">mymap.co.in</span>
            <span>·</span>
            <span>Architectural CAD & 3D Drafting Studio</span>
          </div>
          <div className="flex items-center gap-4 font-semibold text-slate-300">
            <span>Simple</span>
            <span className="text-amber-400">|</span>
            <span>Smart</span>
            <span className="text-amber-400">|</span>
            <span>Affordable</span>
          </div>
        </div>

      </div>
    </section>
  );
};
