import React from 'react';
import { Home } from 'lucide-react';

interface NavbarProps {
  onOpenRequirementModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRequirementModal }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 py-3.5">
        {/* Zone 1: Single text element brand wordmark */}
        <a href="#" className="flex items-center gap-2.5 text-slate-900 group whitespace-nowrap shrink-0">
          <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center text-amber-400 shadow-xs group-hover:bg-slate-800 transition-colors">
            <Home className="w-5 h-5" />
          </div>
          <div className="flex items-baseline">
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">
              mymap<span className="text-amber-500 font-black">.co.in</span>
            </span>
          </div>
        </a>

        {/* Zone 2: 4-5 concise single-line nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-600">
          <a href="#plans" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
            Floor Plans
          </a>
          <a href="#viewer" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
            3D Viewer
          </a>
          <a href="#calculator" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
            Cost & BOQ
          </a>
          <a href="#pricing" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
            Pricing
          </a>
          <a href="#partner" className="text-amber-600 hover:text-amber-700 font-bold transition-colors whitespace-nowrap shrink-0">
            Partner
          </a>
        </nav>

        {/* Zone 3: Exactly 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenRequirementModal}
            className="px-4 py-2 text-xs sm:text-sm font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all rounded-lg shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
          >
            Send Requirement
          </button>
        </div>
      </div>
    </header>
  );
};
