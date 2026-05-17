import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import { contactDetails, footerLinks } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] lg:px-8">
        <div>
          <h3 className="font-heading text-2xl font-semibold text-white">{contactDetails.company}</h3>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-300">{contactDetails.tagline}</p>
          <p className="mt-5 text-sm text-slate-400">{contactDetails.registeredUnder}</p>
          <p className="mt-2 text-xs tracking-[0.2em] text-cyan-200">CIN {contactDetails.cin}</p>
        </div>

        <div>
          <p className="font-heading text-lg text-white">Quick Links</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
            {footerLinks.quickLinks.map((link) => (
              <Link key={link.label} href={link.href} className="transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="font-heading text-lg text-white">Services</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
            {footerLinks.services.map((link) => (
              <Link key={link.label} href={link.href} className="transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="font-heading text-lg text-white">Connect</p>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <p className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-cyan-200" />{contactDetails.address}</p>
            <p className="flex items-center gap-3"><Mail className="h-4 w-4 text-cyan-200" />{contactDetails.email}</p>
            <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-cyan-200" />{contactDetails.phones[0]}</p>
          </div>
          <Link
            href={footerLinks.action.href}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white"
          >
            {footerLinks.action.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
