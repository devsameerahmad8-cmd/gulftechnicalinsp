"use client";

import { FormEvent, type ReactNode, useState } from "react";
import { Icon, type IconName } from "@/components/Icons";

const fieldClass =
  "w-full rounded-2xl border border-white/80 bg-white/55 py-3.5 pr-4 pl-11 text-sm font-light text-ink outline-none backdrop-blur placeholder:text-[#8aa0ab] focus:border-sea/40";

function Field({
  icon,
  children,
}: {
  icon: IconName;
  children: ReactNode;
}) {
  return (
    <label className="relative block">
      <Icon name={icon} className="pointer-events-none absolute top-1/2 left-4 z-10 h-4 w-4 -translate-y-1/2 text-sea" />
      {children}
    </label>
  );
}

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-[1.5rem] border border-white/80 bg-white/45 px-6 py-12 text-center backdrop-blur-xl">
        <p className="text-2xl font-extralight text-ink">Message received</p>
        <p className="mt-3 text-sm leading-7 font-light text-muted">
          A coordinator will reply during the next working window. If the matter is urgent, call the duty desk.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-light text-sea underline decoration-sand underline-offset-4"
        >
          Send another note
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Field icon="user">
        <span className="sr-only">Name</span>
        <input name="name" required placeholder="Name *" className={fieldClass} />
      </Field>
      <Field icon="mail">
        <span className="sr-only">Email address</span>
        <input type="email" name="email" required placeholder="Email Address *" className={fieldClass} />
      </Field>
      <Field icon="file">
        <span className="sr-only">Subject</span>
        <input name="subject" placeholder="Subject" className={fieldClass} />
      </Field>
      <label className="relative block">
        <span className="sr-only">Comment or message</span>
        <Icon name="message" className="pointer-events-none absolute top-4 left-4 z-10 h-4 w-4 text-sea" />
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Comment or Message *"
          className={`${fieldClass} resize-y`}
        />
      </label>
      <label className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/45 px-4 py-3 text-sm font-light text-[#3d5562] backdrop-blur">
        <input type="checkbox" required className="h-4 w-4 accent-[#2c6d78]" />
        I am not a robot
      </label>
      <button
        type="submit"
        className="rounded-2xl bg-sea px-6 py-3 text-sm font-light tracking-wide text-white transition hover:bg-[#245862]"
      >
        Send Message
      </button>
    </form>
  );
}
