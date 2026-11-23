"use client";

import { FormEvent, useState } from "react";

const sample = {
  id: "GTI-2048",
  holder: "Sample Marine Works",
  scope: "Lifting gear inspection",
  issued: "12 March 2026",
  office: "Dammam",
  status: "Valid",
};

export function VerifyForm() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<"idle" | "found" | "missing">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult(query.trim().toUpperCase() === sample.id ? "found" : "missing");
  }

  return (
    <div className="glass rounded-[2rem] p-8 sm:p-10">
      <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
        <label className="flex-1">
          <span className="sr-only">Certificate number</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Certificate number, for example GTI-2048"
            className="w-full rounded-2xl border border-white/80 bg-white/60 px-4 py-3.5 text-sm font-light text-ink outline-none placeholder:text-[#8aa0ab] focus:border-sea/40"
          />
        </label>
        <button
          type="submit"
          className="rounded-2xl bg-sea px-6 py-3 text-sm font-light text-white transition hover:bg-[#245862]"
        >
          Check record
        </button>
      </form>
      <p className="mt-4 text-xs font-light text-[#7d93a0]">
        This desk is a demonstration. Try {sample.id} to preview a sample record.
      </p>
      {result === "found" ? (
        <dl className="mt-6 grid gap-4 rounded-[1.5rem] border border-white/80 bg-white/50 p-6 sm:grid-cols-2">
          <div>
            <dt className="text-[11px] font-light tracking-[0.22em] text-[#7d93a0] uppercase">Certificate</dt>
            <dd className="mt-1 font-light text-ink">{sample.id}</dd>
          </div>
          <div>
            <dt className="text-[11px] font-light tracking-[0.22em] text-[#7d93a0] uppercase">Status</dt>
            <dd className="mt-1 font-light text-sea">{sample.status}</dd>
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
            <dd className="mt-1 font-light text-ink">{sample.issued}</dd>
          </div>
          <div>
            <dt className="text-[11px] font-light tracking-[0.22em] text-[#7d93a0] uppercase">Office</dt>
            <dd className="mt-1 font-light text-ink">{sample.office}</dd>
          </div>
        </dl>
      ) : null}
      {result === "missing" ? (
        <p className="mt-6 rounded-[1.5rem] border border-white/80 bg-white/45 px-5 py-4 text-sm font-light text-muted">
          No record matches that number. Check the characters and try again, or call the office that issued the certificate.
        </p>
      ) : null}
    </div>
  );
}
