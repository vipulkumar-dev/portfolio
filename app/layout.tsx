import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import "./globals.css";
import StoreProvider from "@/redux/storeProvider";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);

// const dM_Sans = DM_Sans({ subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Vipul Kumar • Freelance Designer & Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        ></link>
      </head>

      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
