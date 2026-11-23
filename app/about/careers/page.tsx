import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Careers",
};

const pillars = [
  {
    title: "Safety first",
    copy: "The well-being of the crew, the client, and the people nearby is the first filter on a job. Surveyors are expected to stop, note the risk, and say so.",
  },
  {
    title: "Pursuit of excellence",
    copy: "Training, a second read of the report, and a habit of comparing the work with current practice are how the desk stays sharp.",
  },
  {
    title: "Collaboration",
    copy: "A finding is better when the surveyor, the reviewer, and the client have all seen it. We ask what the site actually needs before we write the scope.",
  },
];

const roles = [
  { title: "Field inspector", place: "Dammam", note: "Lifting gear and crane surveys, with overnight stays on the coast when a shutdown needs it." },
  { title: "Training coordinator", place: "Riyadh", note: "Schedule courses, prepare rooms, and keep attendance records tidy for client files." },
  { title: "Report reviewer", place: "Jeddah", note: "Read survey notes before they go out and check that photos match the findings." },
];

export default function CareersPage() {
  return (
    <>
      <PageHero title="Careers" kicker="Join the desk" />
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <h2 className="text-3xl font-extralight text-ink">Our working culture</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 font-light text-muted">
          Three habits shape the desk: safety, a high standard of work, and doing the job with other people rather than around them. They show up in how we speak to clients and how we treat one another.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {pillars.map((item, index) => (
            <article key={item.title} className="glass rounded-[1.5rem] p-6">
              <p className="text-[11px] font-light tracking-[0.22em] text-sand uppercase">0{index + 1}</p>
              <h3 className="mt-2 text-2xl font-extralight text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 font-light text-muted">{item.copy}</p>
            </article>
          ))}
        </div>
        <blockquote className="glass mt-8 rounded-[1.5rem] p-8 text-lg leading-8 font-extralight text-ink">
          Join a desk that trains you, reviews your work, and sends you to sites where the record matters. Safety and a clear report are the job.
        </blockquote>
        <h2 className="mt-12 text-3xl font-extralight text-ink">Open roles</h2>
        <div className="mt-6 space-y-4">
          {roles.map((role) => (
            <article key={role.title} className="glass flex flex-col gap-3 rounded-[1.5rem] p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-2xl font-extralight text-ink">{role.title}</h3>
                <p className="mt-1 text-sm font-light text-sea">{role.place}</p>
                <p className="mt-2 max-w-xl text-sm leading-7 font-light text-muted">{role.note}</p>
              </div>
              <Link href="/contact" className="text-sm font-light text-sea underline decoration-sand underline-offset-4">
                Write to us
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
