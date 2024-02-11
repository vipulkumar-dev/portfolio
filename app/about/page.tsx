"use client";

import React, { useEffect, useState } from "react";
import "../work.css";
import "../header.css";
import FullpageProviderWork from "@/components/fullpageProviderWork";
import { Header } from "@/components/header";
import { HeaderNavigation } from "@/components/headerNavigation";
import Magentic from "@/components/ui/magentic";

export default function WorkPage() {
  const [delay, setDelay] = useState(5);
  let timer: NodeJS.Timeout;
  useEffect(() => {
    if (delay !== 0) {
      timer = setTimeout(() => {
        setDelay(delay - 1);
      }, 1000);
    }
    console.log(delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <>
      <div className="darkGradient flex h-screen w-screen flex-col items-center justify-center text-3xl text-colorLight">
        About page not completed yet.
        <br />
        {delay}
      </div>
    </>
  );
}
