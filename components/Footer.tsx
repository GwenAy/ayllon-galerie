"use client";

export default function Footer() {
  const annee = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] py-8">
      <div className="container flex items-center justify-between">

        <span className="text-xs tracking-[0.1em] uppercase">
          © {annee} Ayllón Gwenaël
        </span>

        <span className="text-xs tracking-[0.1em] uppercase">
          UI/UX Designer & Web Designer
        </span>

      </div>
    </footer>
  );
}