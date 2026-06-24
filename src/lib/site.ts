export const SITE = {
  brand: "Vridhi Credit",
  legal: "VRIDHI SETU CAPITAL SOLUTIONS LLP",
  llpin: "ACZ-2377",
  tagline: "Empowering Financial Growth & Connection",
  phone: "+91 91425 43546",
  phoneTel: "tel:+919142543546",
  whatsappRaw: "919142543546",
  whatsapp:
    "https://wa.me/919142543546?text=Hello%20Vridhi%20Credit,%20I%20would%20like%20to%20know%20more%20about%20your%20loan%20services.",
  email: "info@vridhicredit.com",
  emailHref: "mailto:info@vridhicredit.com",
  address: {
    line1: "HNO 10, O Block, Gali No. 2",
    line2: "Mohan Nagar, Bhondsi",
    city: "Gurugram – 122102",
    state: "Haryana, India",
  },
  logo: "/Logo_Site.jpeg",
};

export const NAV_LINKS = [
  { hash: "#home", label: "Home" },
  { hash: "#services", label: "Services" },
  { hash: "#emi-calculator", label: "EMI Calculator" },
  { hash: "#about", label: "About" },
  { hash: "#reviews", label: "Reviews" },
  { hash: "#contact", label: "Contact" },
] as const;

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  image: string;
  icon: "home" | "building" | "briefcase" | "landmark" | "graduation" | "wallet";
  highlight: string;
};

export const SERVICES: Service[] = [
  {
    slug: "home-loan",
    title: "Home Loan",
    short: "Turn Your Dream Home Into Reality",
    description:
      "Flexible financing solutions for purchasing your dream home with attractive interest rates and long tenures.",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=80",
    icon: "home",
    highlight: "Up to 30-year tenure",
  },
  {
    slug: "loan-against-property",
    title: "Loan Against Property",
    short: "Unlock the Value of Your Property",
    description:
      "Leverage your residential or commercial property's value to access substantial funds for any requirement.",
    image:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1600&q=80",
    icon: "building",
    highlight: "High loan-to-value",
  },
  {
    slug: "business-loan",
    title: "Business Loan",
    short: "Accelerate Your Business Growth",
    description:
      "Funding solutions designed for business expansion, working capital, and operational scaling.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80",
    icon: "briefcase",
    highlight: "Minimal documentation",
  },
  {
    slug: "corporate-loan",
    title: "Corporate Loan",
    short: "Tailored Capital for Enterprises",
    description:
      "Customized financial solutions for companies and enterprises seeking structured credit facilities.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    icon: "landmark",
    highlight: "Bespoke structuring",
  },
  {
    slug: "education-loan",
    title: "Education Loan",
    short: "Invest In Your Future",
    description:
      "Support higher education aspirations in India and abroad with flexible repayment options.",
    image:
      "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=1600&q=80",
    icon: "graduation",
    highlight: "Moratorium available",
  },
  {
    slug: "personal-loan",
    title: "Personal Loan",
    short: "Quick & Convenient Assistance",
    description:
      "Fast, collateral-free personal loans for weddings, travel, medical needs, or any personal requirement.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
    icon: "wallet",
    highlight: "Quick disbursal",
  },
];

export const HERO_SLIDES = [
  {
    eyebrow: "Home Loan",
    title: "Turn Your Dream Home Into Reality",
    subtitle:
      "Competitive rates, flexible tenures and personalised guidance every step of the way.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80",
  },
  {
    eyebrow: "Loan Against Property",
    title: "Unlock the Value of Your Property",
    subtitle:
      "High-value funding secured against your residential or commercial property.",
    image:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=2000&q=80",
  },
  {
    eyebrow: "Business & Corporate Loans",
    title: "Accelerate Your Business Growth",
    subtitle:
      "Working capital, expansion finance and structured credit for ambitious enterprises.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80",
  },
  {
    eyebrow: "Education & Personal Loans",
    title: "Invest In Your Future",
    subtitle:
      "Empower aspirations with education finance and on-demand personal credit.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=80",
  },
];
