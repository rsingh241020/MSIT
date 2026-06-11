"use client";

import { FormEvent, useState, useTransition } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const initialState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [response, setResponse] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResponse(null);

    startTransition(async () => {
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const payload = await res.json().catch(() => null);
        if (!res.ok) {
          setResponse(payload?.error || "Unable to send your message right now.");
          return;
        }

        setResponse(
          "Your message has been received. Our team will connect with you shortly.",
        );
        setFormData(initialState);
      } catch {
        setResponse("Unable to send your message right now. Please try again in a moment.");
      }
    });
  };

  return (
    <form className="space-y-5" onSubmit={onSubmit}>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="mb-2.5 block text-sm font-medium text-slate-200">
            Your name
          </span>
          <Input
            required
            autoComplete="name"
            placeholder="Your name"
            className="h-14 rounded-[1.15rem] border-white/10 bg-slate-950/70 px-4 text-[15px] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] focus:border-cyan-300/40 focus:bg-slate-950/80 focus:ring-4 focus:ring-cyan-300/10"
            value={formData.name}
            onChange={(event) =>
              setFormData((prev) => ({ ...prev, name: event.target.value }))
            }
          />
        </label>

        <label className="block">
          <span className="mb-2.5 block text-sm font-medium text-slate-200">
            Work email
          </span>
          <Input
            required
            autoComplete="email"
            placeholder="you@company.com"
            type="email"
            className="h-14 rounded-[1.15rem] border-white/10 bg-slate-950/70 px-4 text-[15px] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] focus:border-cyan-300/40 focus:bg-slate-950/80 focus:ring-4 focus:ring-cyan-300/10"
            value={formData.email}
            onChange={(event) =>
              setFormData((prev) => ({ ...prev, email: event.target.value }))
            }
          />
        </label>

        <label className="block">
          <span className="mb-2.5 block text-sm font-medium text-slate-200">
            Phone number
          </span>
          <Input
            required
            autoComplete="tel"
            placeholder="+91 0000000000"
            className="h-14 rounded-[1.15rem] border-white/10 bg-slate-950/70 px-4 text-[15px] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] focus:border-cyan-300/40 focus:bg-slate-950/80 focus:ring-4 focus:ring-cyan-300/10"
            value={formData.phone}
            onChange={(event) =>
              setFormData((prev) => ({ ...prev, phone: event.target.value }))
            }
          />
        </label>

        <label className="block">
          <span className="mb-2.5 block text-sm font-medium text-slate-200">
            Company name
          </span>
          <Input
            required
            autoComplete="organization"
            placeholder="Company name"
            className="h-14 rounded-[1.15rem] border-white/10 bg-slate-950/70 px-4 text-[15px] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] focus:border-cyan-300/40 focus:bg-slate-950/80 focus:ring-4 focus:ring-cyan-300/10"
            value={formData.company}
            onChange={(event) =>
              setFormData((prev) => ({ ...prev, company: event.target.value }))
            }
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-2.5 block text-sm font-medium text-slate-200">
          Interested service
        </span>
        <div className="relative">
          <select
            required
            value={formData.service}
            onChange={(event) =>
              setFormData((prev) => ({ ...prev, service: event.target.value }))
            }
            className="flex h-14 w-full appearance-none rounded-[1.15rem] border border-white/10 bg-slate-950/70 px-4 pr-12 text-[15px] text-white outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition focus:border-cyan-300/40 focus:bg-slate-950/80 focus:ring-4 focus:ring-cyan-300/10"
          >
            <option value="" disabled className="bg-slate-950 text-slate-400">
              Select a service
            </option>
            <option value="Enterprise Software" className="bg-slate-950">
              Enterprise Software
            </option>
            <option value="AI Products" className="bg-slate-950">
              AI Products
            </option>
            <option value="SaaS Platform" className="bg-slate-950">
              SaaS Platform
            </option>
            <option value="Cloud Modernization" className="bg-slate-950">
              Cloud Modernization
            </option>
            <option value="Digital Transformation" className="bg-slate-950">
              Digital Transformation
            </option>
            <option value="Other" className="bg-slate-950">
              Other
            </option>
          </select>
          <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-400">
            &#9662;
          </span>
        </div>
      </label>

      <label className="block">
        <span className="mb-2.5 block text-sm font-medium text-slate-200">
          Project brief
        </span>
        <Textarea
          required
          placeholder="Tell us about your goals, current bottlenecks, expected timelines, and what a successful outcome looks like."
          className="min-h-[170px] rounded-[1.4rem] border-white/10 bg-slate-950/70 px-4 py-4 text-[15px] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] focus:border-cyan-300/40 focus:bg-slate-950/80 focus:ring-4 focus:ring-cyan-300/10"
          value={formData.message}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, message: event.target.value }))
          }
        />
      </label>

      <div className="flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <Button
          disabled={isPending}
          type="submit"
          className="h-14 rounded-[1.15rem] bg-[linear-gradient(135deg,#67e8f9_0%,#38bdf8_45%,#2563eb_100%)] px-7 text-[15px] font-semibold text-slate-950 shadow-[0_18px_60px_rgba(34,211,238,0.28)] hover:-translate-y-0.5 hover:shadow-[0_24px_80px_rgba(34,211,238,0.34)]"
        >
          {isPending ? "Sending..." : "Send Inquiry"}
        </Button>

        {response ? (
          <p
            className="max-w-md text-sm leading-7 text-slate-300"
            role="status"
          >
            {response}
          </p>
        ) : (
          <p className="max-w-md text-sm leading-7 text-slate-400">
            We typically respond with next steps, timing, and fit within one
            business day.
          </p>
        )}
      </div>
    </form>
  );
}
