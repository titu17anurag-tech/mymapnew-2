import React from 'react';
import { Home, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenRequirementModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRequirementModal }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                <Home className="w-4 h-4" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white font-heading">
                mymap<span className="text-amber-400">.co.in</span>
              </span>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              India&apos;s fastest online architectural floor plan service. High quality 2D CAD blueprints, 3D isometric cutaways, and front elevations starting at only ₹499/-.
            </p>

            <div className="text-amber-400 font-semibold text-xs italic">
              Simple | Smart | Affordable
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-3">
              Explore
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#plans" className="hover:text-amber-400 transition-colors">
                  Standard Floor Plans
                </a>
              </li>
              <li>
                <a href="#viewer" className="hover:text-amber-400 transition-colors">
                  3D & 2D Plan Inspector
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-amber-400 transition-colors">
                  Cost & BOQ Estimator
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-amber-400 transition-colors">
                  Pricing Packages (₹499)
                </a>
              </li>
              <li>
                <a href="#partner" className="text-amber-400 font-semibold hover:underline transition-colors">
                  Associate Partner Program (Any Area)
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-3">
              Architectural Services
            </h4>
            <ul className="space-y-2">
              <li>2D House Floor Plan (Custom Plot)</li>
              <li>3D Isometric Furnished Cutaways</li>
              <li>Front Exterior Modern Elevations</li>
              <li>Vastu Shastra Orientation Audit</li>
              <li>Column & Beam Structural Layout</li>
              <li>Municipal / Panchayat Sanction Blueprints</li>
            </ul>
          </div>

          {/* WhatsApp Direct Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-3">
              WhatsApp Support
            </h4>
            <div className="space-y-2.5">
              <a
                href="https://wa.me/917706966000?text=Hi%20mymap.co.in%20Support!%20I%20have%20a%20query%20regarding%20floor%20plans."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Customer Support for Any Query</span>
              </a>
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Mon - Sun: 9:00 AM - 10:00 PM</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>plans@mymap.co.in</span>
              </div>
              <div className="pt-2">
                <a
                  href="https://wa.me/917706966000?text=Hi%20mymap.co.in%20Team!%20I%20need%20a%20house%20floor%20plan%20for%20my%20plot."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Chat on WhatsApp Support</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} mymap.co.in. All rights reserved. Professional architectural and CAD drafting services.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              100% Satisfaction Guarantee
            </span>
            <span>·</span>
            <span>Privacy Policy</span>
            <span>·</span>
            <span>Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
