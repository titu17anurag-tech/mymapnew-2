import React, { useState } from 'react';
import { X, Send, Copy, Check, MessageSquare, Compass, ShieldCheck } from 'lucide-react';
import { UserRequirement } from '../types';

interface RequirementModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: string;
}

export const RequirementModal: React.FC<RequirementModalProps> = ({
  isOpen,
  onClose,
  initialPlan,
}) => {
  const [form, setForm] = useState<UserRequirement>({
    plotLength: 40,
    plotLengthInches: 0,
    plotWidth: 30,
    plotWidthInches: 0,
    unit: 'ft',
    facing: 'East',
    bhk: '3 BHK',
    floors: 'G+1 (Duplex)',
    vastuPriority: true,
    parkingNeeded: true,
    poojaRoomNeeded: true,
    additionalNotes: initialPlan ? `Interested in reference: ${initialPlan}` : '',
    clientName: '',
    clientCity: '',
    clientPhone: '',
    style: 'All Styles',
  });

  const [copied, setCopied] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const totalPlotArea = (form.plotLength + form.plotLengthInches / 12) * (form.plotWidth + form.plotWidthInches / 12);

  const generatedWhatsAppMessage = `Hello mymap.co.in Architects! 🏠
I would like to order a House Floor Plan (Only ₹499/-):
📐 Plot Size: ${form.plotWidth}ft ${form.plotWidthInches}in x ${form.plotLength}ft ${form.plotLengthInches}in (${totalPlotArea.toFixed(2)} sq.${form.unit})
🧭 Plot Facing: ${form.facing} Facing
🛏️ Configuration: ${form.bhk}
🏢 Floors: ${form.floors}
  🏠 Style: ${form.style}
✨ Key Features: ${form.parkingNeeded ? 'Car Parking, ' : ''}${form.poojaRoomNeeded ? 'Pooja Room, ' : ''}${form.vastuPriority ? 'Vastu Compliant' : ''}
${form.additionalNotes ? `📝 Notes: ${form.additionalNotes}\n` : ''}${form.clientName ? `👤 Name: ${form.clientName} (${form.clientCity || 'India'})\n` : ''}
Please send me a sample drawing and discuss my plan on WhatsApp!`;

  const handleSendWhatsApp = () => {
    // Official WhatsApp URL for 7706966000
    const encodedText = encodeURIComponent(generatedWhatsAppMessage);
    const whatsappUrl = `https://wa.me/917706966000?text=${encodedText}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedWhatsAppMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Send Your Requirement on WhatsApp</h3>
              <p className="text-xs text-amber-300 font-semibold flex items-center gap-1.5 mt-0.5">
                <span>Customer Support for Any Query</span>
                <span className="text-slate-400">·</span>
                <span className="text-slate-300">Plans starting at ₹499/-</span>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Plot Dimensions */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              1. Plot Dimensions (Frontage & Depth)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>
                <span className="text-xs text-slate-500 mb-1 block">Width (ft)</span>
                <input
                  type="number"
                  value={form.plotWidth}
                  onChange={(e) => setForm({ ...form, plotWidth: Number(e.target.value) })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="30"
                />
              </div>
              <div>
                <span className="text-xs text-slate-500 mb-1 block">Width (in)</span>
                <input
                  type="number"
                  min="0"
                  max="11"
                  value={form.plotWidthInches}
                  onChange={(e) => setForm({ ...form, plotWidthInches: Number(e.target.value) })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="0"
                />
              </div>
              <div>
                <span className="text-xs text-slate-500 mb-1 block">Length (ft)</span>
                <input
                  type="number"
                  value={form.plotLength}
                  onChange={(e) => setForm({ ...form, plotLength: Number(e.target.value) })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="40"
                />
              </div>
              <div>
                <span className="text-xs text-slate-500 mb-1 block">Length (in)</span>
                <input
                  type="number"
                  min="0"
                  max="11"
                  value={form.plotLengthInches}
                  onChange={(e) => setForm({ ...form, plotLengthInches: Number(e.target.value) })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="0"
                />
              </div>
            </div>
            <div className="mt-3 px-3 py-2 bg-slate-100 rounded-lg text-center border border-slate-200">
              <span className="text-xs text-slate-500 block">Total Plot Area</span>
              <span className="text-sm font-bold text-slate-900 font-mono">
                {totalPlotArea.toFixed(2)} sq.ft
              </span>
            </div>
          </div>

          {/* Plot Facing Direction */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              2. Main Road / Plot Facing
            </label>
            <div className="grid grid-cols-4 gap-2">
              {(['East', 'North', 'West', 'South'] as const).map((direction) => (
                <button
                  key={direction}
                  type="button"
                  onClick={() => setForm({ ...form, facing: direction })}
                  className={`py-2 px-3 rounded-lg text-xs font-bold transition-all border cursor-pointer ${
                    form.facing === direction
                      ? 'bg-slate-900 text-amber-400 border-slate-900 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {direction} Facing
                </button>
              ))}
            </div>
          </div>

          {/* BHK & Floors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                3. Bedrooms (BHK)
              </label>
              <select
                value={form.bhk}
                onChange={(e) => setForm({ ...form, bhk: e.target.value as any })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <option value="1 BHK">1 BHK (Compact)</option>
                <option value="2 BHK">2 BHK (Standard)</option>
                <option value="3 BHK">3 BHK (Family Favorite)</option>
                <option value="4 BHK">4 BHK (Spacious)</option>
                <option value="Duplex / Villa">Luxury Duplex / Villa</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                4. Floors Construction
              </label>
              <select
                value={form.floors}
                onChange={(e) => setForm({ ...form, floors: e.target.value as any })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <option value="Ground Floor">Ground Floor Only</option>
                <option value="G+1 (Duplex)">G+1 (Duplex / Two Storey)</option>
                <option value="G+2">G+2 (Three Storey / Rental Units)</option>
                <option value="G+3">G+3 (Apartment Style)</option>
              </select>
            </div>
          </div>

          {/* House Style */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              5. Preferred Style
            </label>
            <select
              value={form.style}
              onChange={(e) => setForm({ ...form, style: e.target.value as any })}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <option value="All Styles">All Styles</option>
              <option value="Villa">Villa</option>
              <option value="Modern">Modern</option>
              <option value="Kerala Heritage">Kerala Heritage</option>
              <option value="Minimalist">Minimalist</option>
            </select>
          </div>

          {/* Special Requirements */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              6. Priority Elements
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <label className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-200 bg-slate-50 cursor-pointer hover:bg-slate-100 transition-colors">
                <input
                  type="checkbox"
                  checked={form.vastuPriority}
                  onChange={(e) => setForm({ ...form, vastuPriority: e.target.checked })}
                  className="rounded text-amber-500 focus:ring-amber-400"
                />
                <span className="text-xs font-medium text-slate-800">100% Vastu Compliant</span>
              </label>

              <label className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-200 bg-slate-50 cursor-pointer hover:bg-slate-100 transition-colors">
                <input
                  type="checkbox"
                  checked={form.parkingNeeded}
                  onChange={(e) => setForm({ ...form, parkingNeeded: e.target.checked })}
                  className="rounded text-amber-500 focus:ring-amber-400"
                />
                <span className="text-xs font-medium text-slate-800">Car / Bike Porch</span>
              </label>

              <label className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-200 bg-slate-50 cursor-pointer hover:bg-slate-100 transition-colors">
                <input
                  type="checkbox"
                  checked={form.poojaRoomNeeded}
                  onChange={(e) => setForm({ ...form, poojaRoomNeeded: e.target.checked })}
                  className="rounded text-amber-500 focus:ring-amber-400"
                />
                <span className="text-xs font-medium text-slate-800">Pooja Mandir Room</span>
              </label>
            </div>
          </div>

          {/* Client Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div>
              <span className="text-xs text-slate-500 mb-1 block">Your Name (Optional)</span>
              <input
                type="text"
                value={form.clientName}
                onChange={(e) => setForm({ ...form, clientName: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="e.g. Ramesh Patel"
              />
            </div>
            <div>
              <span className="text-xs text-slate-500 mb-1 block">City / State (Optional)</span>
              <input
                type="text"
                value={form.clientCity}
                onChange={(e) => setForm({ ...form, clientCity: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="e.g. Ahmedabad, Gujarat"
              />
            </div>
          </div>

          {/* Live Message Preview */}
          <div className="p-3.5 rounded-xl bg-slate-900 text-slate-200 border border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                <span>WhatsApp Message Preview:</span>
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Text'}</span>
              </button>
            </div>
            <pre className="text-xs font-mono text-slate-300 whitespace-pre-wrap leading-relaxed max-h-32 overflow-y-auto">
              {generatedWhatsAppMessage}
            </pre>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Guaranteed reply within 5 minutes on WhatsApp Support</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleSendWhatsApp}
              className="w-1/2 sm:w-auto px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Send on WhatsApp</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
