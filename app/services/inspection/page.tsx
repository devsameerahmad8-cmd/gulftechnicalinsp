import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ServiceAside } from "@/components/ServiceAside";

export const metadata: Metadata = {
  title: "Inspection Service",
};

const heavy = [
  {
    title: "Visual inspection",
    copy: "Inspectors walk the machine, note wear, damage, and anything that could become a hazard. What can be seen is written down before a test begins.",
  },
  {
    title: "Functional testing",
    copy: "Key movements and systems are run so we can see whether the equipment still does the job it was built for.",
  },
  {
    title: "Measurement of dimensions and tolerances",
    copy: "Fit, alignment, and critical sizes are checked with measuring tools so small drift is not left to guesswork.",
  },
  {
    title: "Assessment of condition",
    copy: "Age, maintenance history, and how the machine is used all sit next to the structural, mechanical, electrical, and safety findings.",
  },
  {
    title: "A written report",
    copy: "You receive the findings, the safety concerns, and a plain recommendation: maintain, repair, or take the item out of service.",
  },
];

const cranes = [
  {
    title: "Visual inspection",
    copy: "Boom, jib, hooks, ropes, and controls are looked over for wear, damage, and missing safety parts.",
  },
  {
    title: "Functional testing",
    copy: "Lifting, lowering, slewing, and hoisting are tried so the motions match the way the crane is supposed to work.",
  },
  {
    title: "Measurement of dimensions and tolerances",
    copy: "Reach, height, and the parts that carry the load are measured against the limits the crane is allowed to work within.",
  },
  {
    title: "Assessment of condition",
    copy: "Structure, mechanisms, electrics, and safety devices are read together with how the crane has been kept and where it stands.",
  },
  {
    title: "Inspection report",
    copy: "The report lists what was found and what should happen next, so a maintenance lead can plan the repair or the upgrade.",
  },
];

export default function InspectionPage() {
  return (
    <>
      <PageHero title="Inspection Service" image="/images/hero-yard.jpg" imageAlt="Surveyor beside heavy equipment" />
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[280px_1fr]">
        <ServiceAside active="/services/inspection" />
        <article className="space-y-10">
          <div>
            <h2 className="text-3xl font-extralight text-ink">Gulf inspection services</h2>
            <h3 className="mt-6 text-xl font-light text-ink">Heavy equipment inspection</h3>
            <p className="mt-3 text-sm leading-7 font-light text-muted">
              Heavy equipment is checked so it still performs, stays dependable, and can be used safely. Inspectors who know the machine type walk it, test it, and leave you with advice you can act on.
            </p>
            <p className="mt-6 text-sm font-light text-ink">The heavy equipment visit includes:</p>
            <div className="mt-4 space-y-4">
              {heavy.map((item) => (
                <p key={item.title} className="text-sm leading-7 font-light text-muted">
                  <span className="font-normal text-ink">{item.title}: </span>
                  {item.copy}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-light text-ink">Crane inspection</h3>
            <p className="mt-3 text-sm leading-7 font-light text-muted">
              Crane surveys cover the machine, the motions, and the record you need to keep the lift inside its limits. The same visit pattern is used, written for the crane in front of the surveyor.
            </p>
            <p className="mt-6 text-sm font-light text-ink">The crane visit covers:</p>
            <div className="mt-4 space-y-4">
              {cranes.map((item) => (
                <p key={item.title} className="text-sm leading-7 font-light text-muted">
                  <span className="font-normal text-ink">{item.title}: </span>
                  {item.copy}
                </p>
              ))}
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
