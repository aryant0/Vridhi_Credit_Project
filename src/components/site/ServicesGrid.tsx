import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Building2,
  GraduationCap,
  Home,
  Landmark,
  Wallet,
} from "lucide-react";
import { SERVICES, type Service } from "@/lib/site";

const ICONS = {
  home: Home,
  building: Building2,
  briefcase: Briefcase,
  landmark: Landmark,
  graduation: GraduationCap,
  wallet: Wallet,
};

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-cream py-20 sm:py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-navy-deep sm:text-4xl">
            Loan solutions crafted around{" "}
            <span className="text-gradient-gold">your goals</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            From owning a home to scaling a business, choose a financing
            partner that prioritises clarity, speed and personalised guidance.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, idx) => (
            <ServiceCard key={s.slug} service={s} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = ICONS[service.icon];
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-premium"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-navy-deep/10 to-transparent" />
        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-navy-deep">
          {service.highlight}
        </div>
        <div className="absolute -bottom-6 right-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-gold text-navy-deep shadow-gold">
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-navy-deep">
          {service.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>
        <a
          href="#contact"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-deep transition-colors hover:text-navy"
        >
          Apply Now
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
}
