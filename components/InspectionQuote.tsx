"use client";

import { FormEvent, useState } from "react";
import { Icon } from "@/components/Icons";

const fieldClass =
  "w-full rounded-2xl border border-white/80 bg-white/55 py-3.5 pr-4 pl-11 text-sm font-light text-ink outline-none backdrop-blur placeholder:text-[#8aa0ab] focus:border-sea/40";

const disciplines = [
  "Lifting equipment examinations",
  "Scaffolding inspections",
  "Height safety testing",
  "Elevator and escalator inspection",
  "Pressure vessel inspections",
  "Shipping container inspections",
];

export function InspectionQuote() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-[1.5rem] border border-white/80 bg-white/45 px-6 py-10 text-center backdrop-blur-xl">
        <p className="text-2xl font-extralight text-ink">Quote request received</p>
        <p className="mt-3 text-sm leading-7 font-light text-muted">
          A coordinator will reply with a scope and a date. If the visit is urgent, call the duty desk.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-light text-sea underline decoration-sand underline-offset-4"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <label className="relative block">
        <span className="sr-only">Name</span>
        <Icon name="user" className="pointer-events-none absolute top-1/2 left-4 z-10 h-4 w-4 -translate-y-1/2 text-sea" />
        <input name="name" required placeholder="Name *" className={fieldClass} />
      </label>
      <label className="relative block">
        <span className="sr-only">Email</span>
        <Icon name="mail" className="pointer-events-none absolute top-1/2 left-4 z-10 h-4 w-4 -translate-y-1/2 text-sea" />
        <input type="email" name="email" required placeholder="Email *" className={fieldClass} />
      </label>
      <label className="relative block">
        <span className="sr-only">Contact number</span>
        <Icon name="phone" className="pointer-events-none absolute top-1/2 left-4 z-10 h-4 w-4 -translate-y-1/2 text-sea" />
        <input name="phone" required placeholder="Contact number *" className={fieldClass} />
      </label>
      <label className="relative block">
        <span className="sr-only">Subject</span>
        <Icon name="file" className="pointer-events-none absolute top-1/2 left-4 z-10 h-4 w-4 -translate-y-1/2 text-sea" />
        <input name="subject" required placeholder="Subject *" className={fieldClass} />
      </label>
      <label className="relative block">
        <span className="sr-only">Company</span>
        <Icon name="building" className="pointer-events-none absolute top-1/2 left-4 z-10 h-4 w-4 -translate-y-1/2 text-sea" />
        <input name="company" required placeholder="Company *" className={fieldClass} />
      </label>
      <label className="relative block">
        <span className="sr-only">Service</span>
        <Icon name="clipboard" className="pointer-events-none absolute top-1/2 left-4 z-10 h-4 w-4 -translate-y-1/2 text-sea" />
        <select name="service" required defaultValue="Lifting equipment examinations" className={`${fieldClass} appearance-none`}>
          {disciplines.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
      <label className="relative block">
        <span className="sr-only">Details</span>
        <Icon name="message" className="pointer-events-none absolute top-4 left-4 z-10 h-4 w-4 text-sea" />
        <textarea name="message" required rows={5} placeholder="Details *" className={`${fieldClass} resize-y`} />
      </label>
      <button
        type="submit"
        className="rounded-2xl bg-sea px-6 py-3 text-sm font-light tracking-wide text-white transition hover:bg-[#245862]"
      >
        Submit
      </button>
    </form>
  );
}
