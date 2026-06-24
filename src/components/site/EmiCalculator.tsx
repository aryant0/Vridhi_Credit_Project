import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Calculator, IndianRupee, Percent, CalendarClock } from "lucide-react";

function formatINR(n: number) {
  if (!isFinite(n) || isNaN(n)) return "₹0";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.round(n));
}

export default function EmiCalculator() {
  const [amount, setAmount] = useState(2500000);
  const [rate, setRate] = useState(9);
  const [years, setYears] = useState(15);

  const { emi, totalInterest, totalPayment } = useMemo(() => {
    const r = rate / 12 / 100;
    const n = years * 12;
    if (amount <= 0 || rate <= 0 || years <= 0)
      return { emi: 0, totalInterest: 0, totalPayment: 0 };
    const e = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const tp = e * n;
    return { emi: e, totalInterest: tp - amount, totalPayment: tp };
  }, [amount, rate, years]);

  return (
    <section
      id="emi-calculator"
      className="relative bg-gradient-navy py-20 sm:py-24 scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            EMI Calculator
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Plan your loan with{" "}
            <span className="text-gradient-gold">confidence</span>
          </h2>
          <p className="mt-4 text-white/70">
            Estimate your monthly instalment, total interest and total payment.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 grid gap-6 overflow-hidden rounded-3xl bg-white shadow-premium lg:grid-cols-5"
        >
          <div className="space-y-6 p-8 lg:col-span-3 lg:p-10">
            <Field
              label="Loan Amount"
              icon={<IndianRupee className="h-4 w-4" />}
              value={amount}
              suffix={formatINR(amount)}
              min={100000}
              max={50000000}
              step={50000}
              onChange={setAmount}
            />
            <Field
              label="Interest Rate (per annum)"
              icon={<Percent className="h-4 w-4" />}
              value={rate}
              suffix={`${rate.toFixed(2)} %`}
              min={1}
              max={24}
              step={0.1}
              onChange={setRate}
            />
            <Field
              label="Tenure"
              icon={<CalendarClock className="h-4 w-4" />}
              value={years}
              suffix={`${years} Years`}
              min={1}
              max={30}
              step={1}
              onChange={setYears}
            />
          </div>

          <div className="relative flex flex-col justify-center gap-5 bg-gradient-navy p-8 text-white lg:col-span-2 lg:p-10">
            <div className="flex items-center gap-3 text-gold">
              <Calculator className="h-5 w-5" />
              <span className="text-xs font-semibold uppercase tracking-widest">
                Your Estimate
              </span>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-white/60">
                Monthly EMI
              </p>
              <p className="mt-1 text-4xl font-semibold text-gradient-gold">
                {formatINR(emi)}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-5">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-white/60">
                  Total Interest
                </p>
                <p className="mt-1 text-lg font-semibold">
                  {formatINR(totalInterest)}
                </p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-white/60">
                  Total Payment
                </p>
                <p className="mt-1 text-lg font-semibold">
                  {formatINR(totalPayment)}
                </p>
              </div>
            </div>
            <a
              href="#contact"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-navy-deep shadow-gold transition-transform hover:scale-[1.02]"
            >
              Apply for this Loan
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  icon,
  value,
  suffix,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  icon: React.ReactNode;
  value: number;
  suffix: string;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm font-medium text-navy-deep">
          <span className="text-gold-deep">{icon}</span>
          {label}
        </label>
        <span className="rounded-full bg-accent px-3 py-1 text-sm font-semibold text-navy-deep">
          {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="mt-3 w-full accent-[color:var(--gold-deep)]"
      />
      <div className="mt-1 flex justify-between text-[11px] text-muted-foreground">
        <span>{min >= 100000 ? `₹${min / 100000}L` : min}</span>
        <span>{max >= 100000 ? `₹${max / 100000}L` : max}</span>
      </div>
    </div>
  );
}
