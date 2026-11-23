import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ServiceAside } from "@/components/ServiceAside";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Services" kicker="What we offer" />
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[280px_1fr]">
        <ServiceAside active="/services" />
        <div className="grid gap-6">
          <article className="glass group overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
            <div className="relative h-48 sm:h-56">
              <Image src="/images/inspection.jpg" alt="A crane hook being inspected" fill className="object-cover transition duration-700 group-hover:scale-[1.03]" sizes="(min-width: 1024px) 70vw, 100vw" />
            </div>
            <div className="p-5 sm:p-8">
              <h2 className="text-2xl font-extralight text-ink sm:text-3xl">Inspection service</h2>
              <p className="mt-3 text-sm leading-7 font-light text-muted">
                Heavy equipment and cranes: a visual check, a function test, measurements, a condition note, and a report.
              </p>
              <Link href="/services/inspection" className="mt-5 inline-flex text-sm font-light text-sea">
                Read the inspection sections
              </Link>
            </div>
          </article>
          <article className="glass group overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
            <div className="relative h-48 sm:h-56">
              <Image src="/images/training.jpg" alt="A training group around a table" fill className="object-cover transition duration-700 group-hover:scale-[1.03]" sizes="(min-width: 1024px) 70vw, 100vw" />
            </div>
            <div className="p-5 sm:p-8">
              <h2 className="text-2xl font-extralight text-ink sm:text-3xl">Training service</h2>
              <p className="mt-3 text-sm leading-7 font-light text-muted">
                Thirty programs, from rigging and first aid to lead-auditor courses, held at your site or in one of our offices.
              </p>
              <Link href="/services/training" className="mt-5 inline-flex text-sm font-light text-sea">
                See the course list
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
