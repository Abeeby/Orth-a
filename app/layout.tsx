import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Crimson_Text, Dancing_Script } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-crimson",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dancing",
});

export const metadata: Metadata = {
  title: "Orthéa - L'Orient rencontre la Suisse",
  description: "Découvrez l'excellence du thé oriental sublimée par la précision suisse. Thés premium accessibles à tous.",
  keywords: "thé, thé oriental, thé suisse, thé premium, Orthéa, thé de luxe accessible",
  authors: [{ name: "Orthéa" }],
  openGraph: {
    title: "Orthéa - L'Orient rencontre la Suisse",
    description: "Découvrez l'excellence du thé oriental sublimée par la précision suisse.",
    type: "website",
    locale: "fr_CH",
    siteName: "Orthéa",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orthéa - L'Orient rencontre la Suisse",
    description: "Découvrez l'excellence du thé oriental sublimée par la précision suisse.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${playfairDisplay.variable} ${montserrat.variable} ${crimsonText.variable} ${dancingScript.variable}`}
    >
      <body className="antialiased scrollbar-thin">
        {children}
      </body>
    </html>
  );
}
