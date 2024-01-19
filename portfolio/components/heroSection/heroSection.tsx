import { Header } from "./header";
import { Marquee } from "./marquee";
import React, { useEffect } from "react";
import Image from "next/image";
import Magentic from "../ui/magentic";
import { useAppSelector } from "@/hooks/reduxHooks";
export function HeroSection({}) {
  useAppSelector((state) => state.fullpageReducer.first);

  return (
    <section className="section section__1 first">
      <div className="rounded__div__down white">
        <div className="round__bg__down black"></div>
      </div>
      <div className="rounded__div__up white">
        <div className="round__bg__up black"></div>
      </div>
      <Header />
      <div className="section1__wrapper">
        <div className="myImage">
          {/* <picture>
            <source media="(min-width:850px)" srcset="img/DSC_00582.webp" />
            <source media="(min-width:465px)" srcset="img/DSC_00582.webp" />
            <img src="img/DSC_00582.webp" alt="" />
          </picture> */}
        </div>

        <div className="email_section1 anime">
          <div className="sqaure">
            Looking For
            <br />
            Opportunities
          </div>
          <div className="round">
            <Image width={100} height={100} src="/img/logo.png" alt="" />
          </div>
        </div>
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
      </div>
    </section>
  );
}
