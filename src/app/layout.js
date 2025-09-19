// src/app/layout.js
import { Roboto, Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
// import { DropdownProvider } from "@/contexts/dropdownContext";

// Configure Roboto for body text
const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

// Configure Montserrat Alternates for header texts
const montserratAlternates = Montserrat_Alternates({
  weight: ["700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat-alternates",
});

export const metadata = {
  title: {
    default: "Mosan-Okunola Local Government",
    template: "%s | Mosan-Okunola Local Government",
  },
  description:
    "Official website of Mosan-Okunola Local Council Development Area (LCDA), Alimosho, Lagos, Nigeria. Get information on government services, news, projects, and events.",
  keywords: [
    "Mosan-Okunola",
    "LCDA",
    "Local Government",
    "Alimosho",
    "Lagos",
    "Nigeria",
    "government services",
    "community",
    "council",
    "mayor",
  ],
  authors: [{ name: "Mosan-Okunola LCDA" }],
  openGraph: {
    title: "Mosan-Okunola Local Government",
    description:
      "Official website of Mosan-Okunola Local Council Development Area (LCDA).",
    url: "https://www.mosan-okunola.lg.ng",
    siteName: "Mosan-Okunola LCDA",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mosan-Okunola Local Government",
    description:
      "Official website of Mosan-Okunola Local Council Development Area (LCDA).",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${montserratAlternates.variable} antialiased`}
      >
  
        <Header/>
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
       
      </body>
    </html>
  );
}
