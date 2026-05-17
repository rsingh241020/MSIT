import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { jobs } from "@/data/site";

export function CareersPreviewSection() {
  return (
    <section id="careers" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/6 p-8 shadow-card backdrop-blur-2xl sm:p-10">
        <SectionHeading
          eyebrow="Careers"
          title="Join a team building modern digital systems with intention."
          description="We’re hiring engineers and designers who care about quality, product thinking, and collaborative execution."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {jobs.slice(0, 4).map((job) => (
            <div key={job.title} className="rounded-[1.5rem] border border-white/10 bg-slate-950/55 p-5">
              <h3 className="font-heading text-xl text-white">{job.title}</h3>
              <p className="mt-3 text-sm text-slate-400">
                {job.type} • {job.location} • {job.experience}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Button asChild size="lg">
            <Link href="/careers">
              Explore Careers
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
