import { Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={SITE.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-gold transition-transform hover:scale-110"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
        <MessageCircle className="h-7 w-7" />
      </a>
      <a
        href={SITE.phoneTel}
        aria-label="Call"
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-navy text-white shadow-premium transition-transform hover:scale-110"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
