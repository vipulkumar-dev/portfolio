import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import GoogleAnalytics from "@/app/GoogleAnalytics";
import Script from "next/script";

import "./globals.css";
import StoreProvider from "@/redux/storeProvider";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);

const dM_Sans = DM_Sans({ subsets: ["latin-ext"] });
const satoshi = localFont({
  src: "../font/satoshi/Satoshi-Variable.woff2",
  style: "normal",
});

const helvetica = localFont({
  src: "../font/helvetica/HelveticaNowDisplay-Medium.woff2",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Vipul Kumar • Developer",
  description:
    "Vipul Kumar is a developer who creates beautiful and pixel perfect websites with zero effort in reviews.",
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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no"
        ></meta>
        <GoogleAnalytics />
      </head>

      <body className={helvetica.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
      <Script src="https://cdn.jsdelivr.net/gh/vipulkumar-dev/gsap@2024/ScrambleTextPlugin.min.js" />
    </html>
  );
}
