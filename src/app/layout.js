// src/app/layout.js
import { Roboto, Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";

// Configure Roboto for body text
const roboto = Roboto({
  weight: ["400", "700"], // You can specify the weights you need
  subsets: ["latin"],
  display: "swap", // Improves font loading performance
  variable: "--font-roboto", // CSS variable for body font
});

// Configure Montserrat Alternates for header texts
const montserratAlternates = Montserrat_Alternates({
  weight: ["700", "800"], // Common weights for headers
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat-alternates", // CSS variable for header font
});

// A solid metadata object for a local government website
export const metadata = {
  title: {
    default: "Mosan-Okunola Local Government",
    template: "%s | Mosan-Okunola Local Government",
  },
  description: "Official website of Mosan-Okunola Local Council Development Area (LCDA), Alimosho, Lagos, Nigeria. Get information on government services, news, projects, and events.",
  keywords: ["Mosan-Okunola", "LCDA", "Local Government", "Alimosho", "Lagos", "Nigeria", "government services", "community", "council", "mayor"],
  authors: [{ name: "Mosan-Okunola LCDA" }],
  openGraph: {
    title: "Mosan-Okunola Local Government",
    description: "Official website of Mosan-Okunola Local Council Development Area (LCDA).",
    url: "https://www.mosan-okunola.lg.ng", // Replace with your actual domain
    siteName: "Mosan-Okunola LCDA",
    locale: "en_NG", // Specifies English in Nigeria
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mosan-Okunola Local Government",
    description: "Official website of Mosan-Okunola Local Council Development Area (LCDA).",
    // Replace with your Twitter handle if you have one
    // creator: "@mosanokunola",
  },
  // You can also add more metadata here like a favicon, as Next.js has file-based conventions for this
  // For a favicon, you would place a favicon.ico file in the /app directory
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${montserratAlternates.variable} antialiased`}
      >
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}