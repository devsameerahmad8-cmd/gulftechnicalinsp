import type { Metadata } from "next";
import { ServiceDetail } from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Personal Certification",
};

const points = [
  {
    title: "Who it is for",
    copy: "Inspectors, riggers, welders, scaffolders, and supervisors who need a record in their own name, not only a company certificate on the wall.",
  },
  {
    title: "How it is judged",
    copy: "A written paper and a practical task on the equipment the person actually uses. The assessor watches the work, not a slide deck.",
  },
  {
    title: "What you receive",
    copy: "A certificate with the holder’s name, the scope, the date, and the office that issued it. The same number can be checked on the verification page.",
  },
  {
    title: "Where it is used",
    copy: "Clients, ports, and site managers ask for it before a person is allowed to inspect, rig, or sign off a lift.",
  },
];

export default function CertificationPage() {
  return (
    <ServiceDetail
      title="Personal Certification"
      active="/services/certification"
      lede="Personal certification is a named record of competence. It sits with the individual, so a new contract or a new site can see what that person is cleared to do."
      points={points}
    />
  );
}
