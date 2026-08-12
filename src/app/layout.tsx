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
  title: "Malick FAYE | Data Analyst & Business Intelligence",
  description:
    "Portfolio professionnel de Malick FAYE, Data Analyst spécialisé en Business Intelligence, Power BI, SQL, Python et Machine Learning.",
  keywords: [
    "Malick FAYE",
    "Data Analyst",
    "Business Intelligence",
    "Power BI",
    "SQL",
    "Python",
    "Machine Learning",
    "Data Analysis",
  ],
  authors: [
    {
      name: "Malick FAYE",
    },
  ],
  creator: "Malick FAYE",
  openGraph: {
    title: "Malick FAYE | Data Analyst & Business Intelligence",
    description:
      "Portfolio professionnel de Malick FAYE, Data Analyst spécialisé en Business Intelligence, Power BI, SQL, Python et Machine Learning.",
    type: "website",
    locale: "fr_FR",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
