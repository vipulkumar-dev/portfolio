import React from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Magentic from "../ui/magentic";
import { gsap } from "gsap";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  MessageSquare,
} from "lucide-react";
import { Header } from "../header";
import { AboutMarquee } from "./aboutMarquee";
export function AboutSection({}) {
  return (
    <section className="section section__2 second items-center justify-center bg-colorLight px-[5vw] pb-10 pt-20 text-colorDark">
      <div className="rounded__div__down black">
        <div className="round__bg__down white"></div>
      </div>
      <div className="rounded__div__up black">
        <div className="round__bg__up white"></div>
      </div>
      <Header color="Dark"></Header>
      <main className="flex h-full w-full max-w-[1600px] flex-col  justify-center text-[clamp(16px,_1vw_+_14px,_24px)]  ">
        <div className="anime relative  flex items-center justify-center text-[clamp(16px,_4.3vw_+_12px,_88px)]">
          <h2
            id="my-text"
            className="font-semibold leading-tight tracking-tight"
          >
            Lets Make Something New in this world
          </h2>
          <svg
            className="ml-auto w-[1em] rotate-90 text-colorSecondaryDark md:w-[0.5em]"
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
        <div className="anime relative flex  flex-col gap-[1em] pt-[1em] md:flex-row md:gap-[2em] md:pt-[1.5em]">
          <h2 className="font-semibold leading-tight tracking-tight">
            Passion for Websites<span className="yellow__it ">.</span>
          </h2>
          <p className="text-justify leading-[1.4] text-colorSecondaryDark md:w-[68%]">
            I'm Vipul 👋, a passionate designer 🎨 & developer 👨‍💻 based in
            India. I craft beautiful, modern websites using the latest
            technologies like Next.js, TypeScript, and Tailwind. Whether you're
            launching a new business🚀or looking to refresh your existing
            website, I can help you create a digital experience that truly
            stands out.
          </p>
          <Magentic
            href=""
            onMouseEnter={() => {
              gsap.to("body", {
                "--colorLight": "#0e0d0c",
                "--colorDark": "#fff",
                "--colorSecondaryDark": "#bfbfbf",
                "--colorSecondaryLight": "#404040",
                "--colorSecondaryHalfLight": "#1a1a1a",
                "--colorSecondaryHalfDark": "#f2f2f2",
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
              });
            }}
            className="absolute bottom-0 hidden aspect-square  h-full items-center justify-center rounded-full bg-colorDark p-2  md:relative  md:ml-auto  md:flex md:aspect-auto md:min-h-full md:w-[22%]"
          >
            <p className="shapka text-colorLight">
              25+ Customers<span className="yellow__it">.</span>
            </p>
          </Magentic>
        </div>
        {/* <div className="anime relative my-[2em]  h-[2px]  w-full bg-colorSecondaryLight md:mt-[4em]">
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
        </div> */}
        <AboutMarquee />
      </main>
    </section>
  );
}
