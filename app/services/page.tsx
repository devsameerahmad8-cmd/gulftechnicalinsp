import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ServiceAside } from "@/components/ServiceAside";
import { ServiceCard } from "@/components/ServiceCard";
import { serviceLinks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Services" kicker="What we offer" />
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[280px_1fr]">
        <ServiceAside active="/services" />
        <div className="grid gap-4 sm:grid-cols-2">
          {serviceLinks.map((service) => (
            <ServiceCard key={service.href} {...service} level="h2" action="Open this service" />
          ))}
        </div>
      </section>
    </>
  );
}
