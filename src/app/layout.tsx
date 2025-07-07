import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quiz de la Honte | Testez vos connaissances et affrontez votre ignorance !",
  description: "Quiz de culture générale moderne, fun et sans pitié. Testez vos connaissances sur l'histoire, la géopolitique, l'écologie, l'astronomie, les capitales et plus encore. Score final, interface sombre/jaune élégante, responsive, et UX ultra-moderne.",
  keywords: [
    "quiz",
    "culture générale",
    "test de connaissances",
    "histoire",
    "géopolitique",
    "écologie",
    "astronomie",
    "capitales",
    "score",
    "jeu éducatif",
    "quiz moderne",
    "quiz responsive",
    "quiz sombre",
    "quiz jaune",
    "Quiz de la Honte"
  ],
  authors: [{ name: "José-Marie Laourou", url: "https://github.com/angelinDev" }],
  openGraph: {
    title: "Quiz de la Honte | Testez vos connaissances et affrontez votre ignorance !",
    description: "Quiz de culture générale moderne, fun et sans pitié. Testez vos connaissances sur l'histoire, la géopolitique, l'écologie, l'astronomie, les capitales et plus encore.",
    url: "https://quizapp.jose-marie.fr/",
    siteName: "Quiz de la Honte",
    images: [
      {
        url: "https://quizapp.jose-marie.fr/image.png",
        width: 1200,
        height: 630,
        alt: "Quiz de la Honte - Testez vos connaissances !"
      }
    ],
    locale: "fr_FR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Quiz de la Honte | Testez vos connaissances et affrontez votre ignorance !",
    description: "Quiz de culture générale moderne, fun et sans pitié. Testez vos connaissances sur l'histoire, la géopolitique, l'écologie, l'astronomie, les capitales et plus encore.",
    images: ["/file.svg"]
  },
  metadataBase: new URL("https://quizapp.jose-marie.fr/")
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
