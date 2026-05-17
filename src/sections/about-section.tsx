import { CheckCheck } from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";
import { stats } from "@/data/site";

const pillars = [
  {
    title: "Mission",
    description: "Empower businesses with scalable software, elegant experiences, and transformative technology execution.",
  },
  {
    title: "Vision",
    description: "Become a trusted digital innovation partner for ambitious organizations across industries.",
  },
  {
    title: "Values",
    description: "Clarity, ownership, modern engineering standards, and long-term partnership thinking.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About MSIT"
          title="Built for digital transformation, engineered for long-term scale."
          description="MSIT Systems Pvt. Ltd. is a modern IT and software solutions company specializing in scalable web applications, enterprise software, AI-powered systems, digital transformation, cloud solutions, and full-stack development."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/6 p-8 shadow-card backdrop-blur-2xl">
            <div className="grid gap-5 md:grid-cols-3">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="rounded-3xl border border-white/10 bg-slate-950/55 p-5">
                  <div className="flex items-center gap-3">
                    <CheckCheck className="h-5 w-5 text-cyan-200" />
                    <h3 className="font-heading text-xl text-white">{pillar.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.75rem] border border-cyan-300/15 bg-gradient-to-br from-cyan-300/12 to-white/5 p-6 backdrop-blur-xl"
              >
                <p className="font-heading text-4xl text-white">{stat.value}</p>
                <p className="mt-3 text-sm text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
