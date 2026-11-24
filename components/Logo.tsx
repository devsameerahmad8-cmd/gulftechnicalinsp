import Link from "next/link";

export function Mark({ className = "h-12 w-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 112 112" className={className} aria-hidden="true">
      <path
        d="M53 8 L89 20 L93 32 L93 54 C93 78 75 94 53 104 C31 94 13 78 13 54 L13 32 L17 20 Z"
        fill="none"
        stroke="#c4a07a"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M50 4 L86 16 L90 28 L90 50 C90 74 72 90 50 100 C28 90 10 74 10 50 L10 28 L14 16 Z"
        fill="none"
        stroke="#1c3340"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M50 15 L77 25 L80 34 L80 50 C80 68 67 80 50 88 C33 80 20 68 20 50 L20 34 L23 25 Z"
        fill="none"
        stroke="#2c6d78"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <text
        x="50"
        y="46"
        textAnchor="middle"
        fill="#1c3340"
        fontFamily="inherit"
        fontSize="15"
        fontWeight="500"
        letterSpacing="0.4"
      >
        GTI
      </text>
      <path
        d="M32 66 L48 84 L104 32"
        fill="none"
        stroke="#2c6d78"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
      <Mark className="h-12 w-11 shrink-0 sm:h-14 sm:w-[3.15rem]" />
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
