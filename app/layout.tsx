import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Orthéa - L'Orient rencontre la Suisse | Thés Premium",
  description: "Découvrez l'excellence du thé oriental sublimée par la précision suisse. Thés d'exception sélectionnés avec soin, accessibles à tous. Livraison gratuite en Suisse.",
  keywords: "thé, thé oriental, thé suisse, thé premium, Orthéa, thé de luxe accessible, darjeeling, earl grey, sencha, thé vert, thé noir",
  authors: [{ name: "Orthéa" }],
  creator: "Orthéa",
  publisher: "Orthéa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://orthea.ch'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Orthéa - L'Orient rencontre la Suisse",
    description: "Découvrez l'excellence du thé oriental sublimée par la précision suisse. Des thés d'exception à prix accessibles.",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://orthea.ch',
    siteName: "Orthéa",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Orthéa - Thés Premium",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orthéa - L'Orient rencontre la Suisse",
    description: "Découvrez l'excellence du thé oriental sublimée par la précision suisse.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
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
