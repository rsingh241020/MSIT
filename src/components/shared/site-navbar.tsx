"use client";

import Link from "next/link";
import { Menu, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { navigation } from "@/data/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-slate-950/75 px-5 py-3 shadow-[0_20px_60px_rgba(2,6,23,0.32)] backdrop-blur-2xl transition-all",
          scrolled && "border-cyan-300/20 bg-slate-950/90 shadow-[0_24px_80px_rgba(2,6,23,0.44)]",
        )}
      >
        <Link href="#home" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-blue-600 text-slate-950 shadow-glow ring-1 ring-white/10">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="font-heading text-sm font-semibold tracking-[0.2em] text-white">
              MSIT SYSTEMS
            </p>
            <p className="hidden text-xs text-slate-400 sm:block">
              Transforming Businesses Through Technology
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Button asChild size="sm">
            <Link href="#contact">Get Started</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle navigation"
          className="inline-flex rounded-full border border-white/10 p-2 text-white xl:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/10 bg-slate-950/95 p-5 shadow-[0_20px_60px_rgba(2,6,23,0.4)] backdrop-blur-2xl xl:hidden"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
          >
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-slate-300 transition hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild size="sm">
                <Link href="#contact" onClick={() => setOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
