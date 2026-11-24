import type { Metadata } from "next";
import { ServiceDetail } from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "ISO Certification",
};

const points = [
  {
    title: "The standards we prepare",
    copy: "ISO 9001 for quality, ISO 14001 for the environment, and ISO 45001 for occupational health and safety. A company can take one, or line them up together.",
  },
  {
    title: "Gap review",
    copy: "We read the procedures you already have and mark what an auditor will ask for and what is still missing.",
  },
  {
    title: "The system on paper",
    copy: "Documents are written in the language your supervisors use, tied to the yards, workshops, and lifts you actually run.",
  },
  {
    title: "Audit day",
    copy: "An internal audit comes first. We then sit with your team while the certification body walks the system, and we help close the findings.",
  },
];

export default function IsoPage() {
  return (
    <ServiceDetail
      title="ISO Certification"
      active="/services/iso"
      lede="We prepare the management system and stay with you through the audit. The certificate itself is issued by the accredited body, once the system holds up."
      points={points}
    />
  );
}
