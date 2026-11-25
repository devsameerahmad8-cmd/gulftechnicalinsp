"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { aboutLinks, overviewLinks, serviceLinks } from "@/lib/site";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const linkClass = (href: string) =>
    `text-sm font-light tracking-wide transition ${
      isCurrent(pathname, href)
        ? "text-sea underline decoration-sand decoration-1 underline-offset-8"
        : "text-[#3d5562] hover:text-sea"
    }`;

  return (
    <header className="sticky top-0 z-40">
      <div className="border-b border-white/60 bg-white/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl justify-end px-4 py-2 sm:px-6">
          <SocialLinks />
        </div>
      </div>
      <div className="border-b border-white/70 bg-white/55 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:gap-6 sm:px-6 sm:py-4">
          <Logo />
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>
            <div className="group relative">
              <Link href="/about" className={linkClass("/about")}>
                About Us
                <span className="ml-1 text-[10px] text-sand">▾</span>
              </Link>
              <div className="invisible absolute top-full left-1/2 z-20 w-48 -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <div className="glass rounded-2xl p-2">
                  {aboutLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-xl px-3 py-2 text-sm font-light text-[#3d5562] hover:bg-white/70 hover:text-sea"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="group relative">
              <Link href="/services" className={linkClass("/services")}>
                Services
                <span className="ml-1 text-[10px] text-sand">▾</span>
              </Link>
              <div className="invisible absolute top-full left-1/2 z-20 w-80 -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <div className="glass rounded-2xl p-2">
                  {serviceLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-xl px-3 py-2 text-sm font-light text-[#3d5562] hover:bg-white/70 hover:text-sea"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/contact" className={linkClass("/contact")}>
              Contact Us
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/verification"
              className="hidden rounded-full border border-white/80 bg-white/70 px-5 py-2 text-sm font-light text-sea shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white lg:inline-flex"
            >
              Verification
            </Link>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/80 bg-white/70 text-sea transition hover:bg-white lg:hidden"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              <span className="text-lg leading-none">{open ? "×" : "☰"}</span>
            </button>
          </div>
        </div>
        {open ? (
          <nav className="menu-panel border-t border-white/60 bg-white/70 px-4 py-4 backdrop-blur-2xl sm:px-6 lg:hidden" aria-label="Mobile">
            <div className="mx-auto flex max-w-6xl flex-col gap-1">
              {overviewLinks.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-xl px-3 py-3 text-sm font-light text-ink hover:bg-white/80">
                  {item.label}
                </Link>
              ))}
              <p className="mt-3 px-3 text-[10px] font-light tracking-[0.28em] text-[#7d93a0] uppercase">About</p>
              {aboutLinks.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-xl px-3 py-3 text-sm font-light text-[#3d5562] hover:bg-white/80">
                  {item.label}
                </Link>
              ))}
              <p className="mt-3 px-3 text-[10px] font-light tracking-[0.28em] text-[#7d93a0] uppercase">Services</p>
              {serviceLinks.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-xl px-3 py-3 text-sm font-light text-[#3d5562] hover:bg-white/80">
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
