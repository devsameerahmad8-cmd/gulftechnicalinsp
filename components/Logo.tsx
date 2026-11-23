import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
      <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-white/80 bg-white/55 shadow-sm backdrop-blur-xl sm:h-11 sm:w-11">
        <span className="text-lg font-extralight tracking-tight text-sea">G</span>
        <span className="absolute -right-0.5 -bottom-0.5 h-2.5 w-2.5 rounded-full bg-sand" />
      </span>
      <span className="min-w-0">
        <span className="block text-xl leading-none font-extralight tracking-wide text-ink sm:text-[1.35rem]">
          Gulf
        </span>
        <span className="mt-1 block truncate text-[9px] font-light tracking-[0.16em] text-[#7d93a0] uppercase sm:text-[10px] sm:tracking-[0.28em]">
          Technical Inspection
        </span>
      </span>
    </Link>
  );
}
