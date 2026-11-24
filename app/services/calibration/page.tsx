import type { Metadata } from "next";
import { ServiceDetail } from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Calibration",
};

const points = [
  {
    title: "Instruments",
    copy: "Torque wrenches, pressure gauges, load cells, and the measuring tools a workshop uses to decide if a part is still in tolerance.",
  },
  {
    title: "The reading",
    copy: "Each instrument is compared with a known standard. The certificate shows the as-found figure, the as-left figure, and whether it passed.",
  },
  {
    title: "The interval",
    copy: "We mark the next due date on the certificate and on the instrument tag, so a tool is not still in the box after it has gone out of date.",
  },
  {
    title: "Where it happens",
    copy: "Small tools can come to the office. Fixed gauges and load equipment are calibrated on site, so the machine does not have to travel.",
  },
];

export default function CalibrationPage() {
  return (
    <ServiceDetail
      title="Calibration"
      active="/services/calibration"
      lede="Calibration is a measured comparison, not a visual check. The certificate is the record that the tool still reads what it claims to read."
      points={points}
    />
  );
}
