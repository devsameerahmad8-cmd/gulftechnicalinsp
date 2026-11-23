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

export const serviceLinks = [
  { href: "/services/inspection", label: "Inspection Service" },
  { href: "/services/training", label: "Training Service" },
];

export function telHref(phone: string) {
  return `tel:${phone.replace(/\s/g, "")}`;
}
