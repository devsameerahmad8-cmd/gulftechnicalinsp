import type { ReactNode, SVGProps } from "react";

export type IconName =
  | "phone"
  | "mail"
  | "pin"
  | "clipboard"
  | "users"
  | "shield"
  | "file"
  | "clock"
  | "check"
  | "building"
  | "anchor"
  | "bolt"
  | "hook"
  | "search"
  | "user"
  | "message"
  | "badge"
  | "gauge"
  | "flask";

type Props = SVGProps<SVGSVGElement> & { name: IconName };

export function Icon({ name, className = "h-5 w-5", ...props }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {paths[name]}
    </svg>
  );
}

export function IconBadge({ name }: { name: IconName }) {
  return (
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/80 bg-white/60 text-sea">
      <Icon name={name} />
    </span>
  );
}

const paths: Record<IconName, ReactNode> = {
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.55 2.81.68A2 2 0 0 1 22 16.92z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.4" />
    </>
  ),
  clipboard: (
    <>
      <rect x="6" y="4" width="12" height="16" rx="2" />
      <path d="M9 4.5h6V7H9zM9 11h6M9 15h4" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <circle cx="16.5" cy="9" r="2.2" />
      <path d="M3.5 19c.7-3 3-4.5 5.5-4.5S14.3 16 15 19" />
      <path d="M14.2 14.7c1.5-.4 3 .2 4 1.5.6.8 1 1.7 1.2 2.8" />
    </>
  ),
  shield: <path d="M12 3 5 6v6c0 4.2 2.8 7.2 7 9 4.2-1.8 7-4.8 7-9V6l-7-3z" />,
  file: (
    <>
      <path d="M7 3h7l5 5v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v5l3 2" />
    </>
  ),
  check: <path d="M5 12.5 9.2 17 19 7" />,
  building: (
    <>
      <path d="M4 20h16M6 20V5h8v15M14 9h4v11" />
      <path d="M8.5 8.5h2M8.5 12h2M8.5 15.5h2" />
    </>
  ),
  anchor: (
    <>
      <circle cx="12" cy="6" r="2" />
      <path d="M12 8v11M8 12H5.5A6.5 6.5 0 0 0 18.5 12H16" />
    </>
  ),
  bolt: <path d="M13 2 5 13h6l-1 9 9-13h-6l0-7z" />,
  hook: (
    <>
      <path d="M8 4h8M12 4v7" />
      <path d="M8.5 11h7v3.2a3.5 3.5 0 0 1-7 0V14" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-3.6-3.6" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="3" />
      <path d="M5 19c1.1-3.2 3.4-5 7-5s5.9 1.8 7 5" />
    </>
  ),
  message: <path d="M5 6h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H9l-4 3v-3H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z" />,
  badge: (
    <>
      <circle cx="12" cy="8.5" r="4.5" />
      <path d="M8.2 12.2 7 20.5 12 18l5 2.5-1.2-8.3" />
    </>
  ),
  gauge: (
    <>
      <path d="M5 16a7 7 0 1 1 14 0" />
      <path d="M12 16 15.2 11" />
      <circle cx="12" cy="16" r="1" />
    </>
  ),
  flask: (
    <>
      <path d="M9 3h6M10 3v5.5L6 19.2A2 2 0 0 0 7.8 22h8.4a2 2 0 0 0 1.8-2.8L14 8.5V3" />
      <path d="M8.2 14.5h7.6" />
    </>
  ),
};
