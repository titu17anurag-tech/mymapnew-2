import React from 'react';
import { MessageSquare, Compass, Edit3, CheckCircle, ArrowRight } from 'lucide-react';

interface WorkflowStepsProps {
  onOpenRequirementModal: () => void;
}

export const WorkflowSteps: React.FC<WorkflowStepsProps> = ({ onOpenRequirementModal }) => {
  const steps = [
    {
      num: '01',
      icon: MessageSquare,
      title: 'Send Requirement on WhatsApp',
      desc: 'Share your plot dimensions (e.g. 30x40 ft), plot facing direction, and family bedroom preferences.',
      badge: 'Takes 2 Minutes',
    },
    {
      num: '02',
      icon: Compass,
      title: 'Architect Prepares Draft Plan',
      desc: 'Our civil design engineers draft your customized 2D floor plan following Vastu Shastra and local setback rules.',
      badge: 'Within 24 Hours',
    },
    {
      num: '03',
      icon: Edit3,
      title: 'Modify as You Want',
      desc: 'Review the layout. Request any shifts in room sizes, doors, windows, or furniture positions until completely satisfied.',
      badge: 'Revisions Included',
    },
    {
      num: '04',
      icon: CheckCircle,
      title: 'Instant Online Delivery',
      desc: 'Receive high-definition, print-ready PDF files and technical drawing schedules ready for site engineers & bank approval.',
      badge: '100% Approval Ready',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            Simple · Smart · Affordable
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            How It Works in 4 Easy Steps
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            No endless office visits or high consultant retainers. Get high-precision architectural drawings from the comfort of your phone.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-400/50 transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black font-heading text-slate-600 group-hover:text-amber-400/40 transition-colors">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700/60">
                  <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wide">
                    {step.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenRequirementModal}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-heading font-black text-sm rounded-xl transition-all shadow-md cursor-pointer"
          >
            <span>Start Your Plan for ₹499/- Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
