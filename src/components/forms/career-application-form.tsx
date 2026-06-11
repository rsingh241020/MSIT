"use client";

import { FormEvent, useState, useTransition } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  position: "",
  experience: "",
  portfolio: "",
  coverLetter: "",
};

export function CareerApplicationForm() {
  const [formData, setFormData] = useState(initialState);
  const [message, setMessage] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage(null);

    startTransition(async () => {
      try {
        const res = await fetch("/api/careers", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const payload = await res.json().catch(() => null);
        if (!res.ok) {
          setMessage(payload?.error || "Unable to submit your application.");
          return;
        }

        setMessage("Application submitted successfully. We'll review it and reach out soon.");
        setFormData(initialState);
      } catch {
        setMessage("Unable to submit your application right now. Please try again in a moment.");
      }
    });
  };

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <Input
          required
          autoComplete="name"
          placeholder="Full name"
          value={formData.fullName}
          onChange={(event) => setFormData((prev) => ({ ...prev, fullName: event.target.value }))}
        />
        <Input
          required
          autoComplete="email"
          placeholder="Email address"
          type="email"
          value={formData.email}
          onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
        />
        <Input
          required
          autoComplete="tel"
          placeholder="Phone number"
          value={formData.phone}
          onChange={(event) => setFormData((prev) => ({ ...prev, phone: event.target.value }))}
        />
        <Input
          required
          placeholder="Position"
          value={formData.position}
          onChange={(event) => setFormData((prev) => ({ ...prev, position: event.target.value }))}
        />
        <Input
          required
          placeholder="Experience"
          value={formData.experience}
          onChange={(event) => setFormData((prev) => ({ ...prev, experience: event.target.value }))}
        />
        <Input
          type="url"
          placeholder="Portfolio or LinkedIn URL"
          value={formData.portfolio}
          onChange={(event) => setFormData((prev) => ({ ...prev, portfolio: event.target.value }))}
        />
      </div>
      <Textarea
        required
        placeholder="Share your background, strengths, and why you'd like to work with MSIT Systems."
        value={formData.coverLetter}
        onChange={(event) => setFormData((prev) => ({ ...prev, coverLetter: event.target.value }))}
      />
      <div className="flex flex-col gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
        <Button disabled={isPending} type="submit">
          {isPending ? "Submitting..." : "Apply Now"}
        </Button>
        {message ? <p className="max-w-md text-sm text-slate-300">{message}</p> : null}
      </div>
    </form>
  );
}
