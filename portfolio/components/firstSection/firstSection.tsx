import { Marquee } from "./marquee";
import React, { useEffect } from "react";
import Image from "next/image";
import Magentic from "../ui/magentic";
import { useAppSelector } from "@/hooks/reduxHooks";
export function FirstSection({}) {
  const { isActive, direction } = useAppSelector(
    (state) => state.fullpageReducer.first
  );

  return (
    <section className="section section__1 first">
      <div className="rounded__div__down white">
        <div className="round__bg__down black"></div>
      </div>
      <div className="rounded__div__up white">
        <div className="round__bg__up black"></div>
      </div>
      <header className="nav__container anime">
        <nav className="nav__bar">
          <ul>
            <Magentic strength={50} className="nav__item ">
              <a href="work.html"> Work </a>
            </Magentic>
            <Magentic strength={50} className="nav__item ">
              <a href="https://www.linkedin.com/in/coex-/"> About </a>
            </Magentic>
          </ul>
        </nav>
      </header>
      <div className="section1__wrapper">
        <div className="myImage"></div>

        <div className="email_section1 anime">
          <div className="sqaure">
            Located in
            <br />
            Rajasthan, India
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
