import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { SERVICES, SITE } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" className="bg-cream py-20 sm:py-24 scroll-mt-20">
      <div className="mx-auto max-w-2xl text-center px-4 sm:px-6 lg:px-8">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">
          Contact
        </span>
        <h2 className="mt-3 text-3xl font-semibold text-navy-deep sm:text-4xl">
          Let's talk about your{" "}
          <span className="text-gradient-gold">financial goals</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Reach out for a no-obligation conversation. Our specialists respond
          quickly.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="space-y-4 lg:col-span-2">
          <InfoCard
            icon={<Phone className="h-5 w-5" />}
            label="Phone"
            value={SITE.phone}
            href={SITE.phoneTel}
          />
          <InfoCard
            icon={<MessageCircle className="h-5 w-5" />}
            label="WhatsApp"
            value={SITE.phone}
            href={SITE.whatsapp}
            external
          />
          <InfoCard
            icon={<Mail className="h-5 w-5" />}
            label="Email"
            value={SITE.email}
            href={SITE.emailHref}
          />
          <div className="rounded-2xl bg-white p-6 shadow-card">
            <div className="flex items-center gap-3 text-navy-deep">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-navy text-gold">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="font-semibold">Registered Office</h3>
            </div>
            <address className="mt-3 not-italic text-sm leading-relaxed text-muted-foreground">
              {SITE.address.line1}
              <br />
              {SITE.address.line2}
              <br />
              {SITE.address.city}
              <br />
              {SITE.address.state}
            </address>
          </div>
        </div>

        <div className="lg:col-span-3">
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-premium"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-gold text-navy-deep">
        {icon}
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <p className="text-base font-semibold text-navy-deep">{value}</p>
      </div>
    </a>
  );
}

function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    loanType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Hello Vridhi Credit,\n` +
      `Name: ${form.name}\n` +
      `Mobile: ${form.mobile}\n` +
      `Loan Type: ${form.loanType}\n` +
      `Message: ${form.message}`;
    const url = `https://wa.me/${SITE.whatsappRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setSubmitted(true);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl bg-white p-7 shadow-premium sm:p-9"
    >
      <h3 className="text-2xl font-semibold text-navy-deep">
        Request a Callback
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Share your details and we'll reach out shortly.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Input
          label="Name"
          required
          value={form.name}
          onChange={(v) => setForm((f) => ({ ...f, name: v }))}
        />
        <Input
          label="Mobile Number"
          type="tel"
          required
          value={form.mobile}
          onChange={(v) => setForm((f) => ({ ...f, mobile: v }))}
        />
      </div>

      <div className="mt-4">
        <label className="block text-xs font-semibold uppercase tracking-wider text-navy-deep">
          Loan Type
        </label>
        <select
          required
          value={form.loanType}
          onChange={(e) => setForm((f) => ({ ...f, loanType: e.target.value }))}
          className="mt-2 w-full rounded-xl border border-input bg-white px-4 py-3 text-sm text-navy-deep outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
        >
          <option value="">Select a loan type</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        <label className="block text-xs font-semibold uppercase tracking-wider text-navy-deep">
          Message
        </label>
        <textarea
          rows={4}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          placeholder="Tell us briefly about your requirement…"
          className="mt-2 w-full resize-none rounded-xl border border-input bg-white px-4 py-3 text-sm text-navy-deep outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
        />
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-navy px-6 py-3 text-sm font-semibold text-white shadow-premium transition-transform hover:scale-[1.01] sm:w-auto"
      >
        <Send className="h-4 w-4" /> Request Callback
      </button>

      {submitted && (
        <div className="mt-4 flex items-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm text-navy-deep">
          <CheckCircle2 className="h-4 w-4 text-gold-deep" />
          Your request has been prepared on WhatsApp — send it to reach our team.
        </div>
      )}
    </motion.form>
  );
}

function Input({
  label,
  type = "text",
  required,
  value,
  onChange,
}: {
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-navy-deep">
        {label}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-input bg-white px-4 py-3 text-sm text-navy-deep outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
      />
    </div>
  );
}
