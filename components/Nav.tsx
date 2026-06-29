"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Créations", href: "#creations" },
    { label: "Services", href: "#services" },
    { label: "Expériences", href: "#experiences" },
    { label: "Sites", href: "#sites" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    };
  }, [open]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      {/* NAVBAR */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-bg py-6 md:py-7 border-b border-[var(--color-border)">
        <div className="container grid grid-cols-3 items-center">

          {/* LEFT */}
          <button
            onClick={() => setOpen(true)}
            className="justify-self-start text-xs tracking-[0.2em] uppercase cursor-pointer hover:opacity-60 transition"
          >
            <span className="md:hidden">☰</span>
            <span className="hidden md:inline">Menu</span>
          </button>

          {/* CENTER */}
          <Link
            href="/"
            onClick={() => {
              setOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="justify-self-center text-xs tracking-[0.25em] uppercase hover:opacity-60 transition"
          >
            AYLLON
          </Link>

          {/* RIGHT */}
          <a
            href="https://www.linkedin.com/in/gwenael-ayllon/"
            target="_blank"
            rel="noopener noreferrer"
            className="justify-self-end text-xs tracking-[0.2em] uppercase hover:opacity-60 transition"
          >
            LinkedIn
          </a>

        </div>
      </nav>

      {/* OVERLAY MENU */}
      {open && (
        <div
          className="fixed inset-0 z-[200] bg-bg flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          

          {/* MENU CENTER */}
          <div
            className="flex flex-col items-center justify-center gap-8"
            onClick={(e) => e.stopPropagation()}
          >
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-xl md:text-2xl tracking-[0.05em] uppercase hover:opacity-60 transition"
              >
                {item.label}
              </a>
            ))}

            {/* LINKEDIN (overlay version) */}
            <a
              href="https://www.linkedin.com/in/gwenael-ayllon/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 text-xs tracking-[0.2em] uppercase opacity-60"
            >
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </>
  );
}