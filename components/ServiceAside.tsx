import Image from "next/image";
import Link from "next/link";
import { company, serviceLinks, telHref } from "@/lib/site";

export function ServiceAside({ active }: { active: string }) {
  return (
    <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
      <nav className="overflow-hidden rounded-2xl border border-white/80 bg-white/50" aria-label="Services">
        {serviceLinks.map((link) => {
          const current = link.href === active;
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={current ? "page" : undefined}
              className={`block border-l-4 px-5 py-4 text-sm font-light transition ${
                current
                  ? "border-sea bg-white text-sea"
                  : "border-transparent text-ink hover:bg-white/80"
              }`}
            >
              {link.label.replace(" Service", "")}
            </Link>
          );
        })}
      </nav>
      <div className="relative h-44 overflow-hidden rounded-2xl">
        <Image
          src="/images/inspection.jpg"
          alt="A surveyor checking lifting gear"
          fill
          className="object-cover"
          sizes="320px"
        />
      </div>
      <div className="rounded-2xl bg-sea px-6 py-7 text-white">
        <h2 className="text-2xl font-extralight">Need help?</h2>
        <p className="mt-3 text-sm leading-6 font-light text-white/85">
          Write or call. A coordinator replies within 24 hours.
        </p>
        <p className="mt-5 text-sm font-light">
          Email:{" "}
          <a href={`mailto:${company.email}`} className="break-all underline decoration-white/40 underline-offset-4">
            {company.email}
          </a>
        </p>
        <p className="mt-4 text-sm font-light">Mobile:</p>
        <ul className="mt-1 space-y-1">
          {company.phones.slice(0, 2).map((phone) => (
            <li key={phone}>
              <a href={telHref(phone)} className="text-sm font-light underline decoration-white/40 underline-offset-4">
                {phone}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
