import { motion } from "framer-motion";
import {
  Eye,
  HeartHandshake,
  Layers,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const FEATURES = [
  {
    icon: Eye,
    title: "Transparent Process",
    desc: "Clear terms, no hidden charges and complete visibility from application to disbursal.",
  },
  {
    icon: Sparkles,
    title: "Expert Guidance",
    desc: "Seasoned loan specialists who help you match the right product to your need.",
  },
  {
    icon: Zap,
    title: "Quick Response",
    desc: "Fast turnarounds across queries, documentation and approvals.",
  },
  {
    icon: Layers,
    title: "Multiple Loan Options",
    desc: "Home, Property, Business, Corporate, Education and Personal loans under one roof.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Documentation",
    desc: "Compliant handling of your documents with strict confidentiality.",
  },
  {
    icon: HeartHandshake,
    title: "Customer-Centric Support",
    desc: "Dedicated assistance through every milestone of your loan journey.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">
            Why Vridhi Credit
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-navy-deep sm:text-4xl">
            A finance partner you can{" "}
            <span className="text-gradient-gold">trust</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-border bg-cream/40 p-7 transition-all hover:-translate-y-1 hover:border-gold/40 hover:bg-white hover:shadow-card"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-navy text-gold shadow-premium">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-navy-deep">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
