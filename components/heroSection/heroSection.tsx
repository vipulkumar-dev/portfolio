import React from "react";

import { HeroWrapper } from "@/components/heroSection/heroWrapper";
import { Header } from "@/components/header";
import { Bulge } from "@/components/bulge";
import { ModalWrapper } from "@/components/heroSection/modalWrapper";

export function HeroSection({}) {
  return (
    <section className="section section__1 darkGradient first relative z-0 px-paddingX text-colorLight">
      <Bulge type="Light" />
      <Header color="Light" />
      <HeroWrapper />
      {/* <ModalWrapper /> */}
    </section>
  );
}
