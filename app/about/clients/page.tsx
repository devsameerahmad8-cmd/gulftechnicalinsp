import type { Metadata } from "next";
import { ClientCarousel } from "@/components/ClientCarousel";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Our Clients",
};

export default function ClientsPage() {
  return (
    <>
      <PageHero title="Our Clients" kicker="Who we sit with" />
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <ClientCarousel />
        <div className="mx-auto mt-10 max-w-3xl space-y-4 text-sm leading-7 font-light text-muted">
          <p>We work with engineering and contracting teams based in Saudi Arabia.</p>
          <p>
            Those organisations run plants, ports, and builds. The surveys and courses we deliver sit inside their own safety and maintenance plans.
          </p>
          <p>The list grows when a new site asks for the same standard of report. We would rather keep a few long relationships than collect names.</p>
        </div>
      </section>
    </>
  );
}
