import React, { useState } from 'react';
import { X, Download, ZoomIn, Check, FileCheck, ArrowRight } from 'lucide-react';
import { HERO_IMAGES } from '../data/plansData';

interface SampleDrawingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToOrder: () => void;
}

export const SampleDrawingModal: React.FC<SampleDrawingModalProps> = ({
  isOpen,
  onClose,
  onProceedToOrder,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6">
        
        {/* Modal Top Bar */}
        <div className="bg-slate-900 text-white p-4 sm:p-5 flex items-center justify-between border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-amber-400 text-slate-950 text-[10px] sm:text-xs font-black uppercase px-2 py-0.5 rounded">
                Official Sample
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Architectural 2D Working Blueprint Sample
              </h3>
            </div>
            <p className="text-xs text-slate-300 mt-0.5">
              Approved format for municipal permissions, bank construction loans & site engineers
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4 sm:p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Blueprint High-Res Preview Canvas */}
          <div className="relative rounded-xl border border-slate-300 bg-slate-100 overflow-hidden group">
            <div className={`overflow-auto max-h-[480px] flex items-center justify-center p-2 bg-[#f8fafc]`}>
              <img
                src={HERO_IMAGES.blueprint2D}
                alt="Detailed 2D Residential House Floor Plan Architectural Drawing"
                className={`transition-all duration-300 cursor-zoom-in ${
                  isZoomed ? 'scale-150 transform' : 'w-full h-auto max-h-[440px] object-contain'
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = '/images/floorplan_2d.jpg';
                }}
              />
            </div>

            <div className="absolute bottom-3 right-3 flex items-center gap-2 bg-slate-900/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs shadow-md">
              <button
                onClick={() => setIsZoomed(!isZoomed)}
                className="flex items-center gap-1 hover:text-amber-400 transition-colors cursor-pointer"
              >
                <ZoomIn className="w-3.5 h-3.5" />
                <span>{isZoomed ? 'Reset Zoom' : 'Click to Zoom'}</span>
              </button>
            </div>
          </div>

          {/* Drawing Specifications breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-1">
                <FileCheck className="w-4 h-4 text-emerald-600" />
                <span>Technical Precision</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clean CAD drawing with millimeter room dimensions, external wall thicknesses (9&quot; outer, 4.5&quot; partition), and column grid points.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-1">
                <FileCheck className="w-4 h-4 text-emerald-600" />
                <span>Door & Window Schedule</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Complete opening schedules with exact sill heights, lintel clearances, and ventilation cross-paths for natural air movement.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-1">
                <FileCheck className="w-4 h-4 text-emerald-600" />
                <span>Print-Ready Delivery</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Delivered in standard A4/A3 vector PDF and high-res image format directly via WhatsApp for easy on-site reference.
              </p>
            </div>
          </div>

          {/* Quick Checklist */}
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
            <h4 className="text-xs font-extrabold text-amber-900 uppercase tracking-wider mb-2">
              Everything in this drawing is personalized for your plot:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-amber-950 font-medium">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-amber-700" />
                <span>Customized to your exact plot dimensions</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-amber-700" />
                <span>100% Vastu Shastra compliant orientation</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-amber-700" />
                <span>Revisions until you are completely satisfied</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-amber-700" />
                <span>Delivered directly to your WhatsApp in 24 hours</span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            Want a drawing like this for your plot? Order for <span className="font-bold text-slate-900">only ₹499/-</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onProceedToOrder();
              }}
              className="w-1/2 sm:w-auto px-6 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-heading font-black text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get Your Plan for ₹499</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
