"use client";

import React, { useEffect, useRef } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";

import SplitType from "split-type";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { setActiveSlide } from "@/redux/states/fullpageSlice";
import { splineSceneVisibility } from "@/redux/states/splineSlice";
// import Lottie from "lottie-web";
// import fullpage from "@fullpage/react-fullpage";

const opts = {
  autoScrolling: true,
  scrollOverflow: false,
  scrollHorizontally: false,
  // fixedElements: "#headerNavigation",
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

const FullpageProvider = ({ children }: { children: React.ReactNode }) => {
  const about = useRef<gsap.core.Timeline | null>(null);
  const textAnim__section2__down = useRef<gsap.core.Tween | null>(null);
  const work_heading = useRef<gsap.core.Tween | null>(null);
  const videoElement = useRef<HTMLVideoElement | null>(null);

  const dispatch = useAppDispatch();

  const onLeave = (origin: any, destination?: any, direction?: any) => {
    dispatch(setActiveSlide([destination.anchor, direction]));

    // It will patch border that comes when we snap by include dark gradient class on body that has higher specfitcy than light gradient
    if (destination.anchor == "second" || destination.anchor == "fourth") {
      document.body.classList.add("darkGradient");
    } else {
      document.body.classList.remove("darkGradient");
    }

    if (destination.anchor == "first") {
      dispatch(splineSceneVisibility(true));
    } else {
      dispatch(splineSceneVisibility(false));
    }

    if (destination.anchor == "first") {
      if (direction == "down") {
      } else {
        about.current?.seek(0.3);
        console.log("SeeKed");
      }
    }

    if (destination.anchor == "second") {
      if (direction == "down") {
        textAnim__section2__down.current?.restart(true);
        work_heading.current?.restart(true);
      } else {
        textAnim__section2__down.current?.restart();
      }
      console.log(work_heading.current);
      videoElement.current && (videoElement.current.currentTime = 1.6);
      videoElement.current?.play();
    }

    // if (destination.anchor == "third") {
    //   videoElement.current && (videoElement.current.currentTime = 1.6);
    //   videoElement.current?.play();
    // }

    if (destination.anchor == "fourth") {
      if (direction == "down") {
        // anim__section2__down.restart();
      } else {
        // textAnim__section2__up.restart();
        // anim__section2__up.restart();
      }
    }

    var flex = screen.width > 540 ? 17 : 5;
    if (direction == "down") {
      gsap
        .timeline()
        .from(`.${destination.anchor} .rounded__div__down`, {
          duration: 0.1,
        })
        .fromTo(
          `.${destination.anchor} .rounded__div__down`,
          {
            height: `${flex}vh`,
          },
          {
            height: "0vh",
            duration: 1.2,
            ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
          },
        );

      gsap
        .timeline()
        .from(`.${destination.anchor} .anime`, {
          duration: 0.3,
        })
        .fromTo(
          `.${destination.anchor} .anime`,
          {
            y: "30vh",
          },
          {
            y: "0vh",
            duration: 1.1,
            stagger: 0.1,
            ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
          },
        );
    } else {
      gsap
        .timeline()
        .from(`.${destination.anchor} .rounded__div__up`, {
          duration: 0.1,
        })
        .fromTo(
          `.${destination.anchor} .rounded__div__up`,
          {
            height: `${flex}vh`,
          },
          {
            height: "0vh",
            duration: 1.2,
            ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
          },
        );

      gsap
        .timeline()
        .from(`.${destination.anchor} .anime`, {
          duration: 0.3,
        })
        .fromTo(
          `.${destination.anchor} .anime`,
          {
            y: "-30vh",
          },
          {
            y: "0vh",
            duration: 1.1,
            stagger: -0.08,
            ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
          },
        );
    }
  };
  const getRotation = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    const ease = CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 ");
    about.current = gsap
      .timeline({ defaults: { ease: "none" }, repeat: -1 })
      .fromTo(
        ".left .animate__this1",
        {
          y: "0%",
          opacity: 1,
        },
        {
          y: "-140%",
          opacity: 0,
          duration: 0.9,
          delay: 1.7,
          ease,
        },
      )
      .fromTo(
        ".left .animate__this2",
        {
          y: "140%",
          opacity: 0,
        },
        {
          y: "0%",
          opacity: 1,
          duration: 0.9,
          ease,
        },
        "-=0.9",
      )
      .fromTo(
        ".left .animate__this2",
        {
          y: "0%",
          opacity: 1,
        },
        {
          y: "-140%",
          opacity: 0,
          delay: 1.7,
          duration: 0.9,
          ease,
        },
      )
      .fromTo(
        ".left .animate__this1",
        {
          y: "140%",
          opacity: 0,
        },
        {
          y: "0%",
          opacity: 1,
          duration: 0.9,
          ease,
        },
        "-=0.9",
      );

    const myText = new SplitType("#my-text", { types: "lines" });
    const myText2 = new SplitType("#my-text .line", {
      types: "lines",
      lineClass: "innnerLine",
    });

    textAnim__section2__down.current = gsap.from(
      "#my-text .line .innnerLine",
      1.5,
      {
        y: "200%",
        opacity: 0,
        skewX: -10,
        // scaleY: 1.5,
        paused: true,
        delay: 0.25,
        stagger: 0.12,
        ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
      },
    );

    work_heading.current = gsap.fromTo(
      ".work_heading",
      {
        rotate: 15,
        // opacity: 0,
        scaleY: 1.5,
      },
      {
        // opacity: 0,
        rotate: 0,
        scaleY: 1,
        opacity: 1,
        delay: 0.7,
        duration: 1.3,
        // scaleY: 1.5,
        // paused: true,
        // delay: 0.25,
        // stagger: 0.12,
        ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
      },
    );

    videoElement.current = document.querySelector("#video") as HTMLVideoElement;

    // console.log(gsap);
    // console.log(SplitType);
    // console.log(Lottie);
    // console.log(fullpage);
    return () => {
      about.current?.kill();
      // textAnim__section2__down.current?.kill();
    };
  }, []);

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

export default FullpageProvider;
