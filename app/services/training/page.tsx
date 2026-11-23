import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ServiceAside } from "@/components/ServiceAside";
import { company, telHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Training Service",
};

const courses = [
  "IADC drilling programs",
  "OSHA-aligned safety programs",
  "IOSH-style health and safety programs",
  "Medic first aid",
  "Operator training and certification",
  "Rigger and scaffolding training",
  "Fire warden training",
  "Fire warden and emergency evacuation",
  "Electrical safety for engineers and supervisors",
  "Electrical safety specialist",
  "Fire safety training and drill",
  "Safety supervision and leadership",
  "Accident investigation",
  "Electrical safety awareness",
  "Hazard communication awareness",
  "Hazardous waste operations awareness",
  "Project management",
  "HACCP, level 1 to level 4",
  "Food safety, level 1 to level 4",
  "Health and safety, level 1 to level 4",
  "Fire safety courses",
  "First aid, CPR, and AED",
  "Auditing and inspections",
  "Hospitality and catering",
  "Customer service",
  "Risk assessment",
  "COSHH, manual handling, and work at height",
  "ISO 9001 lead auditor",
  "ISO 14001 lead auditor",
  "ISO 45001 lead auditor",
];

export default function TrainingPage() {
  return (
    <>
      <PageHero title="Training Service" image="/images/training.jpg" imageAlt="A crew in a training room" />
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[280px_1fr]">
        <ServiceAside active="/services/training" />
        <article>
          <h2 className="text-3xl font-extralight text-ink">Gulf training services</h2>
          <p className="mt-4 text-sm leading-7 font-light text-muted">
            Courses are built for people who inspect, supervise, or operate equipment. Trainers work through practical exercises and short case studies, and each program ends with a record of what the group covered.
          </p>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2">
            {courses.map((course, index) => (
              <li key={course} className="glass flex gap-3 rounded-2xl px-4 py-3 text-sm font-light text-ink">
                <span className="text-sea">{index + 1}.</span>
                {course}
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm leading-7 font-light text-muted">
            Pick a program for a certificate, a site rule, or a crew that needs the same method. Call{" "}
            <a href={telHref(company.phones[2])} className="text-sea">
              {company.phones[2]}
            </a>{" "}
            for the next dates.
          </p>
          <Link href="/contact" className="mt-6 inline-flex rounded-full bg-sea px-5 py-2.5 text-sm font-light text-white">
            Ask for dates
          </Link>
        </article>
      </section>
    </>
  );
}
