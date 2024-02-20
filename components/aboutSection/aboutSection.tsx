import React from "react";
import { Header } from "@/components/header";
import { Bulge } from "@/components/bulge";
import { AboutWrapper } from "@/components/aboutSection/aboutWrapper";

export function AboutSection({}) {
  return (
    <section className="section section__2 second lightGradient items-center justify-center  px-paddingX pb-10 pt-paddingY text-colorDark">
      <Bulge type="Dark" />
      <Header color="Dark"></Header>
      <AboutWrapper />
    </section>
  );
}
