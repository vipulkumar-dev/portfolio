"use client";
import { Main } from "@/components/main";
import FullpageProvider from "@/components/fullpageProvider";
import { gsap } from "gsap";

import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);
import Lottie from "lottie-web";
import Image from "next/image";
import "./header.css";
import "./index.css";

// import fullpage from "fullpage.js";

import { useEffect } from "react";
import SplitType from "split-type";

export default function Home({}) {
  return (
    <>
      <FullpageProvider>
        <Main />
      </FullpageProvider>
    </>
  );
}
