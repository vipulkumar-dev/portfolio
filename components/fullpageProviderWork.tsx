"use client";

import React, { useEffect, useRef } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { gsap } from "gsap";

import { CustomEase } from "gsap/CustomEase";

import SplitType from "split-type";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { setActiveSlide } from "@/redux/states/fullpageSlice";
// import Lottie from "lottie-web";
// import fullpage from "@fullpage/react-fullpage";

const opts = {
  autoScrolling: true,
  scrollOverflow: false,
  scrollHorizontally: false,
  fixedElements: ".background",
  navigation: false,
  navigationPosition: "left",
  scrollingSpeed: 1300,
  easingcss3: "cubic-bezier(.70,0,.30,1)",
  anchors: ["first", "second", "third", "fourth", "fifth", "sixth"],
  licenseKey: "gplv3-license",
  credits: {
    enabled: false,
  },
};

const FullpageProviderWork = ({ children }: { children: React.ReactNode }) => {
  const onLeave = function (index: any, nextIndex: any, direction: any) {
    console.log(nextIndex.index);

    if (direction == "down") {
      gsap
        .timeline()
        .from(`.s${nextIndex.index} .anime`, {
          duration: 0.3,
        })
        .fromTo(
          `.s${nextIndex.index} .anime`,
          {
            y: "30vh",
          },
          {
            y: "0vh",
            duration: 1.1,
            stagger: 0.03,
            ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
          },
        );
    } else {
      gsap
        .timeline()
        .from(`.s${nextIndex.index} .anime`, {
          duration: 0.3,
        })
        .fromTo(
          `.s${nextIndex.index} .anime`,
          {
            y: "-30vh",
          },
          {
            y: "0vh",
            duration: 1.1,
            stagger: -0.03,
            ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
          },
        );
    }

    var flex = screen.width > 540 ? 17 : 5;
    if (direction == "down") {
      console.log();

      gsap
        .timeline()
        .from(`.s${nextIndex.index} .rounded__div__down`, {
          duration: 0.1,
        })
        .fromTo(
          `.s${nextIndex.index} .rounded__div__down`,
          {
            height: `${flex}vh`,
          },
          {
            height: "0vh",
            duration: 1.2,
            ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
          },
        );
    } else {
      gsap
        .timeline()
        .from(`.s${nextIndex.index} .rounded__div__up`, {
          duration: 0.1,
        })
        .fromTo(
          `.s${nextIndex.index} .rounded__div__up`,
          {
            height: `${flex}vh`,
          },
          {
            height: "0vh",
            duration: 1.2,
            ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
          },
        );
    }
  };

  return (
    <ReactFullpage
      {...opts}
      onLeave={onLeave}
      render={() => {
        return <ReactFullpage.Wrapper>{children}</ReactFullpage.Wrapper>;
      }}
    />
  );
};

export default FullpageProviderWork;
