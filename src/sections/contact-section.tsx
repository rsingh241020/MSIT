"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Mail,
  MapPin,
  MessageCircleMore,
  Phone,
  Sparkles,
} from "lucide-react";

import { ContactForm } from "@/components/forms/contact-form";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { contactDetails } from "@/data/site";

const contactItems = [
  {
    icon: MapPin,
    label: "Office",
    value: contactDetails.address,
    href:
      "https://maps.google.com/?q=Safitola%2C+Narayanpur%2C+Rahampur%2C+Basant%2C+Saran%2C+Bihar+841202",
    cta: "Open in Maps",
  },
  {
    icon: Mail,
    label: "Email",
    value: contactDetails.email,
    href: `mailto:${contactDetails.email}`,
    cta: "Send an Email",
  },
  {
    icon: Phone,
    label: "Phone",
    value: contactDetails.phones.join(" / "),
    href: `tel:${contactDetails.phones[0].replace(/\s+/g, "")}`,
    cta: "Call Our Team",
  },
];

const topPills = [
  "Enterprise software",
  "AI products",
  "Cloud modernization",
  "Digital transformation",
];

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_32%)]" />
      <div className="absolute inset-0 -z-10 bg-grid bg-[size:84px_84px] opacity-[0.05]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/18 bg-cyan-300/8 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-cyan-100 backdrop-blur-xl">
            <Sparkles className="h-3.5 w-3.5" />
            Contact
          </div>
          <h2 className="mt-6 font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Let&apos;s build what&apos;s next together.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
            Share your goals, product roadmap, or modernization challenge. We&apos;ll help define
            the right execution path with the speed and polish of a premium engineering partner.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(16,24,43,0.92),rgba(5,11,23,0.84))] p-6 shadow-[0_30px_120px_rgba(2,6,23,0.55)] backdrop-blur-2xl sm:p-8 lg:p-10"
        >
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent" />
          <div className="absolute left-0 top-0 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
            <div className="relative flex flex-col justify-between rounded-[1.75rem] border border-white/10 bg-[linear-gradient(145deg,rgba(34,211,238,0.12),rgba(37,99,235,0.08))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-cyan-200">
                  Start a conversation
                </p>
                <h3 className="mt-4 font-heading text-3xl text-white sm:text-[2rem]">
                  Tell us what you&apos;re building and where you need momentum.
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                  We support enterprise software, AI systems, SaaS platforms, cloud
                  modernization, and digital transformation programs that need sharp execution.
                </p>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {topPills.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-xs uppercase tracking-[0.14em] text-slate-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.35rem] border border-white/10 bg-slate-950/50 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">Response</p>
                  <p className="mt-3 font-heading text-2xl text-white">24h</p>
                  <p className="mt-2 text-sm text-slate-400">Business-day reply target</p>
                </div>
                <div className="rounded-[1.35rem] border border-white/10 bg-slate-950/50 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">Delivery</p>
                  <p className="mt-3 font-heading text-2xl text-white">150+</p>
                  <p className="mt-2 text-sm text-slate-400">Projects and engagements</p>
                </div>
                <div className="rounded-[1.35rem] border border-white/10 bg-slate-950/50 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">Focus</p>
                  <p className="mt-3 font-heading text-2xl text-white">AI + SaaS</p>
                  <p className="mt-2 text-sm text-slate-400">Built for modern scale</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-6">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-white">Project inquiry form</p>
                  <p className="mt-1 text-sm text-slate-400">
                    Clear details help us recommend the right next step faster.
                  </p>
                </div>
                <div className="hidden rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-emerald-200 sm:block">
                  Replies within 1 business day
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.9),rgba(2,6,23,0.72))] p-6 shadow-[0_30px_120px_rgba(2,6,23,0.45)] backdrop-blur-2xl sm:p-8"
        >
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent" />
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-400/12 blur-3xl" />

          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/18 bg-cyan-300/10 text-cyan-100">
              <Building2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-cyan-200">
                Reach our team
              </p>
              <h3 className="mt-3 font-heading text-2xl text-white sm:text-3xl">
                Speak with the team, visit the office, or stay connected.
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
                Use the details below if you want to reach us directly, review our location, or
                stay updated on product notes and company announcements.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {contactItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: 0.08 * index, duration: 0.55, ease: "easeOut" }}
                className="group rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5 transition duration-300 hover:border-cyan-300/28 hover:bg-white/[0.075] hover:shadow-[0_24px_80px_rgba(34,211,238,0.08)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/80 text-cyan-100 transition group-hover:border-cyan-300/25 group-hover:bg-cyan-300/10">
                    <item.icon className="h-[18px] w-[18px]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">{item.label}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-200">{item.value}</p>
                    <Link
                      href={item.href}
                      target="_blank"
                      className="mt-4 inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
                    >
                      {item.cta}
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.12, duration: 0.55, ease: "easeOut" }}
              className="flex min-h-[300px] flex-col justify-between rounded-[1.75rem] border border-white/10 bg-[linear-gradient(145deg,rgba(12,18,36,0.88),rgba(10,41,63,0.82))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Google Map</p>
                  <p className="mt-2 text-sm text-slate-300">
                    Visit our office or share your preferred collaboration mode.
                  </p>
                </div>
                <Link
                  href="https://maps.google.com/?q=Safitola%2C+Narayanpur%2C+Rahampur%2C+Basant%2C+Saran%2C+Bihar+841202"
                  target="_blank"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-white"
                  aria-label="Open office location in Google Maps"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="relative mt-6 flex flex-1 items-end overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_15%_20%,rgba(103,232,249,0.18),transparent_24%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.18),transparent_22%),linear-gradient(180deg,rgba(13,22,42,0.94),rgba(6,13,28,0.88))] p-5">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:34px_34px] opacity-40" />
                <div className="relative w-full rounded-[1.35rem] border border-white/10 bg-slate-950/65 p-4 backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(74,222,128,0.9)]" />
                    <p className="text-sm font-medium text-white">{contactDetails.company}</p>
                  </div>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-slate-300">
                    {contactDetails.address}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.18, duration: 0.55, ease: "easeOut" }}
              className="flex min-h-[300px] flex-col rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-5"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Stay updated</p>
              <h4 className="mt-3 font-heading text-xl text-white">
                Product notes, insight drops, and company updates.
              </h4>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Join a concise newsletter for thoughtful updates, not noisy blasts.
              </p>
              <div className="mt-5 flex-1">
                <NewsletterForm />
              </div>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {contactDetails.socialLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-slate-200 transition hover:border-cyan-300/22 hover:bg-cyan-300/10 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href={contactDetails.whatsapp}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2.5 text-sm font-medium text-cyan-100 transition hover:border-cyan-300/35 hover:bg-cyan-300/16"
                >
                  <MessageCircleMore className="h-4 w-4" />
                  WhatsApp
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-medium text-slate-100 transition hover:border-cyan-300/25 hover:bg-cyan-300/10 hover:text-white"
            >
              Back to Conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
