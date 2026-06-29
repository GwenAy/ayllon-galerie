"use client";

export default function Hero() {
  return (
          <section
        id="home"
        className="relative min-h-[60vh] lg:min-h-screen flex flex-col justify-end border-b border-[var(--color-border)] section-lg"
      >
        <div className="container">

          <span className="absolute top-[4.5rem] right-6 md:right-12 text-[0.7rem] tracking-[0.2em] uppercase font-light">
            Portfolio — 2026
          </span>

          <div>
            <p className="mb-8 text-xs tracking-[0.2em] uppercase">
              UI/UX Designer & Web Designer — Freelance
            </p>

            <h1 className="mb-12 max-w-[90vw] uppercase font-bold leading-[0.95] tracking-[-0.03em] text-[clamp(3.5rem,10vw,9rem)]">
              Design pragmatique.
              <br />
              <span className="font-light">Impact durable.</span>
            </h1>

            <div className="flex flex-wrap items-center gap-4 md:gap-12">
              <a
                href="#creations"
                className="text-xs tracking-[0.15em] uppercase font-medium border-b border-current pb-1 hover:opacity-60 transition"
              >
                Voir les créations
              </a>

              <span className="text-[0.7rem] tracking-[0.1em] uppercase font-light">
                Graphisme · UI/UX · Web
              </span>
            </div>

          </div>
        </div>
      </section>
  );
}