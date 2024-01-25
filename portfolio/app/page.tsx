"use client";
import { Main } from "@/components/main";
import { Cursor } from "@/components/cursor";
import FullpageProvider from "@/components/fullpageProvider";

import "./header.css";
import "./index.css";

export default function HomePage({}) {
  return (
    <>
      <Cursor />
      {/* <Intro /> */}
      <FullpageProvider>
        <Main />
      </FullpageProvider>
    </>
  );
}
