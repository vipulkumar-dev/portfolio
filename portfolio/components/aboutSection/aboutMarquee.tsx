import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { cn } from "@/lib/utils";
import NextIcon from "@/public/svg/nextjsIcon.svg";
import TailwindIcon from "@/public/svg/tailwindIcon.svg";
import TypescriptIcon from "@/public/svg/typescriptIcon.svg";

export function AboutMarquee({}) {
  useEffect(() => {
    gsap.fromTo(
      `.rollingText2`,
      {
        xPercent: 0,
      },
      {
        xPercent: -100,
        duration: 20,
        ease: CustomEase.create("custom", "M0,0,C0,0,1,1,1,1"),
        repeat: -1,
      },
    );

    gsap.fromTo(
      `.rollingText3`,
      {
        xPercent: 0,
      },
      {
        xPercent: -100,
        duration: 20,
        ease: CustomEase.create("custom", "M0,0,C0,0,1,1,1,1"),
        repeat: -1,
      },
    );
    gsap.set(`.rollingText3`, {
      //@ts-ignore
      left: `${document.querySelector(".rollingText3").offsetWidth}`,
    });
  });
  return (
    <div
      id="one"
      className="anime mt-[2em] rounded-[3rem] bg-colorSecondaryLight md:mt-[4em]"
    >
      <div className="slider_wip">
        <InnerMarquee className="rollingText2" />
        <InnerMarquee className="rollingText3" />
      </div>
    </div>
  );
}

type InnerMarqueeProps = {
  className?: string;
};

export const InnerMarquee = ({ className }: InnerMarqueeProps) => {
  return (
    <div className={cn("slider-inner slider ", className)}>
      <div className="img-wrapper">
        <NextIcon />
      </div>
      <div className="img-wrapper">
        <TailwindIcon />
      </div>
      <div className="img-wrapper">
        <TypescriptIcon />
      </div>
      <div className="img-wrapper">
        <Image
          width={100}
          height={100}
          src="https://cdn-icons-png.flaticon.com/512/5968/5968333.png"
          alt=""
        />
      </div>
      <div className="img-wrapper">
        <Image
          width={100}
          height={100}
          src="https://cdn-icons-png.flaticon.com/512/5968/5968305.png"
          alt=""
        />
      </div>
      <div className="img-wrapper">
        <Image
          width={100}
          height={100}
          src="https://cdn-icons-png.flaticon.com/512/5968/5968351.png"
          alt=""
        />
      </div>
    </div>
  );
};
