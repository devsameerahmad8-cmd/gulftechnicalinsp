import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Icon, IconBadge, type IconName } from "@/components/Icons";
import { company, telHref } from "@/lib/site";

const services: {
  href: string;
  title: string;
  copy: string;
  image: string;
  alt: string;
  icon: IconName;
}[] = [
  {
    href: "/services/inspection",
    title: "Field inspection",
    copy: "Cranes, lifting accessories, pressure systems, and welded structures, reviewed on site and written up in plain language.",
    image: "/images/inspection.jpg",
    alt: "Gloved hands checking a crane hook",
    icon: "clipboard",
  },
  {
    href: "/services/training",
    title: "Crew training",
    copy: "Short courses for riggers, supervisors, and inspectors, built around the equipment your teams already use.",
    image: "/images/training.jpg",
    alt: "A crew reviewing an equipment drawing",
    icon: "users",
  },
];

const steps: { title: string; copy: string; icon: IconName }[] = [
  { title: "Call the desk", copy: "Tell us the site, the equipment, and the date you need someone there.", icon: "phone" },
  { title: "Survey on site", copy: "A surveyor works with your crew, photographs what matters, and notes the limits.", icon: "search" },
  { title: "Read a clear report", copy: "You receive findings, photos, and the next action without a pile of jargon.", icon: "file" },
];

const stats: { value: string; label: string; icon: IconName }[] = [
  { value: "480+", label: "Completed projects", icon: "check" },
  { value: "4", label: "Offices in the Kingdom", icon: "building" },
  { value: "18", label: "Years of experience", icon: "clock" },
];

export default function HomePage() {
  return (
    <>
      <section className="mesh relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div>
            <p className="text-[11px] font-light tracking-[0.22em] text-[#6d8794] uppercase sm:tracking-[0.35em]">Delivering confidence</p>
            <h1 className="mt-4 max-w-xl text-4xl leading-[1.08] font-extralight tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Precise inspection for sites across the Gulf.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 font-light text-muted">
              {company.name} supports energy, marine, and industrial teams in Saudi Arabia with field surveys, practical training, and calm technical advice.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-full bg-sea px-6 py-3 text-sm font-light text-white transition hover:bg-[#245862]">
                Contact us
              </Link>
              <Link href="/services" className="glass rounded-full px-6 py-3 text-sm font-light text-sea transition hover:bg-white/80">
                View services
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-72 overflow-hidden rounded-[1.5rem] shadow-[0_18px_50px_rgba(70,110,130,0.12)] sm:h-96 sm:rounded-[2rem] lg:h-[420px]">
              <Image
                src="/images/hero-yard.jpg"
                alt="A surveyor standing beside a mobile crane"
                fill
                priority
                className="drift object-cover"
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
            </div>
            <div className="glass relative z-10 mx-4 -mt-20 rounded-[1.5rem] p-5 sm:mx-6">
              <p className="text-[11px] font-light tracking-[0.28em] text-[#6d8794] uppercase">On call</p>
              <a href={telHref(company.phones[0])} className="mt-2 inline-flex items-center gap-2 text-base font-light text-sea sm:text-lg">
                <Icon name="phone" className="h-4 w-4" />
                {company.phones[0]}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/70 bg-white/45">
        <div className="mx-auto max-w-4xl px-4 py-8 text-center sm:px-6 sm:py-10">
          <h2 className="text-2xl font-extralight text-ink">We are available around the clock</h2>
          <p className="mt-3 text-sm leading-7 font-light text-muted">
            Call{" "}
            <a href={telHref(company.phones[0])} className="text-sea">
              {company.phones[0]}
            </a>{" "}
            now. If that line is busy, the duty desk also answers{" "}
            <a href={telHref(company.phones[1])} className="text-sea">
              {company.phones[1]}
            </a>
            .
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-4 py-6 sm:px-6 md:grid-cols-2">
        {services.map((service) => (
          <Link key={service.href} href={service.href} className="glass group overflow-hidden rounded-[2rem] transition hover:bg-white/75">
            <div className="relative h-52">
              <Image src={service.image} alt={service.alt} fill className="object-cover transition duration-500 group-hover:scale-[1.03]" sizes="(min-width: 768px) 50vw, 100vw" />
            </div>
            <div className="p-5 sm:p-8">
              <IconBadge name={service.icon} />
              <h2 className="mt-4 text-2xl font-extralight text-ink sm:text-3xl">{service.title}</h2>
              <p className="mt-3 max-w-md text-sm leading-7 font-light text-muted">{service.copy}</p>
              <span className="mt-6 inline-flex text-sm font-light text-sea">Read more</span>
            </div>
          </Link>
        ))}
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-8 sm:px-6 lg:grid-cols-2">
        <div className="relative h-64 overflow-hidden rounded-[1.5rem] sm:h-80 sm:rounded-[2rem]">
          <Image
            src="/images/hero-yard.jpg"
            alt="Heavy equipment on a yard in daylight"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div>
          <h2 className="text-3xl font-extralight tracking-tight text-ink sm:text-4xl">Working toward safer equipment and a report you can use.</h2>
          <p className="mt-4 text-sm leading-7 font-light text-muted">
            Gulf Technical Inspection surveys heavy equipment, lifting tools, and cranes for teams in Saudi Arabia. The work follows a quality system and the inspection method our clients already expect.
          </p>
          <p className="mt-3 text-sm leading-7 font-light text-muted">
            Surveyors have spent years on these machines. The point of the visit is equipment that runs safely and still meets the rule that applies to that site.
          </p>
          <p className="mt-3 text-sm leading-7 font-light text-muted">
            You can hand the file to a maintenance lead and know the photos, the limits, and the next action are in one place.
          </p>
          <Link href="/about" className="mt-6 inline-flex rounded-full bg-sea px-5 py-2.5 text-sm font-light text-white">
            Explore more
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-[1.5rem] bg-white/60 px-5 py-6 text-center sm:rounded-[2rem] sm:px-8 sm:py-8">
          <p className="text-sm leading-7 font-light text-ink">
            For immediate help, call{" "}
            <a href={telHref(company.phones[0])} className="text-sea">
              {company.phones[0]}
            </a>
            . Complaints, feedback, and ordinary questions all come to the same desk.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-[11px] font-light tracking-[0.28em] text-[#6d8794] uppercase">How a visit works</p>
            <h2 className="mt-3 text-3xl font-extralight tracking-tight text-ink sm:text-4xl">Quiet on site. Clear on paper.</h2>
            <p className="mt-4 text-sm leading-7 font-light text-muted">
              Surveyors arrive with the scope already agreed, stay out of the way of the lift, and leave a record your supervisors can file.
            </p>
          </div>
          <ol className="grid gap-4">
            {steps.map((step, index) => (
              <li key={step.title} className="glass flex gap-4 rounded-[1.5rem] p-5">
                <IconBadge name={step.icon} />
                <div>
                  <p className="text-[11px] font-light tracking-[0.22em] text-sand uppercase">0{index + 1}</p>
                  <h3 className="text-lg font-light text-ink">{step.title}</h3>
                  <p className="mt-1 text-sm leading-6 font-light text-muted">{step.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="glass grid gap-6 rounded-[1.5rem] px-5 py-6 sm:grid-cols-3 sm:rounded-[2rem] sm:px-8 sm:py-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-start gap-4">
              <IconBadge name={stat.icon} />
              <div>
                <p className="text-3xl font-extralight text-sea sm:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm font-light text-muted">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
        <h2 className="text-3xl font-extralight tracking-tight text-ink sm:text-4xl">Get in touch</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="glass rounded-[2rem] p-6 sm:p-8">
            <ContactForm />
          </div>
          <div className="grid gap-4">
            <div className="glass rounded-[1.5rem] p-6">
              <h3 className="flex items-center gap-2 text-lg font-light text-ink">
                <Icon name="phone" className="h-4 w-4 text-sea" />
                Contact
              </h3>
              <p className="mt-3 text-sm font-light text-muted">
                Email:{" "}
                <a href={`mailto:${company.email}`} className="text-sea">
                  {company.email}
                </a>
              </p>
              <ul className="mt-3 space-y-1">
                {company.phones.map((phone) => (
                  <li key={phone}>
                    <a href={telHref(phone)} className="text-sm font-light text-ink hover:text-sea">
                      Mobile: {phone}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass rounded-[1.5rem] p-6">
              <h3 className="flex items-center gap-2 text-lg font-light text-ink">
                <Icon name="pin" className="h-4 w-4 text-sea" />
                Head office
              </h3>
              <p className="mt-3 text-sm leading-7 font-light text-muted">{company.offices}</p>
              <p className="mt-1 text-sm font-light text-muted">{company.country}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
