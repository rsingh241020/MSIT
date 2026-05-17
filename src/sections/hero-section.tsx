import Link from "next/link";
import { ArrowRight, Bot, Cloud, Shield, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const floatingCards = [
  { icon: Bot, label: "AI Systems", position: "left-0 top-16" },
  { icon: Cloud, label: "Cloud Native", position: "right-0 top-6" },
  { icon: Shield, label: "Secure Delivery", position: "right-10 bottom-10" },
];

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative">
          <div>
            <Badge>Enterprise Technology Partner</Badge>
          </div>
          <h1 className="mt-8 max-w-4xl font-heading text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            We Build Scalable <span className="bg-gradient-to-r from-cyan-200 to-blue-400 bg-clip-text text-transparent">Digital Solutions</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Enterprise software, AI-powered products, cloud-native applications, and full-stack solutions for modern businesses.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="#contact">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="#contact">Schedule Consultation</Link>
            </Button>
          </div>
          <div className="mt-12 grid max-w-2xl gap-4 sm:grid-cols-3">
            {["AI-first delivery", "Cloud-ready systems", "Enterprise UX"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/6 px-4 py-4 text-sm text-slate-200 backdrop-blur-xl"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[520px]">
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/20 via-blue-500/12 to-transparent blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-6 shadow-card backdrop-blur-2xl">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-cyan-200">MSIT Intelligence Layer</p>
                  <p className="mt-2 font-heading text-2xl text-white">Futuristic delivery dashboards for modern enterprises</p>
                </div>
                <Sparkles className="h-10 w-10 text-cyan-200" />
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl border border-cyan-300/15 bg-gradient-to-br from-cyan-400/15 to-blue-500/5 p-5">
                  <p className="text-sm text-slate-400">Deployment Velocity</p>
                  <p className="mt-2 font-heading text-4xl text-white">98%</p>
                  <div className="mt-6 h-2 rounded-full bg-white/8">
                    <div className="h-2 w-[82%] rounded-full bg-gradient-to-r from-cyan-300 to-blue-500" />
                  </div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-slate-400">AI Automation Coverage</p>
                  <p className="mt-2 font-heading text-4xl text-white">74%</p>
                  <div className="mt-6 grid grid-cols-6 gap-2">
                    {Array.from({ length: 12 }, (_, index) => (
                      <span
                        key={index}
                        className={`h-8 rounded-xl ${index % 3 === 0 ? "bg-cyan-300/80" : "bg-white/10"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-3xl border border-white/10 bg-white/4 p-5">
                <p className="text-sm text-slate-400">Cross-functional alignment</p>
                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  {["Product Systems", "Cloud Operations", "Security Reviews"].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-sm text-slate-200">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {floatingCards.map((card, index) => (
              <div
                key={card.label}
                className={`animate-float absolute ${card.position} hidden rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white shadow-card backdrop-blur-xl md:flex md:items-center md:gap-3`}
                style={{
                  animationDuration: `${6 + index}s`,
                }}
              >
                <card.icon className="h-4 w-4 text-cyan-200" />
                {card.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
