import { SectionHeading } from "@/components/ui/section-heading";
import { technologies } from "@/data/site";

const technologyDescriptions: Record<string, string> = {
  Frontend: "Fast interfaces and polished product experiences for modern web platforms.",
  Backend: "Reliable application logic, APIs, and enterprise-grade service architecture.",
  Database: "Structured, scalable data layers built for performance and business continuity.",
  DevOps: "Deployment automation, cloud operations, and resilient delivery pipelines.",
};

export function TechnologiesSection() {
  return (
    <section id="technologies" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Technology Stack"
          title="Modern tools, proven frameworks, and scalable delivery foundations."
          description="Our engineering teams work across contemporary frontend, backend, database, and DevOps ecosystems to deliver high-performance digital products."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {Object.entries(technologies).map(([group, items]) => (
            <div
              key={group}
              className="flex h-full flex-col rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-card backdrop-blur-2xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-cyan-200">Core Layer</p>
                  <p className="mt-3 font-heading text-2xl text-white">{group}</p>
                </div>
                <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-sm text-cyan-100">
                  {items.length} tools
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {technologyDescriptions[group]}
              </p>
              <div className="mt-6 flex flex-1 flex-wrap content-start gap-3">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
