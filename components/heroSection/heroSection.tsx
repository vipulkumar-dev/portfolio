import React from "react";
import { HeroWrapper } from "@/components/heroSection/heroWrapper";
import { Header } from "@/components/header";
import { Bulge } from "@/components/bulge";

export function HeroSection({}) {
  return (
    <section className="section section__1 darkGradient first text-colorLight">
      <Bulge type="Light" />
      <Header color="Light" />
      <HeroWrapper />
    </section>
  );
}
