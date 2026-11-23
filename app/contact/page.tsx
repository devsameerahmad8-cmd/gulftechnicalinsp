import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { SocialLinks } from "@/components/SocialLinks";
import { company, telHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Call Gulf Technical Inspection or send a note to the duty desk.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        image="/images/contact-desk.jpg"
        imageAlt="Hands holding a phone at a bright desk"
      />
      <p className="mx-auto max-w-3xl px-4 py-10 text-center text-base leading-7 font-light text-ink sm:px-6 sm:py-14 sm:text-lg sm:leading-8">
        Need a surveyor on site today? Call the duty desk at{" "}
        <a href={telHref(company.phones[0])} className="text-sea">
          {company.phones[0]}
        </a>{" "}
        and we will connect you with the nearest office.
      </p>
      <section className="mx-auto grid max-w-6xl gap-4 overflow-hidden px-4 pb-8 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-0">
        <div className="glass rounded-[1.5rem] p-5 sm:rounded-[2rem] sm:p-12 lg:rounded-r-none">
          <h2 className="text-3xl font-extralight tracking-tight text-ink">We would like to hear from you</h2>
          <p className="mt-3 max-w-md text-sm leading-7 font-light text-muted">
            Call, or send a note through the form. A coordinator replies on the same working day.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
        <aside className="glass rounded-[1.5rem] bg-white/35 p-5 sm:rounded-[2rem] sm:p-12 lg:rounded-l-none lg:border-l-0">
          <h2 className="text-3xl font-extralight tracking-tight text-ink">Our office address</h2>
          <span className="mt-4 block h-px w-12 bg-sand" />
          <h3 className="mt-8 flex items-center gap-2 text-lg font-light text-ink">
            <Icon name="pin" className="h-4 w-4 text-sea" />
            Saudi Arabia office
          </h3>
          <p className="mt-3 text-sm leading-7 font-light text-muted">{company.offices}</p>
          <p className="mt-2 text-sm font-light text-muted">{company.country}</p>
          <h3 className="mt-8 flex items-center gap-2 text-lg font-light text-ink">
            <Icon name="mail" className="h-4 w-4 text-sea" />
            Talk to us
          </h3>
          <p className="mt-3 text-sm font-light text-muted">
            <a href={`mailto:${company.email}`} className="break-all text-sea">
              {company.email}
            </a>
          </p>
          <ul className="mt-4 space-y-2">
            {company.phones.map((phone) => (
              <li key={phone}>
                <a href={telHref(phone)} className="inline-flex items-center gap-2 text-sm font-light text-ink transition hover:text-sea">
                  <Icon name="phone" className="h-4 w-4 text-sea" />
                  {phone}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <SocialLinks />
          </div>
        </aside>
      </section>
    </>
  );
}
