import { Mail, MapPin, Phone } from "lucide-react";
import { SITE, SERVICES } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-gradient-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <div className="inline-block rounded-xl bg-white/95 p-4">
            <img src={SITE.logo} alt={SITE.brand} className="h-14 w-auto" />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            {SITE.tagline}. A trusted financial services platform helping
            individuals, professionals and businesses access tailored loan
            solutions.
          </p>
          <p className="mt-4 text-xs text-white/55">
            {SITE.legal} · LLPIN {SITE.llpin}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-gold">
            Services
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <a href="#services" className="transition-colors hover:text-gold">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-gold">
            Company
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><a href="#about" className="hover:text-gold">About Us</a></li>
            <li><a href="#emi-calculator" className="hover:text-gold">EMI Calculator</a></li>
            <li><a href="#reviews" className="hover:text-gold">Customer Reviews</a></li>
            <li><a href="#contact" className="hover:text-gold">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-gold">
            Get in Touch
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-gold" />
              <a href={SITE.phoneTel} className="hover:text-gold">
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-gold" />
              <a href={SITE.emailHref} className="hover:text-gold">
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-gold" />
              <span className="leading-relaxed">
                {SITE.address.line1}, {SITE.address.line2},{" "}
                {SITE.address.city}, {SITE.address.state}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/55 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {SITE.brand}. All rights reserved.
          </p>
          <p>
            {SITE.legal} · LLPIN {SITE.llpin}
          </p>
        </div>
      </div>
    </footer>
  );
}
