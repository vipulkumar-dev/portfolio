import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Magentic from "../ui/magentic";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";

export function HeroButton({}) {
  const rotateImageRef = useRef<gsap.core.Timeline | null>(null);
  const rotating = useRef(null);

  useEffect(() => {
    const ease = CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 ");
    rotateImageRef.current = gsap
      .timeline({ defaults: { ease: "none" }, repeat: -1, paused: true })
      .fromTo(
        rotating.current,
        {
          rotation: 0,
        },
        {
          rotation: -360,
          duration: 3,
          // ease,
        },
      );
  }, []);

  return (
    <Magentic
      strength={50}
      className="email_section1 anime isolate z-20  rounded-full !text-[clamp(16px,_1vw_+_14px,_24px)] md:bg-[#272727]"
      onMouseEnter={() => rotateImageRef.current?.play()}
      onMouseLeave={() => rotateImageRef.current?.pause()}
      href="#second"
      scrambleParams={[
        {
          text: "Check out",
          chars: "-x",
        },
        {
          text: "Latest Work",
          chars: "-x",
        },
      ]}
    >
      <div className="shapka !flex items-center justify-center gap-[3.5rem]">
        <div className="round hidden items-center justify-center md:flex">
          <p className="absolute left-[37%] whitespace-nowrap text-[21px]">
            <span>
              <span className="scrambleText">Check out</span>
              <br />
              <span className="scrambleText">Latest Work</span>
            </span>
          </p>
        </div>
        <div className="round flex items-center  justify-end md:justify-center ">
          <Image
            className="rotateAnimation inline-block aspect-square border-2 border-white md:border-0 md:p-1"
            ref={rotating}
            width={120}
            height={120}
            src="/img/logo.png"
            alt=""
          />
        </div>
      </div>
    </Magentic>
  );
}
