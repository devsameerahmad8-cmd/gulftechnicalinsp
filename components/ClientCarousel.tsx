"use client";

import { useState } from "react";

const marks = [
  "Energy",
  "Marine",
  "Civil",
  "Plants",
  "Ports",
  "Utilities",
  "Shutdowns",
  "Yards",
  "Logistics",
  "Workshops",
  "Infrastructure",
  "Maintenance",
];

export function ClientCarousel() {
  const [page, setPage] = useState(0);
  const perPage = 4;
  const pages = Math.ceil(marks.length / perPage);
  const start = page * perPage;
  const visible = marks.slice(start, start + perPage);

  return (
    <div>
      <div key={page} className="swap grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {visible.map((mark) => (
          <div key={mark} className="glass grid h-24 place-items-center rounded-2xl px-2 text-center sm:h-28 sm:px-3">
            <span className="text-sm font-extralight tracking-wide text-sea sm:text-lg">{mark}</span>
          </div>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => setPage((value) => (value - 1 + pages) % pages)}
          className="min-h-11 rounded-full border border-white/80 bg-white/70 px-5 py-2 text-sm font-light text-sea transition hover:-translate-y-0.5"
        >
          Previous
        </button>
        <div className="flex gap-1.5" aria-hidden="true">
          {Array.from({ length: pages }, (_, index) => (
            <span key={index} className={`h-1.5 w-1.5 rounded-full ${index === page ? "bg-sea" : "bg-sand/70"}`} />
          ))}
        </div>
        <button
          type="button"
          onClick={() => setPage((value) => (value + 1) % pages)}
          className="min-h-11 rounded-full border border-white/80 bg-white/70 px-5 py-2 text-sm font-light text-sea transition hover:-translate-y-0.5"
        >
          Next
        </button>
      </div>
    </div>
  );
}
