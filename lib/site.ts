import type { IconName } from "@/components/Icons";

export const company = {
  name: "Gulf Technical Inspection",
  short: "Gulf",
  tagline: "Inspection & Training",
  email: "info@gulftechnicalinsp.com",
  phones: ["+966 13 810 4400", "+966 11 465 2200", "+966 12 652 1180"],
  offices: "Dammam | Riyadh | Jeddah | Jubail",
  country: "Kingdom of Saudi Arabia",
  summary:
    "We inspect lifting equipment and industrial plant, train the crews who use them, and advise teams who need a clear technical opinion. Surveyors are based across Saudi Arabia and write reports people can act on the same day.",
};

export const overviewLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/verification", label: "Verification" },
];

export const aboutLinks = [
  { href: "/about/careers", label: "Careers" },
  { href: "/about/clients", label: "Our Clients" },
];

export const serviceLinks: {
  href: string;
  label: string;
  copy: string;
  icon: IconName;
  image: string;
  alt: string;
}[] = [
  {
    href: "/services/inspection",
    label: "Inspection",
    copy: "Cranes, lifting gear, pressure systems, and welded plant, checked on site and written up so a maintenance lead can act.",
    icon: "clipboard",
    image: "/images/inspection.jpg",
    alt: "Gloved hands checking a crane hook",
  },
  {
    href: "/services/training",
    label: "Training",
    copy: "Courses for riggers, supervisors, and inspectors, held at your yard or in one of our offices.",
    icon: "users",
    image: "/images/training.jpg",
    alt: "A crew reviewing an equipment drawing",
  },
  {
    href: "/services/certification",
    label: "Personal Certification",
    copy: "A named record for the person who inspects, rigs, welds, or supervises, after a practical check and a written paper.",
    icon: "badge",
    image: "/images/certification.jpg",
    alt: "An assessor watching a rigger work beside a crane hook",
  },
  {
    href: "/services/iso",
    label: "ISO Certification",
    copy: "Help preparing a quality, environment, or safety system for ISO 9001, 14001, or 45001, through to the audit day.",
    icon: "shield",
    image: "/images/iso.jpg",
    alt: "Three people reviewing a quality manual at a table",
  },
  {
    href: "/services/calibration",
    label: "Calibration",
    copy: "Torque tools, pressure gauges, and load instruments read against a known standard, with the figures written on the certificate.",
    icon: "gauge",
    image: "/images/calibration.jpg",
    alt: "Gloved hands calibrating a torque tool beside a pressure gauge",
  },
  {
    href: "/services/testing",
    label: "Testing",
    copy: "Material and weld checks that sit beside the inspection: hardness, penetrant, and the samples the specification asks for.",
    icon: "flask",
    image: "/images/testing.jpg",
    alt: "A surveyor checking a weld with dye penetrant",
  },
];

export function telHref(phone: string) {
  return `tel:${phone.replace(/\s/g, "")}`;
}
