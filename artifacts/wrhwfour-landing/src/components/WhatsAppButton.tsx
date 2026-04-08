import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-xl group"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6 sm:w-8 sm:h-8" />

      <div className="absolute right-full mr-3 bg-white text-slate-800 px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md whitespace-nowrap border border-slate-100">
        Chat with us
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-white rotate-45 border-r border-t border-slate-100"></div>
      </div>
    </a>
  );
}
