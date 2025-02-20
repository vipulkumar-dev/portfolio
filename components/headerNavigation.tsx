import React, { use, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { Header } from "./header";
import { useAppSelector } from "@/hooks/reduxHooks";
import { Footer } from "./contactSection/footer";
import Magentic from "./ui/magentic";
import { isDesktop } from "@/lib/utils";
import { link } from "fs";
import { links } from "@/data/data";
export function HeaderNavigation() {
  const { isMenuOpen, color } = useAppSelector((state) => state.menuReducer);
  const possibleTailwindClasses = [
    "text-colorDark",
    "text-colorLight",
    "lightGradient",
    "darkGradient",
  ];

  const ease = CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 ");

  const headerAnimation = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const flexHeight = isDesktop() ? "20vh" : "7vh";
    headerAnimation.current = gsap
      .timeline()
      .set("#headerNavigation", {
        display: "flex",
      })
      .to("#headerNavigation", {
        duration: 1,
        y: "0%",
        ease,
      })
      .fromTo(
        "#headerNavigation .rounded__div__up",
        {
          height: flexHeight,
        },
        {
          height: "0vh",
          duration: 1,
          ease,
        },
        "-=0.9",
      )
      .fromTo(
        ".headerAnimate",
        {
          y: "-20vh",
        },
        {
          y: "0vh",
          duration: 1,
          stagger: -0.08,
          ease,
        },
        "-=1.2",
      );

    return () => {
      headerAnimation.current?.kill();
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      headerAnimation.current?.play();
    } else {
      headerAnimation.current?.reverse();
    }
  }, [isMenuOpen]);

  const headerData = [
    {
      name: "Home",
      href: links.home,
    },

    {
      name: "Work",
      href: links.work,
    },
    {
      name: "Contact",
      href: links.email,
    },
    {
      name: "Twitter/X",
      href: links.twitter,
    },
  ];
  return (
    <>
      <div
        id="headerNavigation"
        className="fixed left-0 top-0 z-[6000] hidden h-full w-full -translate-y-full flex-col items-center justify-center p-paddingX"
      >
        <Header
          mode="cross"
          className="headerAnimate"
          color={color == "Light" ? "Dark" : "Light"}
        />
        <nav>
          <ul className="mask flex flex-col items-center justify-center px-8 py-[10vh]">
            {headerData.map((data) => (
              <li className="headerAnimate" key={data.name}>
                <Magentic
                  className={`text-[clamp(32px,_3.3vw_+_32px,_88px)] font-bold text-color${
                    color == "Light" ? "Dark" : "Light"
                  }`}
                  scrambleParams={{
                    text: data.name,
                    chars: "-xx",
                  }}
                  href={data.href}
                >
                  <span className="scrambleText">{data.name}</span>
                </Magentic>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute left-0 top-0 -z-40 flex h-full w-full flex-col ">
          <div
            className={`${
              color == "Light" ? "lightGradient" : "darkGradient"
            } h-full w-full grow `}
          ></div>
          <div className="rounded__div__up  !relative z-50">
            <div
              className={`round__bg__up ${
                color == "Light" ? "lightGradient" : "darkGradient"
              }`}
            ></div>
          </div>
        </div>
        <Footer className="headerAnimate bottom-2 z-10 w-full" />
      </div>
    </>
  );
}
