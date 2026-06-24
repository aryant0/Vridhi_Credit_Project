import { ArrowRight, ShieldCheck, Sparkles, Headphones } from "lucide-react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FloatingButtons from "@/components/site/FloatingButtons";
import WhatsAppPopup from "@/components/site/WhatsAppPopup";
import HeroSlider from "@/components/site/HeroSlider";
import ServicesGrid from "@/components/site/ServicesGrid";
import WhyChooseUs from "@/components/site/WhyChooseUs";
import EmiCalculator from "@/components/site/EmiCalculator";
import ReviewsCarousel from "@/components/site/ReviewsCarousel";
import About from "@/components/site/About";
import Contact from "@/components/site/Contact";

function App() {
  return (
    <>
      <Header />
      <HeroSlider />

      <section className="border-y border-border bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            { icon: ShieldCheck, label: "Transparent & Secure Process" },
            { icon: Sparkles, label: "Expert Loan Guidance" },
            { icon: Headphones, label: "Personalised Customer Support" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold text-navy-deep">
                <item.icon className="h-5 w-5" />
              </div>
              <p className="text-sm font-semibold text-navy-deep">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <ServicesGrid />
      <WhyChooseUs />
      <EmiCalculator />
      <ReviewsCarousel />
      <About />
      <Contact />

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-navy p-10 text-white sm:p-14">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-40"
              style={{ background: "var(--gradient-gold)" }}
            />
            <div className="relative max-w-2xl">
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Ready to take the next step?
              </h2>

              <p className="mt-4 text-white/80">
                Speak with a Vridhi Credit loan specialist and get a tailored
                recommendation for your goals.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-navy-deep shadow-gold transition-transform hover:scale-[1.03]"
                >
                  Request Callback
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
      <WhatsAppPopup />
    </>
  );
}

export default App;