import React from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Magentic from "../ui/magentic";
import { gsap } from "gsap";
export function AboutSection({}) {
  return (
    <section className="section section__2 second items-center justify-center bg-colorLight px-[5vw] py-10 text-colorDark">
      <div className="rounded__div__down black">
        <div className="round__bg__down white"></div>
      </div>
      <div className="rounded__div__up black">
        <div className="round__bg__up white"></div>
      </div>
      <main className="flex  w-full max-w-[1500px] flex-col text-[clamp(16px,_1vw_+_14px,_24px)]  ">
        <div className="anime relative  flex items-center justify-center text-[clamp(45px,_7.8vw_+_20px,_110px)]">
          <h2
            id="my-text"
            className="font-semibold leading-tight tracking-tight"
          >
            Passion for Websites<span className="yellow__it ">.</span>
          </h2>
          <svg
            className="text-colorSecondaryDark ml-auto w-[calc(0.15em+25px)] rotate-90"
            // width="34px"
            // height="34px"
            viewBox="0 0 14 14"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <title>arrow-up-right</title>
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Artboard"
                transform="translate(-1019.000000, -279.000000)"
                stroke="currentColor"
                strokeWidth="1.5"
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
        </div>
        <div className="anime relative flex grow flex-col gap-[1em] pt-[1em] md:flex-row">
          <p className="text-colorSecondaryDark text-justify leading-[1.4] md:w-[68%]">
            I'm coex, an year 18 year developer that assist global companies by
            providing bespoke solutions, Elevating my work in every project,
            pioneering new horizons, Emphasizing quality consistently, a
            commitment that endures, Tailor-made solutions crafted., Tailor-made
            solutions crafted.
          </p>
          <Magentic
            href=""
            onMouseEnter={() => {
              gsap.to("body", {
                "--colorLight": "#0e0d0c",
                "--colorDark": "#fff",
                "--colorSecondaryDark": "#bfbfbf",
                "--colorSecondaryLight": "#404040",
              });
            }}
            onMouseLeave={() => {
              gsap.to("body", {
                "--colorLight": "#fff",
                "--colorDark": "#0e0d0c",
                "--colorSecondaryDark": "#404040",
                "--colorSecondaryLight": "#bfbfbf",
              });
            }}
            className="absolute bottom-0 hidden aspect-square  h-full items-center justify-center rounded-full bg-colorDark p-2  md:relative  md:ml-auto  md:flex md:aspect-auto md:min-h-full md:w-[22%]"
          >
            <p className="text-colorLight">
              About<span className="yellow__it">.</span>
            </p>
          </Magentic>
        </div>
        <div className="anime bg-colorSecondaryLight relative  my-[6em]  h-[2px] w-full md:my-[4em]">
          <a
            data-strength="100"
            href="https://www.linkedin.com/in/coex--/"
            className="anime magnetic footer__heading  !absolute right-[0%] top-1/2 !mt-0 -translate-y-1/2  md:!hidden"
            target="_blank"
            rel="noreferrer"
          >
            <span className="shapka">
              About<span className="yellow__it">.</span>
            </span>
          </a>
        </div>
        <div className="anime flex flex-wrap gap-[1em] md:gap-[3em] ">
          <Button
            className="border-colorSecondaryLight grow rounded-full border-2  px-10 py-[1.8em] text-[0.9em] text-colorDark  "
            variant="outline"
          >
            Github
          </Button>
          <Button
            className="border-colorSecondaryLight grow rounded-full border-2  px-10 py-[1.8em] text-[0.9em] text-colorDark  "
            variant="outline"
          >
            Skills
          </Button>
          <Button
            className="grow rounded-full  bg-colorDark px-10 py-[1.8em] text-[0.9em] text-colorLight "
            variant="default"
          >
            Contact
          </Button>
        </div>
      </main>
    </section>
  );
}
