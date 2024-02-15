import React from "react";
import Magentic from "../ui/magentic";
import { gsap } from "gsap";
import { AboutMarquee } from "./aboutMarquee";
import { links } from "@/data/data";
export function AboutWrapper({}) {
  return (
    <main className="flex h-full w-full max-w-maxWidth grow flex-col  justify-center text-[clamp(16px,_1vw_+_14px,_24px)]  ">
      <div className="anime relative  flex items-center justify-between text-[7.2vw] md:text-[clamp(16px,_4.3vw_+_8px,_86px)]">
        <h2
          id="my-text"
          className="mask font-semibold leading-tight tracking-tight"
        >
          Let's Create Something New in This World
        </h2>

        <div className="digital-ball ml-auto">
          <div className="globe">
            <div className="globe-wrap">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle-hor"></div>
              <div className="circle-hor-middle"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="anime relative flex  flex-col gap-[1em] pt-[1em] md:flex-row md:gap-[2em] md:pt-[1.5em]">
        <p className="text-justify leading-[1.4] text-colorSecondaryDark md:w-[69.4%]">
          <span className="block pb-[1em] font-semibold leading-tight tracking-tight">
            Not Your Typical Freelancer<span className="yellow__it ">.</span>
          </span>
          Hello there!👋 I'm Vipul kumar, a website designer & developer. I
          craft beautiful and modern websites using the newest technologies—such
          as Next.js, TypeScript, and Tailwind—or tools like Webflow or Framer.
        </p>
        <Magentic
          href={links.about}
          onMouseEnter={() => {
            gsap.to("body", {
              "--colorLight": "#0e0d0c",
              "--colorDark": "#fff",
              "--colorSecondaryDark": "#bfbfbf",
              "--colorSecondaryLight": "#404040",
              "--colorSecondaryHalfLight": "#1a1a1a",
              "--colorSecondaryHalfDark": "#f2f2f2",
              "--colorWhite": "#000",
            });
          }}
          onMouseLeave={() => {
            gsap.to("body", {
              "--colorLight": "#fff",
              "--colorDark": "#0e0d0c",
              "--colorSecondaryDark": "#404040",
              "--colorSecondaryLight": "#bfbfbf",
              "--colorSecondaryHalfLight": "#f2f2f2",
              "--colorSecondaryHalfDark": "#1a1a1a",
              "--colorWhite": "#fff",
            });
          }}
          className="mask group h-full items-center justify-center rounded-full bg-colorDark p-3  md:relative  md:ml-auto    md:min-h-full md:w-[22%]"
        >
          <p className="shapka !flex text-colorLight">
            Learn More
            <svg
              className="ml-4 w-[0.7em] -rotate-45 text-colorLight  " // width="34px"
              // height="34px"
              viewBox="0 0 14 14"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg" // xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <title>arrow-up-right</title>
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Artboard"
                  transform="translate(-1019.000000, -279.000000)"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <g
                    id="arrow-up-right"
                    transform="translate(1026.000000, 286.000000) rotate(90.000000) translate(-1026.000000, -286.000000) translate(1020.000000, 280.000000)"
                  >
                    <polyline
                      id="Path"
                      points="2.76923077 0 12 0 12 9.23076923"
                    ></polyline>
                    <line x1="12" y1="0" x2="0" y2="12" id="Path"></line>
                  </g>
                </g>
              </g>
            </svg>
          </p>
        </Magentic>
      </div>
      <AboutMarquee />
    </main>
  );
}
