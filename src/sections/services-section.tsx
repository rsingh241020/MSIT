import { ArrowUpRight } from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";
import { serviceCards } from "@/data/site";

export function ServicesSection() {
  return (
    <section id="services" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="Technology capabilities for ambitious teams and enterprise programs."
          description="We design and build modern digital systems that combine elegant interfaces, resilient architecture, AI capability, and reliable delivery operations."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {serviceCards.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-card backdrop-blur-2xl transition hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-cyan-300/0 to-blue-500/0 transition duration-500 group-hover:from-cyan-300/10 group-hover:via-transparent group-hover:to-blue-500/10" />
              <div className="relative">
                <div className="inline-flex rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-100">
                  <service.icon className="h-6 w-6" />
                </div>
                <div className="mt-6 flex items-start justify-between gap-4">
                  <h3 className="font-heading text-xl text-white">{service.title}</h3>
                  <ArrowUpRight className="h-5 w-5 text-slate-400 transition group-hover:text-cyan-200" />
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
