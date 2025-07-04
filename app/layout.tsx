import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Crimson_Text, Dancing_Script } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/contexts/CartContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const crimson = Crimson_Text({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-crimson",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
});

export const metadata: Metadata = {
  title: "Orthéa - L'Orient rencontre la Suisse",
  description: "Découvrez l'excellence du thé oriental sublimée par la précision suisse. Des thés d'exception à prix accessibles.",
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
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${playfair.variable} ${montserrat.variable} ${crimson.variable} ${dancing.variable}`}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
