/* eslint-disable @typescript-eslint/no-unused-vars */
// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

// ...other types stay unchanged

// ─── Defaults ───────────────────────────────────────────────────────────────

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "Launch",
    badgeOuter: "MailPilot minimal SaaS starter",
    titleBefore: "Send Smarter Emails,",
    titleHighlight: "Grow Your Audience",
    titleAfter: "",
    subtitle:
      "MailPilot gives you the tools to easily create, send, and track beautiful email campaigns that deliver results.",
    primaryCta: { label: "Get Started Free", href: "#pricing" },
    secondaryCta: { label: "Learn More", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "MailPilot dashboard preview",
  },

  // ── Sponsors ─────────────────────────────────────────────────────────────
  sponsors: {
    heading: "Built with trusted tools",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "Puzzle", name: "Supabase" },
      { icon: "Squirrel", name: "Clerk" },
      { icon: "Cookie", name: "Resend" },
      { icon: "Drama", name: "Sentry" },
    ],
  },

  // ── Benefits ─────────────────────────────────────────────────────────────
  benefits: {
    eyebrow: "Why MailPilot",
    heading: "The smarter way to email market",
    description:
      "Designed for growing businesses, MailPilot streamlines your marketing campaigns and analytics from signup to launch.",
    items: [
      {
        icon: "Blocks",
        title: "Effortless Campaign Management",
        description: "Automate scheduling and manage campaigns from one place.",
      },
      {
        icon: "LineChart",
        title: "Advanced Targeting",
        description: "Segment and target your audience for better engagement.",
      },
      {
        icon: "Goal",
        title: "Actionable Analytics",
        description: "Understand what works and optimize your campaigns with real data.",
      },
      {
        icon: "Sparkle",
        title: "Polished Templates",
        description: "Create beautiful emails with a user-friendly template editor.",
      },
    ],
  },

  // ── Features ─────────────────────────────────────────────────────────────
  features: {
    eyebrow: "Features",
    heading: "Features Built for Email Marketers",
    subtitle: "",
    items: [
      {
        icon: "Hammer",
        title: "Simple Campaign Management",
        description: "Launch, schedule, and manage your email campaigns in just a few clicks.",
      },
      {
        icon: "Users",
        title: "Subscriber Lists Made Easy",
        description: "Organize and segment your subscribers for more effective targeting.",
      },
      {
        icon: "LineChart",
        title: "Real-Time Analytics",
        description: "Track opens, clicks, and engagement to optimize your strategy.",
      },
    ],
  },

  // ── Services ─────────────────────────────────────────────────────────────
  services: {
    eyebrow: "Services",
    heading: "Core capabilities",
    subtitle: "A pragmatic baseline for SaaS email products.",
    items: [
      { title: "Campaign Management", description: "Create, send, and track all your campaigns in one place.", pro: false },
      { title: "Subscriber Segmentation", description: "Organize, import, and segment your subscriber lists.", pro: false },
      { title: "Analytics", description: "View detailed analytics on campaign performance.", pro: false },
      { title: "Template Editor", description: "Design emails quickly with flexible templates.", pro: true },
    ],
  },

  // ── Testimonials ─────────────────────────────────────────────────────────
  testimonials: {
    eyebrow: "Testimonials",
    heading: "What customers are saying",
    reviews: [
      { image: "/demo-img.jpg", name: "Aarav Shah", role: "Founder, FinchFlow", comment: "With MailPilot, launching campaigns is a breeze.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Maya Patel", role: "Product Lead, OrbitDesk", comment: "Intuitive UI made our email marketing so much simpler.", rating: 4.8 },
      { image: "/demo-img.jpg", name: "Nikhil Rao", role: "CTO, TeamForge", comment: "The analytics dashboard helps us iterate quickly.", rating: 4.9 },
    ],
  },

  // ── Team ─────────────────────────────────────────────────────────────────
  team: {
    eyebrow: "Team",
    heading: "Meet the MailPilot team",
    members: [],
  },

  // ── Pricing ──────────────────────────────────────────────────────────────
  pricing: {
    eyebrow: "Pricing",
    heading: "Start Free. Scale When You Grow.",
    subtitle: "Get started with MailPilot today.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Starter",
        popular: false,
        price: 0,
        description: "Perfect to launch your first campaign.",
        buttonText: "Start Sending",
        benefits: ["Up to 500 subscribers", "Unlimited campaigns", "Basic analytics", "Community support"],
      },
    ],
  },

  // ── Contact ──────────────────────────────────────────────────────────────
  contact: {
    eyebrow: "Contact",
    heading: "Talk to the MailPilot team",
    description: "Have questions? Want a demo? Contact us anytime.",
    mailtoAddress: "meghna.rajawat@fxis.ai",
    info: {
      address: { label: "Find us", value: "Remote-first" },
      phone: { label: "Call us", value: "" },
      email: { label: "Email us", value: "meghna.rajawat@fxis.ai" },
      hours: { label: "Visit us", value: ["Monday - Friday", "9AM - 6PM"] },
    },
    formSubjects: ["Product Demo", "Integration Inquiry"],
    formSubmitLabel: "Send Message",
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    heading: "Frequently Asked",
    items: [
      { question: "Is MailPilot free to start with?", answer: "Yes. You can get started for free and upgrade as you grow." },
      { question: "Can I import my subscriber list?", answer: "Absolutely! Import .csv or manually add your subscribers." },
      { question: "Do you offer analytics?", answer: "Yes, real-time performance stats on opens, clicks, and more." },
    ],
  },

  // ── Footer ───────────────────────────────────────────────────────────────
  footer: {
    brandName: "MailPilot",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "meghna.rajawat@fxis.ai", href: "mailto:meghna.rajawat@fxis.ai" },
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Contact Us", href: "#contact" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "GitHub", href: "https://github.com" },
        ],
      },
    ],
    copyright: "\u00a9 2026 MailPilot.",
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },

  // ── Navbar ───────────────────────────────────────────────────────────────
  navbar: {
    brandName: "MailPilot",
    routes: [
      { href: "/#features", label: "Features" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/demo-img.jpg", alt: "MailPilot preview" },
    features: [
      { title: "Simple Campaign Management", description: "Launch, schedule, and manage your email campaigns easily." },
      { title: "Subscriber Lists", description: "Segment and grow your audience for higher engagement." },
      { title: "Analytics Dashboard", description: "Track every send with real-time stats and reporting." },
    ],
    signInLabel: "Log In",
    signUpLabel: "Sign Up",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://nextjs.org/docs", ariaLabel: "View on GitHub" },
  },
};

export const homeContent: HomeContent = defaultHomeContent;

// Keep this function export for backward compatibility with older imports.
// Primary consumers should import `homeContent` directly.
export function getHomeContent(): HomeContent {
  return homeContent;
}