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
  title: {
    default: "DigitalRiseHer Initiative",
    template: "%s | DigitalRiseHer",
  },
  description:
    "DigitalRiseHer empowers girls in underserved Ogun State communities with hands-on digital skills, mentorship, and confidence.",

  icons: {
    icon: "/favicon.png",
  },

  openGraph: {
    title: "DigitalRiseHer Initiative",
    description:
      "Empowering girls in underserved communities through hands-on digital skills and mentorship.",
    url: "https://digitalriseher.netlify.app", // replace if Netlify gives a different URL
    siteName: "DigitalRiseHer",
    images: [
      {
        url: "/social-preview.png",
        width: 1200,
        height: 630,
        alt: "DigitalRiseHer Initiative – Empowering Girls Through Digital Skills",
      },
    ],
    locale: "en_NG",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DigitalRiseHer Initiative",
    description:
      "Empowering girls through digital skills, mentorship, and opportunity.",
    images: ["/social-preview.png"],
  },
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
