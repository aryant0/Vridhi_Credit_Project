import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const REVIEWS = [
  {
    name: "Rajesh Sharma",
    role: "Home Loan Customer",
    text: "Excellent support throughout my home loan process. The team made what felt complex genuinely simple — every question answered, every step explained.",
  },
  {
    name: "Neha Verma",
    role: "Personal Loan Customer",
    text: "Very smooth documentation and professional assistance. I appreciated the transparency and the speed at which everything moved.",
  },
  {
    name: "Amit Gupta",
    role: "Business Loan Customer",
    text: "Helped me secure a business loan efficiently. Their guidance on structuring the application made a real difference.",
  },
  {
    name: "Priya Iyer",
    role: "Loan Against Property Customer",
    text: "Honest advice and quick responses. They helped me unlock the value of my property without any unnecessary hurdles.",
  },
  {
    name: "Suresh Menon",
    role: "Education Loan Customer",
    text: "The team understood my daughter's overseas education plan and structured the loan around realistic timelines.",
  },
];

export default function ReviewsCarousel() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % REVIEWS.length), 6000);
    return () => clearInterval(t);
  }, []);

  const prev = () => setI((p) => (p - 1 + REVIEWS.length) % REVIEWS.length);
  const next = () => setI((p) => (p + 1) % REVIEWS.length);
  const r = REVIEWS[i];

  return (
    <section id="reviews" className="bg-white py-20 sm:py-24 scroll-mt-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">
            Customer Stories
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-navy-deep sm:text-4xl">
            What our clients{" "}
            <span className="text-gradient-gold">say</span>
          </h2>
        </div>

        <div className="relative mt-12">
          <div className="relative overflow-hidden rounded-3xl bg-cream p-8 shadow-card sm:p-12">
            <Quote className="absolute right-8 top-8 h-16 w-16 text-gold/20" />
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-lg leading-relaxed text-navy-deep sm:text-xl">
                  “{r.text}”
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-navy text-base font-semibold text-gold">
                    {r.name
                      .split(" ")
                      .map((s) => s[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-navy-deep">{r.name}</p>
                    <p className="text-sm text-muted-foreground">{r.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              aria-label="Previous"
              onClick={prev}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy-deep transition hover:border-gold hover:bg-gold/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Go to review ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === i ? "w-8 bg-gold-deep" : "w-2 bg-navy/20"
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Next"
              onClick={next}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy-deep transition hover:border-gold hover:bg-gold/10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
