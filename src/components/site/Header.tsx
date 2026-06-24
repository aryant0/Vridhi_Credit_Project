import { useEffect, useState } from "react";
import { Menu, Phone, X, MessageCircle } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-card"
          : "bg-white/80 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <img
            src={SITE.logo}
            alt="Vridhi Credit"
            className="h-12 w-auto sm:h-14"
          />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.hash}
              href={link.hash}
              className="px-3 py-2 text-sm font-medium text-navy-deep transition-colors hover:text-gold-deep"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={SITE.phoneTel}
            className="inline-flex items-center gap-2 rounded-full border border-navy/15 px-4 py-2 text-sm font-semibold text-navy-deep transition-all hover:border-navy hover:bg-navy hover:text-white"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-4 py-2 text-sm font-semibold text-navy-deep shadow-gold transition-transform hover:scale-[1.03]"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>

        <button
          aria-label="Menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-navy/10 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-white lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.hash}
                href={link.hash}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-base font-medium text-navy-deep hover:bg-accent"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <a
                href={SITE.phoneTel}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/20 px-3 py-2 text-sm font-semibold text-navy-deep"
              >
                <Phone className="h-4 w-4" /> Call
              </a>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-3 py-2 text-sm font-semibold text-navy-deep"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
