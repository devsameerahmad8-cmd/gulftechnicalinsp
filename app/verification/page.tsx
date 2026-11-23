import type { Metadata } from "next";
import { IconBadge } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { VerifyForm } from "@/components/VerifyForm";

export const metadata: Metadata = {
  title: "Verification",
  description: "Look up a sample Gulf Technical Inspection certificate.",
};

export default function VerificationPage() {
  return (
    <>
      <PageHero title="Verification" kicker="Certificate desk" />
      <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="mb-4 flex justify-center">
          <IconBadge name="shield" />
        </div>
        <p className="mb-6 text-center text-sm leading-7 font-light text-muted">
          Enter a certificate number issued by Gulf Technical Inspection. The lookup below is a sample desk so you can see how a record is presented.
        </p>
        <VerifyForm />
      </section>
    </>
  );
}
