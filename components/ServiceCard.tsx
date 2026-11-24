import Image from "next/image";
import Link from "next/link";
import { IconBadge, type IconName } from "@/components/Icons";

export function ServiceCard({
  href,
  label,
  copy,
  icon,
  image,
  alt,
  level = "h3",
  action = "Read more",
}: {
  href: string;
  label: string;
  copy: string;
  icon: IconName;
  image: string;
  alt: string;
  level?: "h2" | "h3";
  action?: string;
}) {
  const Title = level;

  return (
    <Link href={href} className="glass group flex flex-col overflow-hidden rounded-[1.5rem]">
      <div className="relative h-40 overflow-hidden sm:h-44">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <IconBadge name={icon} />
        <Title className="mt-5 text-2xl font-extralight text-ink">{label}</Title>
        <p className="mt-3 flex-1 text-sm leading-7 font-light text-muted">{copy}</p>
        <span className="mt-6 text-sm font-light text-sea">{action}</span>
      </div>
    </Link>
  );
}
