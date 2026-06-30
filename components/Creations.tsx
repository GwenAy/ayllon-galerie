"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const series = [
  {
    id: 1,
    titre: "Divers",
    affiches: [
      { id: 1, src: "/affiches/Celui-qui-tombe.webp", alt: "Divers 01" },
      { id: 2, src: "/affiches/Fournaise.webp", alt: "Divers 02" },
      { id: 3, src: "/affiches/Frequency.webp", alt: "Divers 03" },
      { id: 4, src: "/affiches/Premium.webp", alt: "Divers 04" },
      { id: 5, src: "/affiches/PPremium.webp", alt: "Divers 05" },
      { id: 6, src: "/affiches/PPMockup.webp", alt: "Divers 06" },
      { id: 7, src: "/affiches/Moeder.webp", alt: "Divers 07" },
      { id: 8, src: "/affiches/Orbit.webp", alt: "Divers 08" },
      { id: 9, src: "/affiches/Room-with-a-view.webp", alt: "Divers 09" },
      { id: 10, src: "/affiches/Sprint.webp", alt: "Divers 10" },
      { id: 11, src: "/affiches/Totem.webp", alt: "Divers 11" },
    ],
  },
];

export default function Projets() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <section id="creations" className="section border-b border-[var(--color-border)]">
      <div className="container">

        {/* HEADER */}
        <div className="flex items-end justify-between mb-28 pb-12 border-b border-[var(--color-border)]">
          <h2 className="text-xs tracking-[0.2em] uppercase font-normal">
            Créations
          </h2>
          <span className="text-[0.7rem] tracking-[0.1em]">
            {series.length} séries
          </span>
        </div>

        {/* SÉRIES */}
        <div className="flex flex-col">
          {series.map((serie, index) => (
            <div
              key={serie.id}
              className={index !== 0 ? "border-t border-[var(--color-border)] pt-16 mt-16" : ""}
            >
              <p className="text-xs tracking-[0.2em] uppercase mb-10">
                {serie.titre}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {serie.affiches.map((affiche) => (
                  <button
                    key={affiche.id}
                    onClick={() => setLightbox(affiche)}
                    className="relative aspect-[210/297] w-full overflow-hidden cursor-pointer group"
                  >
                    <Image
                      src={affiche.src}
                      alt={affiche.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[300] bg-white flex items-center justify-center p-8"
          onClick={() => setLightbox(null)}
          style={{ touchAction: "none" }}
        >
          {/* BOUTON FERMER — mobile uniquement */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-xs tracking-[0.2em] uppercase md:hidden"
          >
            Fermer
          </button>

          <div
            className="relative h-[70vh] md:h-[85vh] aspect-[210/297]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}