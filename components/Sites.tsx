"use client";

const sites = [
  {
    annee: "2025",
    nom: "AG",
    categorie: "Experiment",
    description:
      "Création d'expérience / Tests en cours.",
    url: "https://ayllon-gwenael.vercel.app/",
  },
  {
    annee: "2024",
    nom: "CAC Tennis",
    categorie: "Club sportif",
    description:
      "Création de l'identité visuelle et développement complet du site du club de tennis de Castelsarrasin — réservation de courts, présentation des cours et de l'équipe.",
    url: "https://tennisclubcastelsarrasin.fr/",
  },
];

export default function Sites() {
  return (
    <section
      id="sites"
      className="section border-b border-[var(--color-border)]"
    >
      <div className="container">

        {/* HEADER */}
        <div className="mb-28 pb-12 border-b border-[var(--color-border)]">
          <h2 className="text-xs tracking-[0.2em] uppercase font-normal">
            Sites réalisés
          </h2>
        </div>

        {/* LIST */}
        <div>
          {sites.map((site, index) => (
            <div
              key={index}
              className="
                grid md:grid-cols-[14rem_1fr]
                gap-10 py-14 border-b border-[var(--color-border)]
                group
              "
            >

              {/* LEFT */}
              <div className="flex flex-col gap-2">
                <span className="text-xs tracking-[0.1em]">
                  {site.annee}
                </span>
                <span className="text-xs tracking-[0.15em] uppercase">
                  {site.categorie}
                </span>
              </div>

              {/* RIGHT */}
              <div>
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 mb-4"
                >
                  <h3 className="text-lg md:text-xl uppercase tracking-[0.05em] font-medium group-hover:translate-x-1 transition-transform duration-300">
                    {site.nom}
                  </h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-40 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all duration-300"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>

                <p className="text-sm md:text-[0.9rem] leading-relaxed max-w-[40rem]">
                  {site.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
