import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SITE } from "@/lib/site";

export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-24 scroll-mt-20">
      <div className="mx-auto max-w-2xl text-center px-4 sm:px-6 lg:px-8">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">
          About Us
        </span>
        <h2 className="mt-3 text-3xl font-semibold text-navy-deep sm:text-4xl">
          About <span className="text-gradient-gold">Vridhi Credit</span>
        </h2>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl"
        >
          <img
            src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1400&q=80"
            alt="Vridhi Credit team"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-navy-deep/40 to-transparent" />
        </motion.div>

        <div>
          <h3 className="text-2xl font-semibold text-navy-deep sm:text-3xl">
            A partner committed to your{" "}
            <span className="text-gradient-gold">financial growth</span>
          </h3>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Vridhi Credit is a financial services platform dedicated to helping
            individuals, professionals, and businesses access suitable loan
            solutions through transparent guidance and personalised assistance.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Operated by <strong>{SITE.legal}</strong> (LLPIN {SITE.llpin}), we
            bring together a portfolio of carefully curated loan products and a
            service philosophy rooted in clarity, speed and trust.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              "Personalised loan advisory across six product categories",
              "Clear paperwork and timelines — no surprises",
              "Dedicated support from application to disbursal",
              "Pan-India service from our Gurugram base",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep" />
                <span className="text-navy-deep">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
