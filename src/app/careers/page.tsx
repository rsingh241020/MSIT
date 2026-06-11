import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, MapPin, Sparkles } from "lucide-react";

import { CareerApplicationForm } from "@/components/forms/career-application-form";
import { SiteFooter } from "@/components/shared/site-footer";
import { SiteNavbar } from "@/components/shared/site-navbar";
import { SiteShell } from "@/components/shared/site-shell";
import { Button } from "@/components/ui/button";
import { jobs } from "@/data/site";

export default function CareersPage() {
  return (
    <SiteShell>
      <SiteNavbar />
      <main className="px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <section className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.92),rgba(2,6,23,0.84))] p-8 shadow-[0_30px_120px_rgba(2,6,23,0.5)] backdrop-blur-2xl sm:p-10 lg:p-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-cyan-100">
                <Sparkles className="h-3.5 w-3.5" />
                Careers at MSIT
              </div>
              <h1 className="mt-6 font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Build digital products that move real businesses forward.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                We work on enterprise software, AI systems, SaaS platforms, and cloud
                modernization. If you care about product thinking and clean execution, we&apos;d
                love to hear from you.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="#apply">
                    Apply Now
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/#contact">Talk to Our Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-10 max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-card backdrop-blur-2xl sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-100">
                  <BriefcaseBusiness className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Open roles</p>
                  <p className="text-sm text-slate-400">Current opportunities across engineering and design.</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {jobs.map((job) => (
                  <div
                    key={job.title}
                    className="rounded-[1.5rem] border border-white/10 bg-slate-950/55 p-5"
                  >
                    <h2 className="font-heading text-xl text-white">{job.title}</h2>
                    <div className="mt-3 flex flex-wrap gap-2 text-sm text-slate-300">
                      <span className="rounded-full border border-white/10 px-3 py-1">
                        {job.type}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {job.location}
                      </span>
                      <span className="rounded-full border border-white/10 px-3 py-1">
                        {job.experience}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <section
              id="apply"
              className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(16,24,43,0.92),rgba(5,11,23,0.84))] p-6 shadow-[0_30px_120px_rgba(2,6,23,0.45)] backdrop-blur-2xl sm:p-8"
            >
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-cyan-200">
                Application form
              </p>
              <h2 className="mt-4 font-heading text-3xl text-white">
                Share your background and the role you&apos;re aiming for.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                This form is stored in MongoDB Atlas through your existing API route, so every
                application goes straight into the same backend flow you&apos;re already using.
              </p>
              <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 sm:p-6">
                <CareerApplicationForm />
              </div>
            </section>
          </div>
        </section>
      </main>
      <SiteFooter />
    </SiteShell>
  );
}
