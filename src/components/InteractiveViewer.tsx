import React, { useState } from 'react';
import { Layers, Eye, Compass, Maximize2, Check, ArrowRight, Sparkles } from 'lucide-react';
import { SAMPLE_PLANS } from '../data/plansData';

interface InteractiveViewerProps {
  onSelectPlanForRequirement: (planTitle: string) => void;
}

export const InteractiveViewer: React.FC<InteractiveViewerProps> = ({
  onSelectPlanForRequirement,
}) => {
  const currentPlan = SAMPLE_PLANS[0]; // 30x40 3 BHK Duplex
  const [activeTab, setActiveTab] = useState<'3d' | '2d' | 'elevation'>('3d');
  const [selectedRoomIndex, setSelectedRoomIndex] = useState<number>(0);
  const [showVastuInfo, setShowVastuInfo] = useState<boolean>(true);

  const selectedRoom = currentPlan.rooms[selectedRoomIndex];

  return (
    <section id="viewer" className="py-16 lg:py-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
            Interactive Architectural Inspection
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Explore 2D Technical Blueprints & 3D Cutaways
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            See exactly how your custom floor plan is delivered. Switch perspectives to inspect millimeter CAD dimensions, furnished room layouts, and Vastu directional orientations.
          </p>
        </div>

        {/* View Switcher Tabs (Segmented control) */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200 shadow-inner">
            <button
              onClick={() => setActiveTab('3d')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === '3d'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Eye className="w-4 h-4 text-amber-400" />
              <span>3D Isometric Cutaway</span>
            </button>

            <button
              onClick={() => setActiveTab('2d')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === '2d'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-4 h-4 text-sky-400" />
              <span>2D Technical CAD Blueprint</span>
            </button>

            <button
              onClick={() => setActiveTab('elevation')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'elevation'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Maximize2 className="w-4 h-4 text-emerald-400" />
              <span>3D Front Elevation</span>
            </button>
          </div>
        </div>

        {/* Main Display Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left/Center Visual Canvas */}
          <div className="lg:col-span-8 bg-slate-950 rounded-2xl p-2 sm:p-4 border border-slate-800 shadow-xl overflow-hidden relative">
            <div className="relative rounded-xl overflow-hidden bg-slate-900 aspect-4/3 sm:aspect-16/10 flex items-center justify-center">
              
              {/* Active Image */}
              {activeTab === '3d' && (
                <img
                  src={currentPlan.image3D}
                  alt="3D Isometric Cutaway Plan"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = '/images/floorplan_3d.jpg';
                  }}
                />
              )}

              {activeTab === '2d' && (
                <img
                  src={currentPlan.image2D}
                  alt="2D Technical CAD Floor Plan Blueprint"
                  className="w-full h-full object-contain bg-white"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = '/images/floorplan_2d.jpg';
                  }}
                />
              )}

              {activeTab === 'elevation' && (
                <img
                  src={currentPlan.imageElevation}
                  alt="3D Modern House Elevation"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = '/images/duplex_elevation.jpg';
                  }}
                />
              )}

              {/* Badges on the canvas */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="bg-slate-900/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-md border border-slate-700">
                  {currentPlan.plotSize} ({currentPlan.totalArea})
                </span>
                <span className="bg-amber-400 text-slate-950 text-xs font-black px-2.5 py-1 rounded-md">
                  {currentPlan.facing} Facing
                </span>
              </div>

              {/* Vastu Compass indicator */}
              <div className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-md border border-slate-700/80 rounded-xl p-2.5 flex items-center gap-3 text-xs text-white">
                <Compass className="w-5 h-5 text-amber-400 animate-spin-slow" />
                <div>
                  <div className="font-bold text-[11px] text-amber-300">Vastu Verified</div>
                  <div className="text-[10px] text-slate-300">Main Entry: East / Ishanya</div>
                </div>
              </div>
            </div>

            {/* Quick Room Selector Chips */}
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-2 overflow-x-auto pb-1">
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider shrink-0 mr-1">
                Inspect Room:
              </span>
              {currentPlan.rooms.map((room, idx) => (
                <button
                  key={room.name}
                  onClick={() => setSelectedRoomIndex(idx)}
                  className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    selectedRoomIndex === idx
                      ? 'bg-amber-400 text-slate-950 font-bold shadow-xs'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {room.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Active Room Technical Breakdown & Action */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Room Detail Card */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                  Room Specification
                </span>
                <span className="text-xs font-mono font-bold text-slate-700 bg-slate-200/70 px-2 py-0.5 rounded">
                  {selectedRoom.dimensions}
                </span>
              </div>

              <h3 className="mt-3 text-xl font-extrabold text-slate-900">
                {selectedRoom.name}
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedRoom.details}
              </p>

              {/* Vastu Shastra Alignment */}
              <div className="mt-4 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-800">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Vastu Shastra Position</span>
                </div>
                <p className="mt-1 text-xs text-amber-950 font-medium">
                  {selectedRoom.vastuDirection}
                </p>
              </div>

              {/* Key Features included in Drawing */}
              <div className="mt-4 space-y-2">
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Included in ₹499 Package:
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Exact internal wall & plaster dimensions</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Door swing, window placement & cross-ventilation</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Optimal furniture & appliance ergonomic layout</span>
                </div>
              </div>
            </div>

            {/* Quick Action Box */}
            <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-md">
              <div className="text-xs font-semibold text-slate-400">
                Need a layout like this for your plot?
              </div>
              <div className="mt-1 text-base font-extrabold text-white">
                Get Your Customized Plan at ₹499/-
              </div>
              <p className="mt-1 text-xs text-slate-300">
                Provide your plot size (e.g. 30x40, 20x50, 40x60) and get instant draft blueprints.
              </p>

              <button
                onClick={() => onSelectPlanForRequirement(currentPlan.title)}
                className="mt-4 w-full py-3 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-heading font-black text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <span>Customize for My Plot</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
