"use client";

import { FormEvent, useState, useTransition } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage(null);

    startTransition(async () => {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const payload = await res.json();
      if (!res.ok) {
        setMessage(payload.error || "Unable to subscribe right now.");
        return;
      }

      setMessage("Subscribed successfully. You'll hear from us when we publish updates.");
      setEmail("");
    });
  };

  return (
    <form className="space-y-3" onSubmit={onSubmit}>
      <label className="block">
        <span className="mb-2.5 block text-sm font-medium text-slate-200">Email address</span>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Input
            required
            autoComplete="email"
            className="h-[52px] rounded-[1.05rem] border-white/10 bg-slate-950/75 text-[15px] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] focus:border-cyan-300/40 focus:bg-slate-950/80 focus:ring-4 focus:ring-cyan-300/10 sm:flex-1"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Button
            disabled={isPending}
            type="submit"
            className="h-[52px] rounded-[1.05rem] bg-white px-5 text-slate-950 shadow-[0_12px_40px_rgba(255,255,255,0.14)] hover:-translate-y-0.5 hover:bg-cyan-50"
          >
            {isPending ? "Joining..." : "Join Newsletter"}
          </Button>
        </div>
      </label>
      {message ? <p className="text-sm leading-7 text-slate-300">{message}</p> : null}
    </form>
  );
}
