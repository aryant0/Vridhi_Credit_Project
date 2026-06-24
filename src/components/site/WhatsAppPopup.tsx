import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

const STORAGE_KEY = "vridhi_wa_popup_shown";

export default function WhatsAppPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      /* ignore */
    }
    const t = setTimeout(() => {
      setOpen(true);
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore */
      }
    }, 5000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-navy-deep/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="fixed left-1/2 top-1/2 z-[61] w-[92%] max-w-md -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl bg-white shadow-premium"
          >
            <div className="relative bg-gradient-navy p-6 text-center">
              <button
                aria-label="Close"
                onClick={() => setOpen(false)}
                className="absolute right-3 top-3 rounded-full bg-white/10 p-1.5 text-white/80 transition hover:bg-white/20 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="mx-auto inline-flex rounded-xl bg-white/95 p-3">
                <img
                  src={SITE.logo}
                  alt="Vridhi Credit"
                  className="h-12 w-auto"
                />
              </div>
            </div>
            <div className="px-6 py-6 text-center">
              <h3 className="text-2xl font-semibold text-navy-deep">
                Need Help Finding the Right Loan?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Our loan experts are available to assist you with Home Loans,
                Loan Against Property, Business Loans, Corporate Loans,
                Education Loans and Personal Loans.
              </p>
              <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-gold transition-transform hover:scale-[1.02]"
                >
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </a>
                <a
                  href={SITE.phoneTel}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-navy px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                >
                  <Phone className="h-4 w-4" /> Call Now
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
