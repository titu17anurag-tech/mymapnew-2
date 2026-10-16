import React, { useState } from 'react';
import { 
  Users, 
  MapPin, 
  Briefcase, 
  Award, 
  Send, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  PhoneCall, 
  Sparkles,
  ArrowRight,
  Building2,
  HardHat,
  Home
} from 'lucide-react';

interface AssociatePartnerProps {
  onOpenPartnerModal?: () => void;
}

export const AssociatePartner: React.FC<AssociatePartnerProps> = () => {
  const [partnerName, setPartnerName] = useState('');
  const [partnerArea, setPartnerArea] = useState('');
  const [partnerState, setPartnerState] = useState('');
  const [partnerRole, setPartnerRole] = useState('Civil Contractor / Builder');
  const [partnerPhone, setPartnerPhone] = useState('');
  const [partnerMessage, setPartnerMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const formattedWhatsAppMsg = `🤝 Associate Partner Application - mymap.co.in
━━━━━━━━━━━━━━━━━━━━
👤 Name: ${partnerName || '[Applicant Name]'}
📍 Area / City: ${partnerArea || '[City / Area]'}, ${partnerState || '[State]'}
💼 Profession: ${partnerRole}
📱 WhatsApp: ${partnerPhone || '[Phone Number]'}
${partnerMessage ? `📝 Details: ${partnerMessage}\n` : ''}
I am interested in becoming an Associate Partner for my area. Please share partner commission terms, co-branded drawing formats, and marketing materials!`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedText = encodeURIComponent(formattedWhatsAppMsg);
    // WhatsApp redirect to customer support line
    const url = `https://wa.me/917706966000?text=${encodedText}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const partnerTypes = [
    {
      icon: HardHat,
      title: 'Civil Contractors & Builders',
      desc: 'Offer professional 2D blueprints & 3D elevations to your construction clients to win house contracts 3x faster.',
      highlight: 'Earn 30-40% Margin',
    },
    {
      icon: Building2,
      title: 'Real Estate & Plot Brokers',
      desc: 'Help plot buyers visualize complete layouts starting at ₹499/- to close land and plot deals without hesitation.',
      highlight: 'Instant Deal Booster',
    },
    {
      icon: Home,
      title: 'Local Draftsmen & Designers',
      desc: 'Outsource heavy drafting & 3D rendering to our rapid fulfillment team while retaining 100% of your local client base.',
      highlight: 'Co-Branded CAD Sheets',
    },
    {
      icon: Award,
      title: 'Material Dealers & Hardware Stores',
      desc: 'Turn your cement, steel & tile store into a home design desk. Refer customers for house plans with zero inventory.',
      highlight: 'Zero Investment Needed',
    },
  ];

  return (
    <section id="partner" className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background blueprint decorative pattern */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>National Associate Partner Network</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance">
            Partner With MyMap in <span className="text-amber-400">Your Area</span>
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Open for all cities, towns, tehsils, and rural areas across India. Join our nationwide network of Civil Engineers, Contractors, Brokers, and Designers to offer digital floor plans & 3D elevations.
          </p>
        </div>

        {/* 4 Partner Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {partnerTypes.map((pt) => {
            const Icon = pt.icon;
            return (
              <div
                key={pt.title}
                className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-400/60 transition-all duration-300 group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">
                    {pt.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs">
                  <span className="font-bold text-amber-400">
                    {pt.highlight}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* 2-Column Split: Partner Benefits on Left + Interactive Application Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Why Partner With MyMap */}
          <div className="lg:col-span-5 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                Associate Program Highlights
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Why Professionals Across India Work With Us
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                We handle the technical CAD drawings, structural bye-laws, and 3D rendering. You maintain direct client relationships and earn handsome payouts on every deal.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Attractive Commission Structure</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Earn generous margins on 2D layouts (₹499), Approval Packs (₹3,449), and 3D Dream Packs (₹5,449).</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Co-Branded Drawing Sheets</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Deliver drawings with your firm&apos;s name, contact number, and logo in the title block for local brand authority.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Dedicated WhatsApp Architect Desk</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Direct express hotline with our senior civil architects for fast revisions and site customization.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Exclusive Area Lead Referrals</h4>
                    <p className="text-xs text-slate-400 mt-0.5">We route on-site construction inquiries from your pincode / city directly to active Associate Partners.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span>National Coverage: All 28 States & UTs</span>
              <span className="text-amber-400 font-bold">Fast Approval</span>
            </div>
          </div>

          {/* Right Column: Interactive Partner Application Form */}
          <div className="lg:col-span-7 bg-white text-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Register as an Associate Partner
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Takes less than 1 minute. Direct onboarding via WhatsApp Support.
                </p>
              </div>
              <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-md">
                Zero Signup Fee
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name & Profession */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={partnerName}
                    onChange={(e) => setPartnerName(e.target.value)}
                    placeholder="e.g. Er. Vikas Deshmukh"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Profession / Business *
                  </label>
                  <select
                    value={partnerRole}
                    onChange={(e) => setPartnerRole(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:ring-2 focus:ring-amber-400 focus:outline-none"
                  >
                    <option value="Civil Contractor / Builder">Civil Contractor / Builder</option>
                    <option value="Civil Engineer / Architect">Civil Engineer / Architect</option>
                    <option value="Real Estate Agent / Plot Promoter">Real Estate Agent / Plot Promoter</option>
                    <option value="Material Dealer (Cement, Steel, Tiles)">Material Dealer (Cement, Steel, Tiles)</option>
                    <option value="Freelance Draftsman / 3D Artist">Freelance Draftsman / 3D Artist</option>
                    <option value="Interior Designer">Interior Designer</option>
                    <option value="Franchise / Local Business Entrepreneur">Franchise / Local Entrepreneur</option>
                  </select>
                </div>
              </div>

              {/* Area / City & State */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Area / City / Town / Tehsil *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={partnerArea}
                      onChange={(e) => setPartnerArea(e.target.value)}
                      placeholder="e.g. Gorakhpur, Surat, Salem, Alwar"
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    State / Territory *
                  </label>
                  <input
                    type="text"
                    required
                    value={partnerState}
                    onChange={(e) => setPartnerState(e.target.value)}
                    placeholder="e.g. Uttar Pradesh, Maharashtra, etc."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* WhatsApp Phone Number */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  WhatsApp Contact Number *
                </label>
                <div className="relative">
                  <span className="text-xs font-bold text-slate-500 absolute left-3 top-3">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={partnerPhone}
                    onChange={(e) => setPartnerPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    placeholder="9876543210 (10-digit number)"
                    className="w-full pl-11 pr-3.5 py-2.5 rounded-lg border border-slate-300 text-sm font-mono focus:ring-2 focus:ring-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Experience or Message */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Current Work or Area Experience (Optional)
                </label>
                <textarea
                  rows={2}
                  value={partnerMessage}
                  onChange={(e) => setPartnerMessage(e.target.value)}
                  placeholder="e.g. Constructing 4-5 residential houses per year; need 2D & 3D floor plans for clients."
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-xs text-slate-900 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                />
              </div>

              {/* WhatsApp Message Preview */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[11px] font-bold text-slate-600 block mb-1">
                  WhatsApp Application Preview:
                </span>
                <pre className="text-[11px] font-mono text-slate-700 whitespace-pre-wrap leading-tight max-h-24 overflow-y-auto">
                  {formattedWhatsAppMsg}
                </pre>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-black text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Partner Application on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Your application routes directly to our Partner Desk on WhatsApp</span>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
