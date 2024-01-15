import React from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
export function AboutSection({}) {
  return (
    <section className="section section__2 second  items-center justify-center">
      <div className="rounded__div__down black">
        <div className="round__bg__down white"></div>
      </div>
      <div className="rounded__div__up black">
        <div className="round__bg__up white"></div>
      </div>
      <main className="w-full max-w-[1500px] shrink-0">
        <div className="anime relative flex">
          <h2 className=" relative mr-40  text-9xl font-semibold tracking-tight">
            About Me<span className="yellow__it">.</span>
            <Avatar className=" absolute right-0 top-0 -mr-48 aspect-square h-full max-h-full w-auto">
              <AvatarImage src="/img/logo.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </h2>
        </div>
        <p className="anime mt-10 w-[65%] text-2xl">
          I help companies from all over the world with tailor-made solutions.
          With each project, I push my work to new horizons, always putting
          quality first. help companies from all over the world with tailor-made
          solutions. With each project, I push my work to new horizons, always
          putting quality first
        </p>
        <div className="section__2__separater anime relative my-28 h-[1px] w-full bg-gray-400">
          <a
            data-strength="100"
            href="https://www.linkedin.com/in/coex--/"
            className="anime magnetic footer__heading !absolute right-[7%] top-1/2 !mt-0  -translate-y-1/2"
            target="_blank"
            rel="noreferrer"
          >
            <span className="shapka">
              About<span className="yellow__it">.</span>
            </span>
          </a>
        </div>
        <div className="anime flex gap-8">
          <Button
            className=" rounded-full px-10 py-8 text-xl"
            variant="outline"
          >
            info@dennissnellenberg.com
          </Button>
          <Button
            className=" rounded-full px-10 py-8 text-xl"
            variant="outline"
          >
            Github
          </Button>
          <Button
            className=" rounded-full px-10 py-8 text-xl"
            variant="outline"
          >
            +31 6 27 84 74 30
          </Button>
        </div>
      </main>
    </section>
  );
}
