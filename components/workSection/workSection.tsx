import React from "react";
import { Header } from "@/components/header";
import { Bulge } from "@/components/bulge";
import { WorkWrapper } from "@/components/workSection/workWrapper";
export function WorkSection({}) {
  return (
    <section className="section section__3 third md:darkGradient py-paddingY overflow-hidden bg-colorDark px-paddingX">
      <Bulge type="Light" />
      <Header color="Light"></Header>
      <WorkWrapper />
    </section>
  );
}
