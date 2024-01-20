import React, { use, useEffect, useRef } from "react";
import Magentic from "../ui/magentic";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);
const ease = CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 ");

type HeaderProps = {
  color: "Dark" | "Light";
};

export function Header({ color }: HeaderProps) {
  const possibleTailwindClasses = [
    "bg-colorDark",
    "bg-colorlight",
    "text-colorDark",
    "text-colorlight",
  ];

  const logoAnimationTl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    logoAnimationTl.current = gsap.timeline({ paused: true }).fromTo(
      `.logo__rotate`,
      { rotate: 0 },
      {
        rotate: -360,
        // opacity: 0,
        duration: 0.6,
        ease: ease,
      },
    );
  });
  return (
    <header className="nav__container anime">
      <nav className="nav__bar">
        <ul>
          <Magentic
            href="work.html"
            hoverUnderline
            strength={50}
            className={`nav__item text-lg font-semibold text-color${color} before:bg-color${color}`}
            onMouseEnter={() => {
              console.log("hello");
              logoAnimationTl.current?.play();
            }}
            onMouseLeave={() => {
              logoAnimationTl.current?.reverse();
            }}
          >
            <p className="logo__anim ">
              <span className="logo__rotate inline-block">?</span>Developer_Coex
            </p>
          </Magentic>
          <Magentic
            href="https://www.linkedin.com/in/coex-/"
            strength={50}
            className="nav__item h-full text-lg text-inherit"
          >
            <div className="flex h-3 w-10 flex-col justify-between ">
              <div
                className={`h-0.5 w-full rounded-full bg-color${color}`}
              ></div>
              <div
                className={`h-0.5 w-full rounded-full bg-color${color}`}
              ></div>
            </div>
          </Magentic>
        </ul>
      </nav>
    </header>
  );
}
