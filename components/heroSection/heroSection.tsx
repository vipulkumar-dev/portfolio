"use client";
import React from "react";
import Spline from "@splinetool/react-spline/next";
import { HeroWrapper } from "@/components/heroSection/heroWrapper";
import { Header } from "@/components/header";
import { Bulge } from "@/components/bulge";

export function HeroSection({}) {
  return (
    <section className="section section__1 darkGradient first relative z-0 px-paddingX text-colorLight">
      <Bulge type="Light" />
      <Header color="Light" />
      <HeroWrapper />

      <div className="absolute left-0 top-0 z-10 h-full w-full origin-top scale-[120%]">
        <Spline scene="https://prod.spline.design/u1VFgkuq6dbrbxHS/scene.splinecode" />
      </div>
    </section>
  );
}
