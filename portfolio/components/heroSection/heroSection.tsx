import { HeroButton } from "./heroButton";
import { Header } from "../header";
import { Marquee } from "./marquee";
import React, { useEffect } from "react";

import { useAppSelector } from "@/hooks/reduxHooks";
import { Bulge } from "../bulge";
export function HeroSection({}) {
  useAppSelector((state) => state.fullpageReducer.first);

  return (
    <section className="section section__1 first items-center justify-center">
      <Bulge type="Light" />
      <Header color="Light" />
      <main className="section1__wrapper relative max-w-maxWidth">
        <div className="myImage">
          {/* <picture>
            <source media="(min-width:850px)" srcset="img/DSC_00582.webp" />
            <source media="(min-width:465px)" srcset="img/DSC_00582.webp" />
            <img src="img/DSC_00582.webp" alt="" />
          </picture> */}
        </div>

        <HeroButton />
        <h2 className="left">
          <div className="free anime">
            &nbsp;Freelance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <div className="animation__wrapper anime">
            <span>&nbsp;</span>
            <span className="animate__this animate__this1">
              Designer <span className="yellow__it">.</span>
              <br />
            </span>
            <span className="animate__this animate__this2">
              Developer<span className="yellow__it">.</span>
            </span>
          </div>
        </h2>

        <Marquee />
      </main>
    </section>
  );
}
