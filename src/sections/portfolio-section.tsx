import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolioItems } from "@/data/site";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected digital products shaped for performance, clarity, and growth."
          description="A snapshot of the kinds of systems we design and deliver for forward-looking organizations."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {portfolioItems.map((project, index) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 shadow-card backdrop-blur-2xl"
            >
              <div className="relative h-64 overflow-hidden border-b border-white/10 bg-gradient-to-br from-cyan-300/15 via-blue-500/10 to-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(103,232,249,0.2),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.24),transparent_32%)]" />
                <div className="absolute inset-8 rounded-[1.75rem] border border-white/10 bg-slate-950/65 p-6">
                  <div className="grid h-full gap-4 md:grid-cols-[0.8fr_1.2fr]">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-4" />
                    <div className="space-y-3">
                      <div className="h-4 w-28 rounded-full bg-cyan-200/60" />
                      <div className="h-20 rounded-3xl bg-white/8" />
                      <div className="grid grid-cols-3 gap-3">
                        {Array.from({ length: 6 }, (_, itemIndex) => (
                          <div
                            key={itemIndex}
                            className={`h-10 rounded-2xl ${itemIndex === index ? "bg-cyan-300/60" : "bg-white/10"}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-heading text-2xl text-white">{project.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
                  </div>
                  <ArrowUpRight className="mt-1 h-5 w-5 text-cyan-200" />
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.16em] text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-7">
                  <Button asChild variant="secondary">
                    <Link href={project.cta} target="_blank">
                      Live Preview
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
