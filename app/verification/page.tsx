import type { Metadata } from "next";
import Link from "next/link";
import { CertificateVerifyForm } from "@/components/CertificateVerifyForm";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Verification",
  description: "Look up a testing certificate issued by Gulf Technical Inspection.",
};

const points = [
  {
    title: "What we read",
    copy: "The certificate number, the laboratory or company that issued it, the method, the acceptance limit, the result, and the date. A missing line is written down, not guessed.",
  },
  {
    title: "Against the item",
    copy: "The serial, tag, weld map, or sample mark on the certificate is compared with the equipment in front of us. If the paper and the item do not match, the certificate is not accepted for that item.",
  },
  {
    title: "Whether it is still current",
    copy: "We check the interval the specification or the issuer set. A certificate that has run past that date, or that covers a different scope, is reported as such.",
  },
  {
    title: "What you receive",
    copy: "A short note: accepted, accepted with a limit, or not accepted, with the reason. A certificate issued by this office can be looked up in the form on this page.",
  },
];

export default function VerificationPage() {
  return (
    <>
      <PageHero title="Verification" kicker="Certificate desk" />
      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
        <h2 className="text-3xl font-extralight tracking-tight text-ink sm:text-4xl">Testing Certificate Verification</h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 font-light text-muted">
          Bring a testing certificate from this office or from another laboratory. We compare it with the item and say whether the site can still rely on that record.
        </p>
        <div className="mt-8">
          <CertificateVerifyForm />
        </div>
        <div className="mt-8 space-y-4">
          {points.map((point) => (
            <p key={point.title} className="text-sm leading-7 font-light text-muted">
              <span className="font-normal text-ink">{point.title}: </span>
              {point.copy}
            </p>
          ))}
        </div>
        <Link href="/contact" className="mt-8 inline-flex rounded-full bg-sea px-5 py-2.5 text-sm font-light text-white">
          Ask the duty desk
        </Link>
      </section>
    </>
  );
}
