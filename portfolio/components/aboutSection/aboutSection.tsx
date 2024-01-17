import React from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
export function AboutSection({}) {
  return (
    <section className="section section__2 second  items-center justify-center px-[5vw]">
      <div className="rounded__div__down black">
        <div className="round__bg__down white"></div>
      </div>
      <div className="rounded__div__up black">
        <div className="round__bg__up white"></div>
      </div>
      <main className="w-full max-w-[1500px] shrink-0 text-[clamp(16px,_1vw_+_14px,_24px)]">
        <div className="anime relative  flex items-center justify-center text-[clamp(45px,_7.8vw_+_20px,_110px)]">
          <h2
            id="my-text"
            className="font-semibold leading-tight tracking-tight"
          >
            Passion for Websites<span className="yellow__it ">.</span>
          </h2>
          <svg
            className="ml-auto w-[calc(0.2em+20px)] rotate-90 text-foreground"
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
        <p className="anime  mt-[1em] text-justify ">
          I'm coex, an year 18 year developer that assist global companies by
          providing bespoke solutions, Elevating my work in every project,
          pioneering new horizons, Emphasizing quality consistently, a
          commitment that endures, Tailor-made solutions crafted, ensuring each
          venture matures.
        </p>
        <div className="anime relative my-[2.5em]  h-[1px]  w-full bg-gray-400 md:my-[4em]">
          {/* <a
            data-strength="100"
            href="https://www.linkedin.com/in/coex--/"
            className="anime magnetic footer__heading !absolute right-[7%] top-1/2 !mt-0  -translate-y-1/2"
            target="_blank"
            rel="noreferrer"
          >
            <span className="shapka">
              About<span className="yellow__it">.</span>
            </span>
          </a> */}
        </div>
        <div className="anime flex flex-wrap gap-[1em] ">
          <Button
            className=" grow rounded-full px-10 py-[1.6em] text-[0.8em] "
            variant="outline"
          >
            Github
          </Button>
          <Button
            className=" grow rounded-full px-10 py-[1.6em] text-[0.8em] "
            variant="outline"
          >
            Skills
          </Button>
          <Button
            className=" grow rounded-full px-10 py-[1.6em] text-[0.8em] "
            variant="default"
          >
            Contact
          </Button>
        </div>
      </main>
    </section>
  );
}
