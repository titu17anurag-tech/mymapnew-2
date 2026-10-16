import React from 'react';

interface FloatingWhatsAppProps {
  onClick: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onClick }) => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
      <button
        onClick={onClick}
        aria-label="Customer Support on WhatsApp"
        title="WhatsApp Customer Support"
        className="group relative flex items-center gap-2 px-3.5 sm:px-4 py-2.5 sm:py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-full shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
      >
        {/* WhatsApp Icon */}
        <div className="w-5 h-5 flex items-center justify-center shrink-0">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.976.533 1.942.825 3.149.825 3.182 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.767-5.767-5.767zm7.621 5.766c-.001 4.209-3.424 7.632-7.621 7.632-1.282 0-2.483-.319-3.534-.881l-4.507 1.182 1.206-4.398c-.658-1.109-1.034-2.399-1.033-3.766.001-4.209 3.424-7.632 7.621-7.632 4.21 0 7.622 3.423 7.622 7.632z"/>
          </svg>
        </div>

        <div className="flex flex-col text-left">
          <span className="text-[10px] text-emerald-100 font-medium leading-none">
            Customer Support
          </span>
          <span className="text-xs sm:text-xs font-black uppercase tracking-tight leading-tight mt-0.5">
            Chat on WhatsApp
          </span>
        </div>
      </button>
    </div>
  );
};
