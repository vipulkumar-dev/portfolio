import React, { use, useEffect, useRef, useState } from "react";
import Magentic from "./ui/magentic";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import Logo from "@/public/svg/Logo.svg";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { toggleMenu } from "@/redux/states/menuSlice";
import { cn } from "@/lib/utils";
import { links } from "@/data/data";
import "@/app/header.css";

const ease = CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 ");

type HeaderProps = {
  color: "Dark" | "Light";
  className?: string;
  mode?: "hamburger" | "cross";
};

export function Header({ color, className, mode = "hamburger" }: HeaderProps) {
  const possibleTailwindClasses = [
    "bg-colorDark",
    "bg-colorLight",
    "text-colorDark",
    "text-colorLight",
    "before:bg-colorDark",
    "before:bg-colorLight",
  ];

  const logoAnimationTl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    logoAnimationTl.current = gsap.timeline({ paused: true }).fromTo(
      `.logo__rotate`,
      {
        rotate: 0,
        transformOrigin: "center",
      },
      {
        rotate: -360,
        transformOrigin: "center",
        duration: 0.6,
        ease: ease,
      },
    );

    return () => {
      logoAnimationTl.current?.kill();
    };
  }, []);

  const dispatch = useAppDispatch();
  return (
    <header className={cn("nav__container anime px-paddingX", className)}>
      <nav className="nav__bar ">
        <div className="max-w-maxWidth">
          <Magentic
            href={links.home}
            strength={50}
            className={`nav__item text-xl font-bold text-color${color} before:bg-color${color}`}
            onMouseEnter={() => {
              console.log("hello");
              logoAnimationTl.current?.play();
            }}
            onMouseLeave={() => {
              logoAnimationTl.current?.reverse();
            }}
          >
            <p className="mask logo__anim flex items-center justify-center font-semibold   ">
              <svg
                className="w-[72px]"
                viewBox="0 0 210 88"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="logo__rotate"
                  d="M160.322 54.5405L193.518 21.9177M172.122 64.5597L204.081 32.6612M159.658 52.8806L194.635 51.764V57.8902H201.757M206.567 43.7064C206.567 57.0796 195.726 67.9208 182.352 67.9208C168.979 67.9208 158.138 57.0796 158.138 43.7064C158.138 30.3332 168.979 19.4921 182.352 19.4921C195.726 19.4921 206.567 30.3332 206.567 43.7064Z"
                  stroke="currentColor"
                  strokeWidth="6"
                />
                <path
                  d="M15.4047 67L0.33931 19.4965H9.97572L22.8695 61.2996H23.141L35.7633 19.4965H45.3997L30.4022 67H15.4047ZM48.1704 67V33.3404H57.3318V67H48.1704ZM52.785 29.0651C51.1111 29.0651 49.7312 28.5901 48.6454 27.64C47.6049 26.6447 47.0846 25.4005 47.0846 23.9076C47.0846 22.4146 47.6049 21.1705 48.6454 20.1752C49.7312 19.1799 51.1111 18.6822 52.785 18.6822C54.459 18.6822 55.8162 19.1799 56.8568 20.1752C57.8973 21.1705 58.4176 22.4146 58.4176 23.9076C58.4176 25.3553 57.8973 26.5768 56.8568 27.5721C55.8162 28.5674 54.459 29.0651 52.785 29.0651ZM62.8334 80.5724V33.3404H70.5018L71.0447 39.2444H71.3161C72.1757 37.8419 73.1937 36.643 74.3699 35.6477C75.5915 34.6524 76.9713 33.8833 78.5095 33.3404C80.093 32.7975 81.8121 32.5261 83.667 32.5261C86.8792 32.5261 89.6615 33.2952 92.0141 34.8334C94.3666 36.3263 96.1989 38.4074 97.5109 41.0767C98.8229 43.7459 99.4789 46.7771 99.4789 50.1702C99.4789 53.5633 98.8229 56.5945 97.5109 59.2637C96.1989 61.933 94.344 64.0367 91.9462 65.5749C89.5484 67.0679 86.6982 67.8143 83.3956 67.8143C80.7716 67.8143 78.4869 67.3167 76.5415 66.3214C74.6414 65.2808 73.1258 64.0593 71.9948 62.6568V80.5724H62.8334ZM81.0204 60.3495C82.8753 60.3495 84.4814 59.9197 85.8386 59.0601C87.2411 58.2006 88.3043 57.0243 89.0281 55.5313C89.7972 53.9931 90.1818 52.2287 90.1818 50.2381C90.1818 48.2022 89.7972 46.4378 89.0281 44.9448C88.3043 43.4066 87.2411 42.2077 85.8386 41.3481C84.4814 40.4886 82.8753 40.0588 81.0204 40.0588C79.2108 40.0588 77.6047 40.4886 76.2022 41.3481C74.7997 42.2077 73.7139 43.4066 72.9448 44.9448C72.1757 46.4378 71.7912 48.2022 71.7912 50.2381C71.7912 52.2287 72.1757 53.9931 72.9448 55.5313C73.7139 57.0243 74.7997 58.2006 76.2022 59.0601C77.6047 59.9197 79.2108 60.3495 81.0204 60.3495ZM115.315 67.8143C112.555 67.8143 110.202 67.2262 108.257 66.0499C106.312 64.8737 104.819 63.1319 103.778 60.8246C102.738 58.472 102.217 55.5992 102.217 52.2061V33.3404H111.311V51.3917C111.311 54.1967 111.876 56.3457 113.007 57.8386C114.184 59.3316 115.993 60.0781 118.436 60.0781C120.02 60.0781 121.4 59.7161 122.576 58.9923C123.797 58.2232 124.747 57.1374 125.426 55.7349C126.105 54.3324 126.444 52.6585 126.444 50.7131V33.3404H135.605V67H127.801L126.987 61.6389H126.715C125.675 63.539 124.205 65.0546 122.304 66.1857C120.45 67.2714 118.12 67.8143 115.315 67.8143ZM140.042 67V19.4965H149.204V67H140.042Z"
                  fill="currentColor"
                />
              </svg>
            </p>
          </Magentic>
          <Magentic
            strength={50}
            className={`mask nav__item h-8 w-8 cursor-pointer items-center text-color${color} before:bg-color${color}`}
            onClick={() => {
              if (mode === "cross") {
                dispatch(toggleMenu({ isMenuOpen: false }));
              } else {
                dispatch(toggleMenu({ isMenuOpen: true, color: color }));
              }
            }}
          >
            <div
              className={cn(
                "flex h-[0.9rem] w-full flex-col justify-between ",
                {
                  "scale-[.90] justify-center": mode === "cross",
                },
              )}
            >
              <div
                className={cn(`h-[0.15rem] w-full bg-color${color}`, {
                  "absolute rotate-45": mode === "cross",
                })}
              ></div>
              <div
                className={cn(`h-[0.15rem] w-full bg-color${color}`, {
                  "absolute -rotate-45": mode === "cross",
                })}
              ></div>
            </div>
          </Magentic>
        </div>
      </nav>
    </header>
  );
}
