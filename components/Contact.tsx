"use client";

type ContactItem = {
  label: string;
  value: string;
  link: string | null;
};

const contactItems: ContactItem[] = [
  {
    label: "Disponibilité",
    value: "Ouvert aux missions",
    link: null,
  },
  {
    label: "Type de mission",
    value: "Freelance — Ponctuel ou long terme",
    link: null,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/gwenael-ayllon",
    link: "https://www.linkedin.com/in/gwenael-ayllon/",
  },
];

export default function Contact() {
  return (
        <section
      id="contact"
      className="section-lg border-b border-black/10"
    >
      <div className="container">

        {/* HEADER */}
        <div className="mb-28 pb-12 border-b border-black/10">
          <h2 className="text-xs tracking-[0.2em] uppercase font-normal">
            Contact
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-end">

          {/* LEFT */}
          <div>
            <p className="text-[clamp(2.5rem,5vw,4.5rem)] tracking-[-0.02em] uppercase font-medium mb-12">
              <span className="block leading-[1.1]">Un projet ?</span>
              <span className="block leading-[1.1] mt-4 font-light">Discutons-en.</span>
            </p>

            <a
              href="mailto:gwenael.ayllon.formasup82@gmail.com"
              className="text-xs tracking-[0.15em] uppercase border-b border-current pb-1 hover:opacity-60 transition"
            >
              ayllon.galerie@gmail.com
            </a>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col">
            {contactItems.map((item, index) => (
              <div
                key={item.label}
                className={`grid grid-cols-[10rem_1fr] gap-6 py-6 ${
                  index !== 0 ? "border-t border-black/10" : ""
                }`}
              >
                <span className="text-xs tracking-[0.1em] uppercase text-black/50">
                  {item.label}
                </span>

                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    className="text-sm font-light hover:opacity-60 transition"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-sm font-light">
                    {item.value}
                  </span>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}