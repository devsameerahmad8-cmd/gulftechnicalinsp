import Image from "next/image";

export function PageHero({
  title,
  kicker,
  image,
  imageAlt = "",
}: {
  title: string;
  kicker?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative isolate min-h-[240px] overflow-hidden border-b border-white/60 sm:min-h-[300px]">
      {image ? (
        <Image src={image} alt={imageAlt} fill priority className="drift object-cover" sizes="100vw" />
      ) : (
        <div className="mesh absolute inset-0" />
      )}
      {image ? <div className="absolute inset-0 bg-white/68" /> : null}
      <div className="relative mx-auto flex min-h-[220px] max-w-5xl flex-col items-center justify-center px-4 py-12 text-center sm:min-h-[280px] sm:px-6 sm:py-16">
        <div className="glass w-full max-w-3xl rounded-[1.5rem] px-6 py-7 sm:rounded-[2rem] sm:px-12 sm:py-8 lg:px-16">
          {kicker ? (
            <p className="mb-3 text-[11px] font-light tracking-[0.28em] text-[#6d8794] uppercase sm:tracking-[0.35em]">{kicker}</p>
          ) : null}
          <h1 className="text-4xl leading-tight font-extralight tracking-tight text-ink sm:text-5xl lg:text-6xl">{title}</h1>
        </div>
      </div>
    </section>
  );
}
