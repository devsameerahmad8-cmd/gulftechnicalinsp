import Image from "next/image";
import { Icon } from "@/components/Icons";
import { InspectionQuote } from "@/components/InspectionQuote";
import { PageHero } from "@/components/PageHero";
import { ServiceAside } from "@/components/ServiceAside";
import type { InspectionTopic as Topic } from "@/lib/inspectionTopics";

export function InspectionTopic({ topic }: { topic: Topic }) {
  return (
    <>
      <PageHero title={topic.title} kicker="Inspection" image={topic.image} imageAlt={topic.alt} />
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[280px_1fr]">
        <ServiceAside active="/services/inspection" />
        <div className="min-w-0 space-y-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-extralight tracking-tight text-ink sm:text-4xl">{topic.title}</h2>
              <p className="mt-4 text-sm leading-7 font-light text-muted">{topic.intro}</p>
            </div>
            <a
              href="#quote"
              className="inline-flex shrink-0 items-center justify-center rounded-2xl border border-sea/40 px-6 py-4 text-center text-sm font-light tracking-[0.16em] text-sea uppercase sm:h-28 sm:w-36"
            >
              Get a quote
            </a>
          </div>

          {topic.sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-2xl font-extralight tracking-tight text-ink">{section.title}</h3>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-sm leading-7 font-light text-muted">
                  {paragraph}
                </p>
              ))}
              {section.items ? (
                <ul className="mt-4 space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-7 font-light text-muted">
                      <Icon name="check" className="mt-1.5 h-4 w-4 shrink-0 text-sea" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}

          {topic.equipment ? (
            <div>
              <h3 className="text-2xl font-extralight tracking-tight text-ink">{topic.equipmentTitle}</h3>
              {topic.equipmentLede ? <p className="mt-3 text-sm leading-7 font-light text-muted">{topic.equipmentLede}</p> : null}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {topic.equipment.map((item) => (
                  <article key={item.title} className="glass overflow-hidden rounded-2xl text-center">
                    <div className="flex h-32 items-center justify-center bg-white/80 p-2 sm:h-36">
                      <img src={item.image} alt={item.title} className="max-h-full max-w-full object-contain" />
                    </div>
                    <h4 className="px-2 py-3 text-sm font-light text-ink">{item.title}</h4>
                  </article>
                ))}
              </div>
            </div>
          ) : null}

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
                Tell us the site, the equipment, and the date you need someone there. The visit can be done on site.
              </p>
              <InspectionQuote />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
