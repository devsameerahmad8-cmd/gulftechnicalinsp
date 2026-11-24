import type { Metadata } from "next";
import { ServiceDetail } from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Testing",
};

const points = [
  {
    title: "Welds and parent metal",
    copy: "Visual checks, dye penetrant, and hardness readings where the specification calls for them. The result is tied to the joint, not filed as a loose note.",
  },
  {
    title: "Materials",
    copy: "Samples are taken or tested in place so a plate, a pin, or a casting can be compared with the grade the drawing names.",
  },
  {
    title: "Load and function",
    copy: "When a proof load or a function test is part of the visit, the figures go into the same report as the inspection findings.",
  },
  {
    title: "The record",
    copy: "You receive the method, the acceptance limit, and the result. A fail is written as plainly as a pass.",
  },
];

export default function TestingPage() {
  return (
    <ServiceDetail
      title="Testing"
      active="/services/testing"
      lede="Testing is the measured part of a visit: welds, materials, and loads. It sits next to the inspection so the report has both what was seen and what was measured."
      points={points}
    />
  );
}