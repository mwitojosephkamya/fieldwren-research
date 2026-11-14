"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import { nav, whatsappLink } from "@/config/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="container-x flex items-center justify-between py-3">
        <Link href="/" aria-label="Fieldwren Research home" onClick={() => setOpen(false)}>
          <Logo className="h-9 sm:h-11" />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm font-semibold text-ink hover:text-blue">
              {n.label}
            </Link>
          ))}
          <a
            href={whatsappLink("Hello Fieldwren Research, I would like to discuss a project.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary !py-2"
          >
            Get a quote
          </a>
        </nav>
        <button
          type="button"
          className="rounded-md border border-line p-2 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-white lg:hidden">
          <div className="container-x flex flex-col py-2">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3 font-semibold text-ink last:border-0"
              >
                {n.label}
              </Link>
            ))}
            <a
              href={whatsappLink("Hello Fieldwren Research, I would like to discuss a project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent my-3"
            >
              Get a quote on WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
