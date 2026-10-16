import React, { useState } from 'react';
import { 
  Building, 
  ArrowRight, 
  CheckCircle2, 
  TrendingDown, 
  FileSpreadsheet, 
  Calendar, 
  Copy, 
  Check, 
  Sparkles
} from 'lucide-react';

interface CostCalculatorProps {
  onOpenRequirementModal: () => void;
}

type TabType = 'overview' | 'boq' | 'milestones';

export const CostCalculator: React.FC<CostCalculatorProps> = ({ onOpenRequirementModal }) => {
  const [plotWidth, setPlotWidth] = useState<number>(30);
  const [plotLength, setPlotLength] = useState<number>(40);
  const [floors, setFloors] = useState<number>(2); // 1 = Ground, 2 = G+1 Duplex, 3 = G+2
  const [finishQuality, setFinishQuality] = useState<'economy' | 'standard' | 'luxury'>('standard');
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [boqCategory, setBoqCategory] = useState<'all' | 'structural' | 'finishing' | 'labor'>('all');
  const [copied, setCopied] = useState<boolean>(false);

  const plotArea = plotWidth * plotLength;
  // Standard FAR / built-up calculation (approx 75% ground coverage)
  const groundBuiltUp = Math.round(plotArea * 0.75);
  const totalBuiltUp = groundBuiltUp * floors;

  // Construction cost per sq.ft in India
  const rates = {
    economy: 1650, // ₹/sq.ft
    standard: 2100, // ₹/sq.ft
    luxury: 2850, // ₹/sq.ft
  };

  const estimatedConstructionCost = totalBuiltUp * rates[finishQuality];
  const traditionalArchitectFee = Math.round(estimatedConstructionCost * 0.035); // 3.5% offline fee
  const myMapFee = floors === 1 ? 499 : 3449;
  const savings = traditionalArchitectFee - myMapFee;

  // Itemized BOQ (Bill of Quantities) based on Indian Civil Engineering Standards
  const boqItems = [
    // Structural / Core Material
    {
      category: 'structural',
      name: 'Cement (OPC / PPC 53 Grade)',
      brand: 'UltraTech / Ambuja / ACC',
      quantity: Math.round(totalBuiltUp * 0.42),
      unit: 'Bags (50 kg)',
      unitRate: finishQuality === 'economy' ? 385 : finishQuality === 'standard' ? 415 : 445,
      description: 'Foundation footings, columns, beams, slab casting & masonry mortar.',
    },
    {
      category: 'structural',
      name: 'TMT Reinforcement Steel (Fe 550D)',
      brand: 'Tata Tiscon / Jindal Panther / JSW',
      quantity: Math.round(totalBuiltUp * 3.85),
      unit: 'Kg',
      unitRate: finishQuality === 'economy' ? 66 : finishQuality === 'standard' ? 72 : 78,
      description: 'Earthquake-resistant column cages, lintels & roof slab mesh.',
    },
    {
      category: 'structural',
      name: 'Red Clay Bricks / AAC Blocks',
      brand: 'Standard Class-1 Red Bricks',
      quantity: Math.round(totalBuiltUp * 19.5),
      unit: 'Nos / Pieces',
      unitRate: finishQuality === 'economy' ? 9.5 : finishQuality === 'standard' ? 11 : 13,
      description: '9" exterior load-bearing walls & 4.5" interior privacy partitions.',
    },
    {
      category: 'structural',
      name: 'Coarse Aggregates (20mm & 10mm)',
      brand: 'Machine-Crushed Blue Metal Granite',
      quantity: Math.round(totalBuiltUp * 1.35),
      unit: 'Cu.ft',
      unitRate: finishQuality === 'economy' ? 46 : finishQuality === 'standard' ? 52 : 58,
      description: 'High-compressive RCC structural concrete grade M20/M25.',
    },
    {
      category: 'structural',
      name: 'M-Sand & Plaster Sand (P-Sand)',
      brand: 'Triple Washed Manufactured Sand',
      quantity: Math.round(totalBuiltUp * 1.8),
      unit: 'Cu.ft',
      unitRate: finishQuality === 'economy' ? 50 : finishQuality === 'standard' ? 56 : 64,
      description: 'Concrete core mix & two-coat smooth internal/external plaster.',
    },

    // Finishing & Interior Elements
    {
      category: 'finishing',
      name: 'Flooring Vitrified Tiles & Granite',
      brand: 'Kajaria / Somany / Simpolo',
      quantity: Math.round(totalBuiltUp * 1.25),
      unit: 'Sq.ft',
      unitRate: finishQuality === 'economy' ? 65 : finishQuality === 'standard' ? 105 : 185,
      description: 'Double charged vitrified living floor + granite kitchen counter & stairs.',
    },
    {
      category: 'finishing',
      name: 'Doors, Windows & UPVC Glazing',
      brand: 'Teak Wood Main Door + Fenesta UPVC',
      quantity: Math.round(totalBuiltUp * 0.18),
      unit: 'Units / Openings',
      unitRate: finishQuality === 'economy' ? 7500 : finishQuality === 'standard' ? 11500 : 18500,
      description: 'Main carved entry door, flush interior doors with mortise locks, 3-track sliding windows.',
    },
    {
      category: 'finishing',
      name: 'Interior & Exterior Painting',
      brand: 'Asian Paints Apex / Royale / Birla Putty',
      quantity: Math.round(totalBuiltUp * 4.2),
      unit: 'Sq.ft Surface Area',
      unitRate: finishQuality === 'economy' ? 22 : finishQuality === 'standard' ? 32 : 48,
      description: '2 coats acrylic putty + 1 coat primer + 2 coats premium washable emulsion.',
    },
    {
      category: 'finishing',
      name: 'Electrical Conduiting, Wiring & Switches',
      brand: 'Polycab FR Wires / Legrand Modular',
      quantity: totalBuiltUp,
      unit: 'Sq.ft Allowance',
      unitRate: finishQuality === 'economy' ? 85 : finishQuality === 'standard' ? 130 : 210,
      description: 'Concealed copper conduits, MCB distribution board, modular plates & inverter wiring.',
    },
    {
      category: 'finishing',
      name: 'Plumbing Lines & Sanitaryware',
      brand: 'Astral CPVC Pipes / Jaquar Fittings',
      quantity: totalBuiltUp,
      unit: 'Sq.ft Allowance',
      unitRate: finishQuality === 'economy' ? 95 : finishQuality === 'standard' ? 145 : 240,
      description: 'Concealed hot/cold CPVC lines, drainage pipes, wall-hung WC, faucets & shower diverters.',
    },

    // Labor & Execution
    {
      category: 'labor',
      name: 'Civil Labor & Masonry Contractor',
      brand: 'Supervised Skilled Site Teams',
      quantity: totalBuiltUp,
      unit: 'Sq.ft Built-Up',
      unitRate: finishQuality === 'economy' ? 275 : finishQuality === 'standard' ? 330 : 420,
      description: 'Site excavation, shuttering formwork, bar-bending, RCC pouring, brickwork & plastering.',
    },
    {
      category: 'labor',
      name: 'Flooring, Plumbing & Electrical Labor',
      brand: 'Specialized Tradesmen',
      quantity: totalBuiltUp,
      unit: 'Sq.ft Built-Up',
      unitRate: finishQuality === 'economy' ? 70 : finishQuality === 'standard' ? 95 : 135,
      description: 'Tile cutting & fixing, sanitary pipe fitting, switchboard termination & painter labor.',
    },
  ];

  const filteredBoqItems = boqItems.filter((item) => {
    if (boqCategory === 'all') return true;
    return item.category === boqCategory;
  });

  const totalBoqCost = boqItems.reduce((acc, item) => acc + item.quantity * item.unitRate, 0);

  // Construction Stages & Milestone Cashflow
  const stages = [
    {
      stage: '01',
      title: 'Excavation & Foundation Footing',
      share: '15%',
      cost: Math.round(estimatedConstructionCost * 0.15),
      tasks: 'Soil digging, PCC bed, steel footing cages, column starter stub casting & anti-termite treatment.',
      timeline: 'Weeks 1 - 3',
    },
    {
      stage: '02',
      title: 'Plinth Beam, DPC & Ground Columns',
      share: '20%',
      cost: Math.round(estimatedConstructionCost * 0.20),
      tasks: 'Plinth beam casting, backfilling soil compaction, damp-proof course (DPC) & vertical column risers.',
      timeline: 'Weeks 4 - 7',
    },
    {
      stage: '03',
      title: 'RCC Roof Slabs & Staircase',
      share: '25%',
      cost: Math.round(estimatedConstructionCost * 0.25),
      tasks: 'Centering shuttering, slab reinforcement steel laying, electrical pipe drops & ready-mix concrete pouring.',
      timeline: 'Weeks 8 - 12',
    },
    {
      stage: '04',
      title: 'Brick Masonry & Two-Coat Plastering',
      share: '20%',
      cost: Math.round(estimatedConstructionCost * 0.20),
      tasks: 'Outer 9" perimeter walls, inner partition walls, door frames fixing, electrical grooving & internal/external plaster.',
      timeline: 'Weeks 13 - 18',
    },
    {
      stage: '05',
      title: 'Flooring, Painting & Handover',
      share: '20%',
      cost: Math.round(estimatedConstructionCost * 0.20),
      tasks: 'Vitrified tile fixing, waterproofing bathrooms, primer & paint coats, sanitary fixtures & electrical testing.',
      timeline: 'Weeks 19 - 24',
    },
  ];

  const handleCopyBoqSummary = () => {
    const summaryText = `🏠 mymap.co.in - Construction Cost & BOQ Estimate
📐 Plot Size: ${plotWidth} x ${plotLength} ft (${plotArea} sq.ft)
🏢 Storeys: ${floors === 1 ? 'Ground Floor Only' : floors === 2 ? 'G+1 (Duplex)' : 'G+2'}
📏 Total Built-Up Area: ${totalBuiltUp.toLocaleString()} sq.ft
💎 Finishing Grade: ${finishQuality.toUpperCase()}
💰 Estimated Construction Cost: ₹${(estimatedConstructionCost / 100000).toFixed(2)} Lakhs

📦 Key BOQ Quantities:
- Cement: ~${Math.round(totalBuiltUp * 0.42)} Bags (50kg)
- TMT Steel (Fe 550D): ~${Math.round(totalBuiltUp * 3.85).toLocaleString()} Kg (${(totalBuiltUp * 3.85 / 1000).toFixed(2)} Tons)
- Bricks: ~${Math.round(totalBuiltUp * 19.5).toLocaleString()} Pieces
- Aggregates (20mm): ~${Math.round(totalBuiltUp * 1.35).toLocaleString()} Cu.ft
- M-Sand: ~${Math.round(totalBuiltUp * 1.8).toLocaleString()} Cu.ft
- Vitrified Flooring: ~${Math.round(totalBuiltUp * 1.25).toLocaleString()} Sq.ft

Floor plan design fee with MyMap starts at only ₹499/-!`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="calculator" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2 flex items-center justify-center gap-1.5">
            <FileSpreadsheet className="w-4 h-4 text-amber-500" />
            <span>Interactive Civil Engineering Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Construction Cost & BOQ (Bill of Quantities) Estimator
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Estimate your exact cement bags, TMT steel tonnes, brick counts, labor costs, and stage-wise construction cashflow for any plot dimensions.
          </p>
        </div>

        {/* View Switcher Tabs (Segmented Control) */}
        <div className="flex items-center justify-center mb-10">
          <div className="inline-flex p-1 bg-slate-200/80 rounded-xl border border-slate-300 shadow-inner">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              <Building className="w-4 h-4 text-amber-400" />
              <span>Plot & Cost Overview</span>
            </button>

            <button
              onClick={() => setActiveTab('boq')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'boq'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              <FileSpreadsheet className="w-4 h-4 text-sky-400" />
              <span>Detailed Material BOQ</span>
            </button>

            <button
              onClick={() => setActiveTab('milestones')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'milestones'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              <Calendar className="w-4 h-4 text-emerald-400" />
              <span>Stage-Wise Schedule</span>
            </button>
          </div>
        </div>

        {/* Interactive Controls Strip */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Dimension Sliders */}
            <div className="md:col-span-5 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                <span>Plot Dimensions: {plotWidth}&apos; Width x {plotLength}&apos; Depth</span>
                <span className="font-mono text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  {plotArea} sq.ft ({Math.round(plotArea / 9)} Gaj)
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="text-[11px] text-slate-500 mb-1">Front Width ({plotWidth} ft)</div>
                  <input
                    type="range"
                    min="15"
                    max="60"
                    step="1"
                    value={plotWidth}
                    onChange={(e) => setPlotWidth(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 mb-1">Plot Depth ({plotLength} ft)</div>
                  <input
                    type="range"
                    min="20"
                    max="100"
                    step="5"
                    value={plotLength}
                    onChange={(e) => setPlotLength(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Storeys / Floors */}
            <div className="md:col-span-4 space-y-2">
              <span className="text-xs font-bold text-slate-700 block">Number of Floors</span>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { count: 1, label: 'Ground' },
                  { count: 2, label: 'G+1 Duplex' },
                  { count: 3, label: 'G+2 Triplex' },
                ].map((item) => (
                  <button
                    key={item.count}
                    onClick={() => setFloors(item.count)}
                    className={`py-2 px-2 rounded-lg text-xs font-bold transition-all border cursor-pointer ${
                      floors === item.count
                        ? 'bg-slate-900 text-amber-400 border-slate-900 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quality Grade */}
            <div className="md:col-span-3 space-y-2">
              <span className="text-xs font-bold text-slate-700 block">Finishing Quality</span>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { id: 'economy', label: 'Economy' },
                  { id: 'standard', label: 'Standard' },
                  { id: 'luxury', label: 'Premium' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setFinishQuality(item.id as any)}
                    className={`py-2 px-1.5 rounded-lg text-[11px] font-bold transition-all border cursor-pointer ${
                      finishQuality === item.id
                        ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Tab 1: Plot & Cost Overview */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Quick Metrics & Built-up Specs */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Standard Built-Up Architecture Metrics
                </span>
                <span className="text-xs font-mono font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                  75% Ground Coverage
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-xs text-slate-500 block">Ground Floor Footprint</span>
                  <span className="text-xl font-bold font-mono text-slate-900 mt-1 block">
                    {groundBuiltUp.toLocaleString()} <span className="text-xs font-normal text-slate-500">sq.ft</span>
                  </span>
                  <span className="text-[11px] text-slate-400 mt-0.5 block">After mandatory setbacks</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-xs text-slate-500 block">Total Built-Up Area</span>
                  <span className="text-xl font-bold font-mono text-slate-900 mt-1 block">
                    {totalBuiltUp.toLocaleString()} <span className="text-xs font-normal text-slate-500">sq.ft</span>
                  </span>
                  <span className="text-[11px] text-slate-400 mt-0.5 block">Across {floors} storeys</span>
                </div>
              </div>

              {/* Material Quick Highlights */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Key Material Quantities (Estimated):
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-amber-50/60 border border-amber-200/60 flex items-center justify-between">
                    <span className="text-slate-700 font-medium">Cement:</span>
                    <span className="font-mono font-bold text-amber-950">~{Math.round(totalBuiltUp * 0.42)} Bags</span>
                  </div>

                  <div className="p-3 rounded-lg bg-sky-50/60 border border-sky-200/60 flex items-center justify-between">
                    <span className="text-slate-700 font-medium">TMT Steel:</span>
                    <span className="font-mono font-bold text-sky-950">~{(totalBuiltUp * 3.85 / 1000).toFixed(2)} Tons</span>
                  </div>

                  <div className="p-3 rounded-lg bg-emerald-50/60 border border-emerald-200/60 flex items-center justify-between">
                    <span className="text-slate-700 font-medium">Bricks / Blocks:</span>
                    <span className="font-mono font-bold text-emerald-950">~{Math.round(totalBuiltUp * 19.5).toLocaleString()} pcs</span>
                  </div>

                  <div className="p-3 rounded-lg bg-indigo-50/60 border border-indigo-200/60 flex items-center justify-between">
                    <span className="text-slate-700 font-medium">Flooring Area:</span>
                    <span className="font-mono font-bold text-indigo-950">~{Math.round(totalBuiltUp * 1.25).toLocaleString()} sqft</span>
                  </div>
                </div>

                <div className="pt-2 flex justify-between items-center text-xs">
                  <button
                    onClick={() => setActiveTab('boq')}
                    className="text-amber-600 hover:text-amber-700 font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Full Itemized BOQ Sheet</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={handleCopyBoqSummary}
                    className="text-slate-600 hover:text-slate-900 font-medium flex items-center gap-1 cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy Estimate'}</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Right Column: Cost Card & Savings */}
            <div className="lg:col-span-6 space-y-5">
              
              <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl">
                
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <Building className="w-4 h-4" />
                    Estimated Financials
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    Rate: ₹{rates[finishQuality]}/sq.ft
                  </span>
                </div>

                {/* Main Cost Figure */}
                <div className="my-6">
                  <div className="text-xs text-slate-400 uppercase tracking-wide">
                    Estimated Construction Budget
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 mt-1 font-mono">
                    ₹{(estimatedConstructionCost / 100000).toFixed(2)} Lakhs
                  </div>
                  <div className="text-xs text-slate-300 mt-1">
                    Complete structure, masonry, plumbing, electrical, tiles & painting
                  </div>
                </div>

                {/* Price comparison card */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Traditional Offline Architect Fee (3.5%):</span>
                    <span className="line-through text-rose-400 font-mono">
                      ₹{traditionalArchitectFee.toLocaleString()}/-
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white">MyMap Online Floor Plan:</span>
                      <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-1.5 py-0.5 rounded">
                        FLAT RATE
                      </span>
                    </div>
                    <span className="text-2xl font-heading font-extrabold text-amber-400 font-mono">
                      ₹{myMapFee}/-
                    </span>
                  </div>

                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-emerald-400">
                    <span className="flex items-center gap-1">
                      <TrendingDown className="w-4 h-4" />
                      Direct Savings on Floor Plan:
                    </span>
                    <span className="font-mono">Save ₹{savings.toLocaleString()}/-</span>
                  </div>
                </div>

                {/* CTA button */}
                <button
                  onClick={onOpenRequirementModal}
                  className="mt-6 w-full py-3.5 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-heading font-black text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Get Floor Plan for ₹{myMapFee}/-</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>

              {/* Trust checkmarks */}
              <div className="grid grid-cols-2 gap-3 text-xs text-slate-600 px-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>NBC Bye-Law Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Delivered in 24 Hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Vastu Orientation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Free Revisions Included</span>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* Tab 2: Detailed Bill of Quantities (BOQ) */}
        {activeTab === 'boq' && (
          <div className="space-y-6">
            
            {/* BOQ Header & Category Filter */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Itemized Bill of Quantities (BOQ)
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Calculated for <span className="font-bold text-slate-800">{totalBuiltUp.toLocaleString()} sq.ft</span> built-up area in <span className="font-bold capitalize text-slate-800">{finishQuality}</span> grade.
                </p>
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {[
                  { id: 'all', label: 'All Items' },
                  { id: 'structural', label: 'Civil & Structural' },
                  { id: 'finishing', label: 'Finishing & Fixtures' },
                  { id: 'labor', label: 'Labor & Execution' },
                ].map((btn) => (
                  <button
                    key={btn.id}
                    onClick={() => setBoqCategory(btn.id as any)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                      boqCategory === btn.id
                        ? 'bg-slate-900 text-amber-400'
                        : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {btn.label}
                  </button>
                ))}

                <button
                  onClick={handleCopyBoqSummary}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold border border-slate-300 text-slate-700 hover:bg-slate-50 flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy BOQ'}</span>
                </button>
              </div>
            </div>

            {/* BOQ Table */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs divide-y divide-slate-200">
                  <thead className="bg-slate-100/90 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                    <tr>
                      <th className="py-3.5 px-4">Item & Specifications</th>
                      <th className="py-3.5 px-3">Industry Standard Brands</th>
                      <th className="py-3.5 px-3 text-right">Est. Quantity</th>
                      <th className="py-3.5 px-3 text-right">Unit Rate</th>
                      <th className="py-3.5 px-4 text-right">Total (₹)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredBoqItems.map((item, idx) => {
                      const totalItemCost = item.quantity * item.unitRate;
                      return (
                        <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-3.5 px-4">
                            <div className="font-bold text-slate-900">{item.name}</div>
                            <div className="text-[11px] text-slate-500 mt-0.5">{item.description}</div>
                          </td>
                          <td className="py-3.5 px-3 text-slate-600">
                            <span className="bg-slate-100 px-2 py-0.5 rounded text-[11px] font-medium text-slate-700">
                              {item.brand}
                            </span>
                          </td>
                          <td className="py-3.5 px-3 text-right font-mono font-bold text-slate-800 whitespace-nowrap">
                            {item.quantity.toLocaleString()} <span className="text-[10px] text-slate-500 font-normal">{item.unit}</span>
                          </td>
                          <td className="py-3.5 px-3 text-right font-mono text-slate-600 whitespace-nowrap">
                            ₹{item.unitRate.toLocaleString()}
                          </td>
                          <td className="py-3.5 px-4 text-right font-mono font-bold text-slate-900 whitespace-nowrap">
                            ₹{totalItemCost.toLocaleString()}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot className="bg-slate-900 text-white font-bold">
                    <tr>
                      <td colSpan={4} className="py-3.5 px-4 text-right uppercase tracking-wider text-xs">
                        Estimated Material & Labor Total:
                      </td>
                      <td className="py-3.5 px-4 text-right font-mono text-amber-400 text-sm whitespace-nowrap">
                        ₹{(totalBoqCost / 100000).toFixed(2)} Lakhs
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            {/* Bottom Note & CTA */}
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-amber-950 font-medium">
                💡 Need this exact BOQ customized with structural beam column load calculations? Get our Approval & Working CAD Pack!
              </span>
              <button
                onClick={onOpenRequirementModal}
                className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg whitespace-nowrap cursor-pointer transition-all"
              >
                Discuss BOQ with Architect
              </button>
            </div>

          </div>
        )}

        {/* Tab 3: Stage-Wise Construction Schedule */}
        {activeTab === 'milestones' && (
          <div className="space-y-6">
            
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Stage-Wise Construction & Cashflow Schedule
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Plan your payment milestones with contractors to avoid site halts and budget overruns.
                </p>
              </div>
              <div className="hidden sm:block text-right">
                <span className="text-xs text-slate-400 block">Total Budget:</span>
                <span className="text-base font-extrabold font-mono text-amber-600">
                  ₹{(estimatedConstructionCost / 100000).toFixed(2)} Lakhs
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {stages.map((stg) => (
                <div
                  key={stg.stage}
                  className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between hover:border-amber-400 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-8 h-8 rounded-lg bg-slate-900 text-amber-400 font-extrabold flex items-center justify-center text-xs">
                        {stg.stage}
                      </span>
                      <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                        {stg.share}
                      </span>
                    </div>

                    <h4 className="font-bold text-sm text-slate-900 leading-snug">
                      {stg.title}
                    </h4>

                    <div className="text-xs font-mono font-bold text-amber-700 my-2">
                      ₹{(stg.cost / 100000).toFixed(2)} Lakhs
                    </div>

                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      {stg.tasks}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] font-bold text-slate-400 uppercase">
                    Timeline: {stg.timeline}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Start with a Flawless Floor Plan First</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Avoid costly structural demolitions and changes on site. Get your precision 2D CAD floor plan for only ₹499/-.
                </p>
              </div>

              <button
                onClick={onOpenRequirementModal}
                className="px-6 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all whitespace-nowrap cursor-pointer shadow-md"
              >
                Order Plan for ₹499
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
