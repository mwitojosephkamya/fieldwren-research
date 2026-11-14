import Link from "next/link";
import { Logo } from "./Logo";
import { contact, nav, site, whatsappLink } from "@/config/site";

export function Footer() {
  return (
    <footer className="on-dark bg-navy text-blue-100">
      <div className="container-x grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="inline-block rounded-lg bg-white px-3 py-2">
            <Logo className="h-9" />
          </div>
          <p className="mt-4 max-w-xs text-sm">
            Research support, data collection, analysis and training. Based in {site.location}, working with
            clients worldwide.
          </p>
        </div>
        <div>
          <h2 className="text-base !font-sans font-bold">Explore</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-white hover:underline">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/how-to-pay" className="hover:text-white hover:underline">
                How to pay
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-base !font-sans font-bold">Contact</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              WhatsApp:{" "}
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline">
                {contact.whatsappDisplay}
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href={`tel:${contact.phoneLink}`} className="hover:text-white hover:underline">
                {contact.phoneDisplay}
              </a>
            </li>
            <li>
              Email:{" "}
              <a href={`mailto:${contact.email}`} className="break-all hover:text-white hover:underline">
                {contact.email}
              </a>
            </li>
            <li>Location: {site.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="container-x flex flex-col gap-2 py-5 text-xs sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="flex gap-4">
            <Link href="/privacy" className="hover:text-white hover:underline">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white hover:underline">
              Terms
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
