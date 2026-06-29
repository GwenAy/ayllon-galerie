import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ayllón Gwenaël — UI/UX Designer & Web Designer",
  description:
    "Ayllón Gwenaël — Design pragmatique, impact durable. UI/UX Designer et Web Designer freelance. Graphic Design, interfaces et refonte web.",
  keywords: ["Gwenaël Ayllón", "Ayllón Gwenaël", "Gwenael Ayllon", "Ayllon Gwenael", "Ayllon Galerie", "Galerie Ayllon", "designer UI UX", "designer web", "freelance", "portfolio"],
  authors: [{ name: "Ayllón Gwenaël" }],
  verification: {
    google: "l-m_01hTMHfVwesfwDCrH63_NIIgqKfo2WAPecWQr6g",
  },
  openGraph: {
    title: "Ayllón Gwenaël — UI/UX Designer & Web Designer",
    description: "Design pragmatique, impact durable. UI/UX Designer et Web Designer freelance.",
    url: "https://ayllon-galerie.vercel.app",
    siteName: "Ayllon Galerie",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body>
        <main className="app">{children}</main>
      </body>
    </html>
  );
}