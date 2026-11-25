"use client";

import { FormEvent, useState } from "react";
import { Icon, type IconName } from "@/components/Icons";

const types = [
  { id: "equipment", label: "Equipment Certification" },
  { id: "operator", label: "Operator Certification" },
  { id: "training", label: "Training Certification" },
] as const;

type Kind = (typeof types)[number]["id"];

const records: Record<
  Kind,
  {
    card: string;
    sticker: string;
    holder: string;
    scope: string;
    issued: string;
    office: string;
    status: string;
  }
> = {
  equipment: {
    card: "GTI-2048",
    sticker: "ST-1180",
    holder: "Sample Marine Works",
    scope: "Mobile crane examination",
    issued: "12 March 2026",
    office: "Dammam",
    status: "Valid",
  },
  operator: {
    card: "GTI-OP-441",
    sticker: "ST-2204",
    holder: "Sample Rigger",
    scope: "Rigger, personal certification",
    issued: "4 February 2026",
    office: "Jubail",
    status: "Valid",
  },
  training: {
    card: "GTI-TR-90",
    sticker: "ST-3091",
    holder: "Sample Supervisor",
    scope: "Lifting supervisor course",
    issued: "19 January 2026",
    office: "Riyadh",
    status: "Valid",
  },
};

const fieldClass =
  "w-full rounded-2xl border border-white/80 bg-white/60 px-4 py-3.5 text-sm font-light text-ink outline-none placeholder:text-[#8aa0ab] focus:border-sea/40";

function Label({ icon, children }: { icon: IconName; children: string }) {
  return (
    <span className="mb-2 flex items-center gap-2 text-sm font-light text-ink">
      <Icon name={icon} className="h-4 w-4 text-sea" />
      {children}
    </span>
  );
}

export function CertificateVerifyForm() {
  const [kind, setKind] = useState<Kind>("equipment");
  const [card, setCard] = useState("");
  const [sticker, setSticker] = useState("");
  const [result, setResult] = useState<"idle" | "found" | "sticker" | "missing">("idle");

  const sample = records[kind];

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cardMatch = card.trim().toUpperCase() === sample.card;
    const stickerValue = sticker.trim().toUpperCase();
    if (!cardMatch) {
      setResult("missing");
      return;
    }
    if (stickerValue && stickerValue !== sample.sticker) {
      setResult("sticker");
      return;
    }
    setResult("found");
  }

  return (
    <div className="glass rounded-[1.5rem] p-6 sm:p-8">
      <h3 className="text-2xl font-extralight tracking-tight text-ink">Certificate verification</h3>
      <p className="mt-2 text-sm leading-7 font-light text-muted">
        Choose the certificate type, then enter the number printed on the card and the sticker.
      </p>
      <form onSubmit={onSubmit} className="mt-6 space-y-6">
        <fieldset>
          <legend className="text-sm font-light text-ink">Certificate type</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {types.map((type) => {
              const selected = kind === type.id;
              return (
                <button
                  key={type.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => {
                    setKind(type.id);
                    setResult("idle");
                  }}
                  className={`rounded-xl border px-4 py-2.5 text-sm font-light transition ${
                    selected
                      ? "border-sea bg-white text-sea shadow-sm"
                      : "border-[#c5d5dc] bg-white/80 text-[#3d5562] hover:border-sea/40 hover:text-sea"
                  }`}
                >
                  {type.label}
                </button>
              );
            })}
          </div>
        </fieldset>
        <div className="grid gap-4 sm:grid-cols-2">
          <label>
            <Label icon="file">Certification / card number</Label>
            <input
              value={card}
              onChange={(event) => setCard(event.target.value)}
              required
              placeholder={sample.card}
              className={fieldClass}
            />
          </label>
          <label>
            <Label icon="badge">Sticker number</Label>
            <input
              value={sticker}
              onChange={(event) => setSticker(event.target.value)}
              placeholder={sample.sticker}
              className={fieldClass}
            />
          </label>
        </div>
        <button
          type="submit"
          className="rounded-2xl bg-sea px-6 py-3 text-sm font-light text-white transition hover:bg-[#245862]"
        >
          Verify
        </button>
      </form>
      <p className="mt-4 text-xs font-light text-[#7d93a0]">
        This desk is a demonstration. For {types.find((type) => type.id === kind)?.label}, try {sample.card} and sticker{" "}
        {sample.sticker}.
      </p>
      {result === "found" ? (
        <dl className="mt-6 grid gap-4 rounded-[1.5rem] border border-white/80 bg-white/50 p-6 sm:grid-cols-2">
          <div>
            <dt className="text-[11px] font-light tracking-[0.22em] text-[#7d93a0] uppercase">Certificate</dt>
            <dd className="mt-1 font-light text-ink">{sample.card}</dd>
          </div>
          <div>
            <dt className="text-[11px] font-light tracking-[0.22em] text-[#7d93a0] uppercase">Status</dt>
            <dd className="mt-1 font-light text-sea">{sample.status}</dd>
          </div>
          <div>
            <dt className="text-[11px] font-light tracking-[0.22em] text-[#7d93a0] uppercase">Sticker</dt>
            <dd className="mt-1 font-light text-ink">{sample.sticker}</dd>
          </div>
          <div>
            <dt className="text-[11px] font-light tracking-[0.22em] text-[#7d93a0] uppercase">Holder</dt>
            <dd className="mt-1 font-light text-ink">{sample.holder}</dd>
          </div>
          <div>
            <dt className="text-[11px] font-light tracking-[0.22em] text-[#7d93a0] uppercase">Scope</dt>
            <dd className="mt-1 font-light text-ink">{sample.scope}</dd>
          </div>
          <div>
            <dt className="text-[11px] font-light tracking-[0.22em] text-[#7d93a0] uppercase">Issued</dt>
            <dd className="mt-1 font-light text-ink">
              {sample.issued}, {sample.office}
            </dd>
          </div>
        </dl>
      ) : null}
      {result === "sticker" ? (
        <p className="mt-6 rounded-[1.5rem] border border-white/80 bg-white/45 px-5 py-4 text-sm font-light text-muted">
          The card number is on file, and the sticker number does not match it.
        </p>
      ) : null}
      {result === "missing" ? (
        <p className="mt-6 rounded-[1.5rem] border border-white/80 bg-white/45 px-5 py-4 text-sm font-light text-muted">
          No record matches that number for this certificate type. Check the characters and try again.
        </p>
      ) : null}
    </div>
  );
}
