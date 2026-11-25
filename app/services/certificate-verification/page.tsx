import type { Metadata } from "next";
import { CertificateVerifyForm } from "@/components/CertificateVerifyForm";
import { ServiceDetail } from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Testing Certificate Verification",
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

export default function CertificateVerificationPage() {
  return (
    <ServiceDetail
      title="Testing Certificate Verification"
      active="/services/certificate-verification"
      lede="Bring a testing certificate from this office or from another laboratory. We compare it with the item and say whether the site can still rely on that record."
      points={points}
      panel={<CertificateVerifyForm />}
    />
  );
}
