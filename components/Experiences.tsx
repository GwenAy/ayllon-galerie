"use client";

const experiences = [
  {
    periode: "2026 — Présent",
    poste: "Freelance",
    structure: "Indépendant",
    description:
      "Design graphique, UI/UX et développement web. Identités visuelles, interfaces, refontes de sites.",
  },
  {
    periode: "2024 — 2025",
    poste: "Concepteur Designer UI",
    structure: "Formation",
    description:
      "Suite et fin de cursus, obtention du titre CDUI, Design global, Figma, Wordpress, B2B.",
  },
  {
    periode: "2024",
    poste: "Intégrateur WEB",
    structure: "CAC Tennis",
    description:
      "Création de l'identité visuelle / intégration backend & frontend pour le site du club de tennis Castelsarrasin.",
  },
  {
    periode: "2023 — 2024",
    poste: "Graphiste",
    structure: "Pupilles de l'Enseignement Public",
    description:
      "Conception de supports de communication print et digitaux (affiches, flyers, visuels), dans le respect de l'identité visuelle de l'association.",
  },
];

export default function Experiences() {
  return (
    <section
      id="experiences"
      className="section border-b border-[var(--color-border)]"
    >
      <div className="container">

        {/* HEADER */}
        <div className="mb-28 pb-12 border-b border-[var(--color-border)]">
          <h2 className="text-xs tracking-[0.2em] uppercase font-normal">
            Expériences
          </h2>
        </div>

        {/* LIST */}
        <div>
          {experiences.map((exp, index) => (
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
                  {exp.periode}
                </span>
                <span className="text-xs tracking-[0.15em] uppercase">
                  {exp.structure}
                </span>
              </div>

              {/* RIGHT */}
              <div>
                <h3 className="text-lg md:text-xl uppercase tracking-[0.05em] font-medium mb-4 group-hover:translate-x-1 transition-transform duration-300">
                  {exp.poste}
                </h3>

                <p className="text-sm md:text-[0.9rem] leading-relaxed max-w-[40rem]">
                  {exp.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}