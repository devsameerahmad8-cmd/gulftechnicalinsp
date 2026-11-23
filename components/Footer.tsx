import Link from "next/link";
import { company, overviewLinks, serviceLinks, telHref } from "@/lib/site";
import { Icon } from "./Icons";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="mt-16 w-full border-t border-white/70 bg-white/55 backdrop-blur-xl">
      <div className="w-full px-4 py-10 sm:px-8 sm:py-12 lg:px-16">
        <div className="grid w-full gap-8 sm:grid-cols-2 xl:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-7 font-light text-muted">{company.summary}</p>
          </div>
          <div>
            <h2 className="text-sm font-light tracking-[0.22em] text-ink uppercase">Overview</h2>
            <ul className="mt-4 space-y-2">
              {overviewLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm font-light text-muted transition hover:text-sea">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-light tracking-[0.22em] text-ink uppercase">Services</h2>
            <ul className="mt-4 space-y-2">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm font-light text-muted transition hover:text-sea">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-light tracking-[0.22em] text-ink uppercase">Contacts</h2>
            <ul className="mt-4 space-y-3 text-sm font-light text-muted">
              <li className="flex gap-3">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-sea" />
                <span>
                  {company.offices}
                  <span className="mt-1 block">{company.country}</span>
                </span>
              </li>
              {company.phones.map((phone) => (
                <li key={phone}>
                  <a href={telHref(phone)} className="inline-flex items-center gap-3 transition hover:text-sea">
                    <Icon name="phone" className="h-4 w-4 shrink-0 text-sea" />
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${company.email}`} className="inline-flex max-w-full items-center gap-3 break-all transition hover:text-sea">
                  <Icon name="mail" className="h-4 w-4 shrink-0 text-sea" />
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start gap-6 border-t border-white/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <SocialLinks />
          <div className="flex flex-wrap gap-2">
            {["ISO 9001", "ISO 14001", "ISO 45001"].map((mark) => (
              <span
                key={mark}
                className="rounded-full border border-white/80 bg-white/40 px-3 py-1 text-[11px] font-light tracking-[0.18em] text-sea uppercase"
              >
                {mark}
              </span>
            ))}
          </div>
        </div>
        <p className="mt-6 text-center text-xs font-light tracking-wide text-[#7d93a0]">
          Copyright © 2026 Gulf Technical Inspection. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
