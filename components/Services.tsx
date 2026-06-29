"use client";

const services = [
  {
    numero: "01",
    titre: "UI/UX Design",
    description:
      "Conception d'interfaces et d'expériences utilisateur. Du wireframe au prototype Figma, pensé pour convertir.",
  },
  {
    numero: "02",
    titre: "Graphisme",
    description:
      "Identités visuelles, affiches, print. Un point de vue graphique assumé, adaptable à chaque projet.",
  },
  {
    numero: "03",
    titre: "Développement Web",
    description:
      "Intégration et développement front-end. Sur mesure selon le besoin.",
  },
  {
    numero: "04",
    titre: "Intégration Web",
    description:
      "Création et refonte de sites WordPress. Du site vitrine au site e-commerce, livré clé en main.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section border-b border-[var(--color-border)]"
    >
      <div className="container">

        {/* HEADER */}
        <div className="mb-28 pb-12 border-b border-[var(--color-border)]">
          <h2 className="text-xs tracking-[0.2em] uppercase font-normal">
            Services
          </h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 border-t border-[var(--color-border)]">

          {services.map((service, index) => (
            <div
              key={service.numero}
              className={`
                group relative p-10 md:p-14 border-[var(--color-border)]
                ${index % 2 === 0 ? "md:border-r" : ""}
                ${index < 2 ? "border-b md:border-b" : ""}
                transition-all duration-300
              `}
            >
              <span className="block text-xs tracking-[0.15em] mb-8">
                {service.numero}
              </span>

              <h3 className="text-xl md:text-2xl uppercase tracking-[0.05em] font-medium mb-4 group-hover:translate-x-1 transition-transform duration-300">
                {service.titre}
              </h3>

              <p className="text-sm md:text-[0.9rem] leading-relaxed max-w-[90%]">
                {service.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}