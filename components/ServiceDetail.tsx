import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ServiceAside } from "@/components/ServiceAside";

export function ServiceDetail({
  title,
  lede,
  points,
  active,
}: {
  title: string;
  lede: string;
  points: { title: string; copy: string }[];
  active: string;
}) {
  return (
    <>
      <PageHero title={title} kicker="Services" />
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[280px_1fr]">
        <ServiceAside active={active} />
        <article className="space-y-8">
          <div>
            <h2 className="text-3xl font-extralight tracking-tight text-ink">{title}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 font-light text-muted">{lede}</p>
          </div>
          <div className="space-y-4">
            {points.map((point) => (
              <p key={point.title} className="text-sm leading-7 font-light text-muted">
                <span className="font-normal text-ink">{point.title}: </span>
                {point.copy}
              </p>
            ))}
          </div>
          <Link href="/contact" className="inline-flex rounded-full bg-sea px-5 py-2.5 text-sm font-light text-white">
            Ask the duty desk
          </Link>
        </article>
      </section>
    </>
  );
}
