import type { Metadata } from "next";
import Image from "next/image";
import { IconBadge, type IconName } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Us",
  description: "Who Gulf Technical Inspection is, and the values behind the work.",
};

const pillars = [
  {
    title: "Who we are",
    copy: "We inspect plant and lifting equipment, issue training records, and give technical advice. The aim is the same on every job: your operation stays inside the rules that apply to it.",
  },
  {
    title: "Our mission",
    copy: "Offer inspection that keeps people safe, helps the work move, and meets what the client asked for. Accuracy and a steady standard of reporting come before speed.",
  },
  {
    title: "Our vision",
    copy: "Be the desk teams in the Gulf call when an asset has to be safe, reliable, and documented. New tools are welcome when they make the finding clearer.",
  },
];

const values: { title: string; copy: string; icon: IconName }[] = [
  {
    title: "Integrity",
    copy: "We say what we saw, keep client information private, and do not dress up a finding.",
    icon: "shield",
  },
  {
    title: "Excellence",
    copy: "Reports are checked before they leave. Detail and a habit of improving the method sit behind that.",
    icon: "check",
  },
  {
    title: "Safety",
    copy: "The people on site, our surveyors, and the neighbourhood around the job come first. Procedures are followed, not skipped to save a visit.",
    icon: "hook",
  },
  {
    title: "Reliability",
    copy: "You get a report you can file and a time you were told. The numbers and the photos match.",
    icon: "file",
  },
  {
    title: "Innovation",
    copy: "When a better instrument or a clearer way to write the note exists, we use it. The result still has to be understandable.",
    icon: "search",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Us" kicker="The practice" image="/images/training.jpg" imageAlt="The team reviewing a drawing" />
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid gap-4 md:grid-cols-3">
          {pillars.map((item) => (
            <article key={item.title} className="glass rounded-[1.5rem] p-6">
              <h2 className="text-2xl font-extralight text-ink">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 font-light text-muted">{item.copy}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid items-center gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="glass rounded-[2rem] p-8 sm:p-10">
            <p className="text-[11px] font-light tracking-[0.28em] text-[#6d8794] uppercase">Company overview</p>
            <h2 className="mt-3 text-3xl font-extralight text-ink">Heavy equipment, lifting gear, and the people who use them.</h2>
            <p className="mt-4 text-sm leading-7 font-light text-muted">
              The practice covers inspection and training for equipment and for the crews who run it. Performance, dependability, and safety are the three questions on every visit.
            </p>
          </div>
          <div className="relative min-h-[280px] overflow-hidden rounded-[2rem]">
            <Image src="/images/hero-yard.jpg" alt="A surveyor on an equipment yard" fill className="object-cover" sizes="40vw" />
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-extralight text-ink">Core values</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="glass rounded-[1.5rem] p-6">
                <IconBadge name={value.icon} />
                <h3 className="mt-4 text-xl font-light text-ink">{value.title}</h3>
                <p className="mt-2 text-sm leading-7 font-light text-muted">{value.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
