const items = [
  {
    label: "Facebook",
    path: "M14 8h2V5h-2c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.2l.8-3H13V9c0-.6.4-1 1-1z",
  },
  {
    label: "LinkedIn",
    path: "M6.5 9.5H4V20h2.5V9.5zM5.2 4C4.3 4 3.6 4.7 3.6 5.6s.7 1.6 1.6 1.6 1.6-.7 1.6-1.6S6.1 4 5.2 4zM20 20h-2.5v-5.6c0-1.6-.6-2.6-2-2.6-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9V20H11V9.5h2.4v1.4c.4-.7 1.3-1.7 3.2-1.7 2.3 0 4 1.5 4 4.8V20z",
  },
  {
    label: "X",
    path: "M6 5.5h2.4l3.3 4.4 3.8-4.4H18l-5.1 5.8L18.4 18.5h-2.4l-3.6-4.8-4.2 4.8H6.2l5.4-6.2L6 5.5z",
  },
];

export function SocialLinks() {
  return (
    <div className="flex items-center gap-2">
      {items.map((item) => (
        <a
          key={item.label}
          href="#"
          aria-label={item.label}
          className="grid h-9 w-9 place-items-center rounded-full border border-white/80 bg-white/55 text-sea backdrop-blur-xl transition hover:bg-white"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
            <path d={item.path} />
          </svg>
        </a>
      ))}
    </div>
  );
}
