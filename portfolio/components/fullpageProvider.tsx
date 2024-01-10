"use client";

import React, { useEffect, useRef } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { gsap } from "gsap";

import { CustomEase } from "gsap/CustomEase";

import SplitType from "split-type";
// import Lottie from "lottie-web";
// import fullpage from "@fullpage/react-fullpage";

const opts = {
  autoScrolling: true,
  scrollHorizontally: true,
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
  const videoElement = useRef<HTMLVideoElement | null>(null);
  const bgImagesTimeline = useRef<gsap.core.Tween | null>(null);

  const onLeave = (origin: any, destination?: any, direction?: any) => {
    if (destination.anchor == "first") {
      if (direction == "down") {
      } else {
        about.current?.seek(0.3);
        console.log("SeeKed");
      }
    }

    if (destination.anchor == "second") {
      if (direction == "down") {
        // anim__section2__down.restart();
        textAnim__section2__down.current?.restart();
      } else {
        // textAnim__section2__up.restart();
        // anim__section2__up.restart();
      }
    }

    if (destination.anchor == "third") {
      videoElement.current && (videoElement.current.currentTime = 1.6);
      videoElement.current?.play();
    }

    if (destination.anchor == "fourth") {
      if (direction == "down") {
        // anim__section2__down.restart();
        console.log("fourth");

        bgImagesTimeline.current?.restart(true);
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
          }
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
            stagger: 0.14,
            ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
          }
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
          }
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
          }
        );
    }
  };
  const getRotation = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    gsap.registerPlugin(CustomEase);
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
        }
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
        "-=0.9"
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
        }
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
        "-=0.9"
      );

    const myText = new SplitType("#my-text", { types: "lines,chars" });

    textAnim__section2__down.current = gsap.from("#my-text .char", 1.4, {
      y: "200%",
      skewX: -10,
      scaleY: 1.5,
      paused: true,
      delay: 1.3,
      stagger: 0.04,
      ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
    });

    bgImagesTimeline.current = gsap.fromTo(
      ".bgImages",
      {
        y: "200%",
        left: 0,
      },
      {
        y: "0%",
        left: function (index, target, targets) {
          //function-based value
          console.log(target);
          console.log(targets);

          return 450 + index * -150;
        },

        paused: true,
        delay: 0.8,
        stagger: 0.08,
        duration: 1,
        ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
      }
    );

    videoElement.current = document.querySelector("#video") as HTMLVideoElement;

    // console.log(gsap);
    // console.log(SplitType);
    // console.log(Lottie);
    // console.log(fullpage);
    return () => {
      about.current?.kill();
      textAnim__section2__down.current?.kill();
      bgImagesTimeline.current?.kill();
    };
  }, []);

  return (
    <ReactFullpage
      {...opts}
      onLeave={onLeave}
      render={({ state, fullpageApi }) => {
        // console.log(state, fullpageApi);
        const childrenWithProps = React.Children.map(children, (child) =>
          React.cloneElement(child as React.ReactElement<any>, {
            state,
          })
        );

        return <ReactFullpage.Wrapper>{children}</ReactFullpage.Wrapper>;
      }}
    />
  );
};

export default FullpageProvider;
