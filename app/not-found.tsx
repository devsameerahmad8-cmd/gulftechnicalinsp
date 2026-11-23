import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[50vh] max-w-xl flex-col items-center justify-center px-6 text-center">
      <p className="text-[11px] font-light tracking-[0.35em] text-[#6d8794] uppercase">Missing page</p>
      <h1 className="mt-3 text-3xl font-extralight text-ink sm:text-5xl">That page is not on the site.</h1>
      <Link href="/" className="mt-6 text-sm font-light text-sea underline decoration-sand underline-offset-4">
        Back home
      </Link>
    </section>
  );
}
