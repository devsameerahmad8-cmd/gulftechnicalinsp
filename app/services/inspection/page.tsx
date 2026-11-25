import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { InspectionQuote } from "@/components/InspectionQuote";
import { PageHero } from "@/components/PageHero";
import { ServiceAside } from "@/components/ServiceAside";
import { inspectionTopics } from "@/lib/inspectionTopics";

export const metadata: Metadata = {
  title: "Inspection",
};

const reasons = [
  "Surveyors who know the rule that applies to the equipment in front of them, including SASO, ASME, LOLER, and PUWER where the specification asks for them.",
  "A planning desk that covers Dammam, Riyadh, Jeddah, and Jubail, so a visit can be set without a long chain of calls.",
  "A written report, and a record that can be checked later on the verification page.",
  "A mobile-plant team for equipment that is on hire and moves from one site to the next.",
];

export default function InspectionPage() {
  return (
    <>
      <PageHero
        title="Inspection"
        kicker="Services"
        image="/images/hero-yard.jpg"
        imageAlt="Surveyor beside heavy equipment"
      />
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[280px_1fr]">
        <ServiceAside active="/services/inspection" />
        <div className="min-w-0 space-y-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-extralight tracking-tight text-ink sm:text-4xl">Inspection services</h2>
              <p className="mt-4 text-sm leading-7 font-light text-muted">
                Gulf Technical Inspection checks equipment that people work under, stand on, or lift with. A visit can cover lifting gear, earthmoving machines, access equipment, industrial doors, pressure systems, ventilation, fall protection, electrical equipment, and building facades.
              </p>
            </div>
            <a
              href="#quote"
              className="inline-flex shrink-0 items-center justify-center rounded-2xl border border-sea/40 px-6 py-4 text-center text-sm font-light tracking-[0.16em] text-sea uppercase sm:h-28 sm:w-36"
            >
              Get a quote
            </a>
          </div>

          <div className="space-y-4 text-sm leading-7 font-light text-muted">
            <p>
              Surveyors work across Saudi Arabia. The findings are written against the standard named in the scope, so a maintenance lead can act without translating a pile of jargon.
            </p>
            <p>
              The same desk also handles the electrical side of a site: fixed wiring and the portable equipment people plug in. Clients in oil and gas, construction, marine, manufacturing, healthcare, and logistics use the same visit pattern.
            </p>
            <p>
              The inspection is independent of the company that owns or hires the machine. The surveyor is there to look, test, and write down what was found.
            </p>
            <p className="text-ink">The work covers these disciplines:</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {inspectionTopics.map((item) => (
              <article key={item.slug} className="glass flex flex-col overflow-hidden rounded-[1.5rem] text-center">
                <div className="relative h-44">
                  <Image src={item.image} alt={item.alt} fill className="object-cover" sizes="(min-width: 1280px) 22vw, (min-width: 640px) 45vw, 100vw" />
                </div>
                <div className="flex flex-1 flex-col items-center px-5 py-6">
                  <h3 className="text-lg leading-snug font-light text-ink">{item.title}</h3>
                  <Link
                    href={`/services/inspection/${item.slug}`}
                    className="mt-5 inline-flex rounded-xl border border-sea/35 px-4 py-2 text-xs font-light tracking-[0.14em] text-sea uppercase"
                  >
                    Read more
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div>
            <h2 className="text-3xl font-extralight tracking-tight text-ink">Why us?</h2>
            <p className="mt-3 text-sm leading-7 font-light text-muted">
              What a lifting-equipment client can expect from Gulf Technical Inspection:
            </p>
            <ul className="mt-5 space-y-3">
              {reasons.map((reason) => (
                <li key={reason} className="flex gap-3 text-sm leading-7 font-light text-muted">
                  <Icon name="check" className="mt-1.5 h-4 w-4 shrink-0 text-sea" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          <div id="quote" className="scroll-mt-28 grid items-start gap-6 lg:grid-cols-2">
            <div className="relative h-64 overflow-hidden rounded-[1.5rem] sm:h-80 lg:h-full lg:min-h-[28rem]">
              <Image
                src="/images/inspection.jpg"
                alt="Gloved hands checking a crane hook"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 36vw, 100vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-extralight tracking-tight text-ink">Get a quote</h2>
              <p className="mt-3 mb-6 text-sm leading-7 font-light text-muted">
                Tell us the site, the equipment, and the date you need someone there.
              </p>
              <InspectionQuote />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
