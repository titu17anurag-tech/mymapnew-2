import React, { useState } from 'react';
import { X, Check, Compass, Layers, Eye, ArrowRight, ShieldCheck, Download } from 'lucide-react';
import { FloorPlanItem } from '../types';

interface PlanDetailModalProps {
  plan: FloorPlanItem | null;
  onClose: () => void;
  onOrderPlan: (planTitle: string) => void;
}

export const PlanDetailModal: React.FC<PlanDetailModalProps> = ({
  plan,
  onClose,
  onOrderPlan,
}) => {
  const [activeView, setActiveView] = useState<'3d' | '2d' | 'elevation'>('3d');

  if (!plan) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6">
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-amber-400 text-slate-950 text-xs font-black px-2 py-0.5 rounded uppercase">
                {plan.plotSize}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {plan.totalArea}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
              {plan.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-6 space-y-6 max-h-[78vh] overflow-y-auto">
          
          {/* Perspective View Switcher */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveView('3d')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-colors cursor-pointer ${
                activeView === '3d'
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
              }`}
            >
              3D Furnished Isometric
            </button>
            <button
              onClick={() => setActiveView('2d')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-colors cursor-pointer ${
                activeView === '2d'
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
              }`}
            >
              2D Working CAD Blueprint
            </button>
            {plan.imageElevation && (
              <button
                onClick={() => setActiveView('elevation')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-colors cursor-pointer ${
                  activeView === 'elevation'
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                }`}
              >
                Front Exterior Elevation
              </button>
            )}
          </div>

          {/* Visual Showcase Frame */}
          <div className="rounded-xl overflow-hidden bg-slate-900 aspect-16/9 relative border border-slate-300">
            {activeView === '3d' && (
              <img
                src={plan.image3D}
                alt={plan.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = '/images/floorplan_3d.jpg';
                }}
              />
            )}
            {activeView === '2d' && (
              <img
                src={plan.image2D}
                alt={plan.title}
                className="w-full h-full object-contain bg-white"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = '/images/floorplan_2d.jpg';
                }}
              />
            )}
            {activeView === 'elevation' && plan.imageElevation && (
              <img
                src={plan.imageElevation}
                alt={plan.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = '/images/duplex_elevation.jpg';
                }}
              />
            )}
          </div>

          {/* Detailed Room Dimensions Table */}
          <div>
            <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Compass className="w-4 h-4 text-amber-500" />
              <span>Room Schedule & Vastu Direction Alignment</span>
            </h4>

            <div className="border border-slate-200 rounded-xl overflow-hidden text-xs">
              <table className="w-full divide-y divide-slate-200">
                <thead className="bg-slate-100 text-slate-700 font-bold">
                  <tr>
                    <th className="px-3 py-2 text-left">Room / Zone</th>
                    <th className="px-3 py-2 text-left font-mono">Dimensions</th>
                    <th className="px-3 py-2 text-left">Vastu Direction</th>
                    <th className="px-3 py-2 text-left hidden sm:table-cell">Key Specifications</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {plan.rooms.map((room) => (
                    <tr key={room.name} className="hover:bg-slate-50">
                      <td className="px-3 py-2 font-semibold text-slate-900">{room.name}</td>
                      <td className="px-3 py-2 font-mono font-medium text-slate-700">{room.dimensions}</td>
                      <td className="px-3 py-2 text-amber-700 font-medium">{room.vastuDirection}</td>
                      <td className="px-3 py-2 text-slate-500 hidden sm:table-cell">{room.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Guarantee */}
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>
              All CAD drawings are prepared according to standard Indian civil engineering codes with custom revisions included.
            </span>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-600">
            Price for custom drawing: <span className="font-extrabold text-base text-slate-900">₹499/-</span>
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
                onOrderPlan(plan.title);
              }}
              className="w-1/2 sm:w-auto px-6 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-heading font-black text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Customize This Layout for ₹499</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
