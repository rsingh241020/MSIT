import {
  ArrowRight,
  Blocks,
  Bot,
  BriefcaseBusiness,
  CloudCog,
  Cpu,
  LayoutDashboard,
  Palette,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Technologies", href: "#technologies" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "#contact" },
];

export const serviceCards = [
  {
    title: "Web Development",
    description: "Fast, immersive websites and platforms engineered for conversion, scale, and brand authority.",
    icon: LayoutDashboard,
  },
  {
    title: "Full Stack Development",
    description: "Robust applications spanning product strategy, frontend systems, backend logic, and APIs.",
    icon: Workflow,
  },
  {
    title: "AI Solutions",
    description: "Intelligent copilots, automation flows, analytics engines, and AI-first digital products.",
    icon: Bot,
  },
  {
    title: "Cloud & DevOps",
    description: "Cloud-native deployment pipelines, observability, infrastructure automation, and CI/CD delivery.",
    icon: CloudCog,
  },
  {
    title: "Enterprise Software",
    description: "Business-critical internal systems, ERP workflows, secure data layers, and integration platforms.",
    icon: ServerCog,
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform mobile experiences with clean architecture, resilient APIs, and polished UX.",
    icon: Smartphone,
  },
  {
    title: "UI/UX Design",
    description: "Human-centered product interfaces with design systems, prototypes, and enterprise consistency.",
    icon: Palette,
  },
  {
    title: "SaaS Development",
    description: "Subscription-ready platforms with tenant-aware architecture, billing flows, and growth analytics.",
    icon: Blocks,
  },
];

export const technologies = {
  Frontend: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  Backend: ["Node.js", "Express.js", "Spring Boot"],
  Database: ["MongoDB", "PostgreSQL"],
  DevOps: ["Docker", "AWS", "GitHub Actions"],
};

export const portfolioItems = [
  {
    title: "Smart Management System",
    description: "A multi-role operations suite for workflow orchestration, approvals, and real-time team visibility.",
    stack: ["Next.js", "MongoDB", "Framer Motion"],
    cta: "https://www.msitcomputer.com",
    imageLabel: "Operational intelligence interface",
  },
  {
    title: "AI Dashboard",
    description: "An executive analytics cockpit blending predictive insights, KPI intelligence, and anomaly detection.",
    stack: ["React", "Node.js", "Open APIs"],
    cta: "https://www.msitcomputer.com",
    imageLabel: "Predictive analytics command center",
  },
  {
    title: "ERP Platform",
    description: "A unified enterprise platform covering departments, data governance, and digital transformation flows.",
    stack: ["TypeScript", "PostgreSQL", "AWS"],
    cta: "https://www.msitcomputer.com",
    imageLabel: "Enterprise platform workspace",
  },
  {
    title: "Business Analytics System",
    description: "A data-rich decision platform built for reporting automation, insights delivery, and leadership visibility.",
    stack: ["Next.js", "MongoDB", "Docker"],
    cta: "https://www.msitcomputer.com",
    imageLabel: "Business analytics visualization",
  },
];

export const whyChooseUs = [
  {
    title: "Scalable Architecture",
    description: "Solutions designed to grow with your users, teams, and data footprint.",
    icon: Cpu,
  },
  {
    title: "Secure Systems",
    description: "Security-first engineering with trusted practices across code, cloud, and operations.",
    icon: ShieldCheck,
  },
  {
    title: "AI Integration",
    description: "Practical AI capabilities embedded into workflows where they create measurable impact.",
    icon: Sparkles,
  },
  {
    title: "Cloud Ready",
    description: "Deployment-ready products optimized for resilience, uptime, and observability.",
    icon: Wrench,
  },
  {
    title: "Fast Delivery",
    description: "Lean execution with clarity, velocity, and enterprise-level quality control.",
    icon: Zap,
  },
  {
    title: "Dedicated Support",
    description: "Reliable collaboration beyond launch with proactive communication and iteration.",
    icon: BriefcaseBusiness,
  },
];

export const testimonials = [
  {
    quote:
      "MSIT Systems brought structure, speed, and product clarity to our transformation roadmap. Their delivery felt enterprise-grade from day one.",
    name: "Amit Sharma",
    role: "COO, FinEdge Advisory",
  },
  {
    quote:
      "The team delivered a modern analytics platform with exceptional UX and dependable engineering discipline. We saw adoption immediately.",
    name: "Priya Nair",
    role: "VP Product, Quantara Labs",
  },
  {
    quote:
      "From strategy to launch, they operated like a high-caliber technology partner, not just a vendor. Communication and quality were excellent.",
    name: "Rahul Verma",
    role: "Director, Vertex Operations",
  },
];

export const jobs = [
  {
    title: "Senior Full Stack Developer",
    type: "Full Time",
    location: "Remote / Bihar",
    experience: "4+ Years",
  },
  {
    title: "UI/UX Product Designer",
    type: "Full Time",
    location: "Remote",
    experience: "3+ Years",
  },
  {
    title: "Cloud & DevOps Engineer",
    type: "Full Time",
    location: "Hybrid",
    experience: "3+ Years",
  },
  {
    title: "AI Engineer",
    type: "Full Time",
    location: "Remote",
    experience: "2+ Years",
  },
];

export const stats = [
  { label: "Projects Delivered", value: "120+" },
  { label: "Clients", value: "60+" },
  { label: "Team Members", value: "25+" },
  { label: "Technologies", value: "40+" },
];

export const contactDetails = {
  company: "MSIT Systems Pvt. Ltd.",
  tagline: "Transforming Businesses Through Technology",
  email: "info@msitcomputer.com",
  phones: ["+91 9939115450", "+91 7903755531"],
  address: "Safitola, Narayanpur, Rahampur, Basant, Saran, Bihar, 841202",
  cin: "U72900BR2017PTC033808",
  registeredUnder: "Ministry of Corporate Affairs, Government of India",
  whatsapp: "https://wa.me/919939115450",
  socialLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com" },
    { label: "X", href: "https://x.com" },
    { label: "GitHub", href: "https://github.com" },
  ],
};

export const footerLinks = {
  quickLinks: navigation.filter((item) => item.href.startsWith("#")),
  services: serviceCards.slice(0, 6).map((service) => ({
    label: service.title,
    href: "#services",
  })),
  action: {
    label: "Schedule Consultation",
    href: "#contact",
    icon: ArrowRight,
  },
};
