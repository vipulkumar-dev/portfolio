"use client";
import { Intro } from "@/components/intro";
import { Main } from "@/components/main";
import FullpageProvider from "@/components/fullpageProvider";
import "./header.css";
import "./index.css";
import { Cursor } from "@/components/cursor";

export default function Home({}) {
  return (
    <>
      <Cursor />
      <Intro />
      <FullpageProvider>
        <Main />
      </FullpageProvider>
    </>
  );
}
