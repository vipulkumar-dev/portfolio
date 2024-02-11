"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import "../work.css";
import "../header.css";
import FullpageProviderWork from "@/components/fullpageProviderWork";
import { Header } from "@/components/header";
import { HeaderNavigation } from "@/components/headerNavigation";
import Magentic from "@/components/ui/magentic";
import { redirect } from "next/navigation";
import { links } from "@/data/data";
import { Footer } from "@/components/contactSection/footer";

export default function WorkPage() {
  const [delay, setDelay] = useState(15);
  let timer: NodeJS.Timeout;
  useEffect(() => {
    if (delay !== 0) {
      timer = setTimeout(() => {
        setDelay(delay - 1);
      }, 1000);
    } else {
      redirect(links.linkedin);
    }

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <>
      <Header color="Light" />
      <div className="darkGradient flex h-screen w-screen flex-col items-center justify-center px-paddingX py-paddingY text-center text-lg text-colorSecondaryLight md:text-3xl">
        About page is not ready yet so you'll be redirected to my LinkedIn
        instead.
        <br />
        <span className="mt-5 text-xl text-colorLight ">
          In {delay} seconds
        </span>
        <Link href={links.home} className="mt-5 underline">
          Go Back
        </Link>
        <Footer className="bottom-0" />
      </div>
    </>
  );
}
