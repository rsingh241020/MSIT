import { SectionHeading } from "@/components/ui/section-heading";
import { whyChooseUs } from "@/data/site";

export function WhyChooseUsSection() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A premium execution partner for technology-led business growth."
          description="We combine product thinking, advanced engineering, modern infrastructure, and client partnership to ship systems that last."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {whyChooseUs.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-card backdrop-blur-2xl"
            >
              <div className="inline-flex rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-100">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-heading text-xl text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
