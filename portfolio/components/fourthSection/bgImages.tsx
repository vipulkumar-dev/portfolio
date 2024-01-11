import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useAppSelector } from "@/hooks/reduxHooks";
import { memo } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { getRandRgb, getRandRotation } from "@/lib/utils";

const bgImagesData = [
  {
    id: 1,
    imgLink: "",
    title: "",
    subtitle: "",
  },
  {
    id: 2,
    imgLink: "",
    title: "",
    subtitle: "",
  },
  {
    id: 3,
    imgLink: "",
    title: "",
    subtitle: "",
  },
  {
    id: 4,
    imgLink: "",
    title: "",
    subtitle: "",
  },
  {
    id: 5,
    imgLink: "",
    title: "",
    subtitle: "",
  },
  {
    id: 6,
    imgLink: "",
    title: "",
    subtitle: "",
  },
  {
    id: 7,
    imgLink: "",
    title: "",
    subtitle: "",
  },
];

export const BgImages = ({ suscribe }: { suscribe?: number }) => {
  const bgImagesTimeline = useRef<gsap.core.Tween | null>(null);
  useEffect(() => {
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

          return 450 + index * -150;
        },

        // paused: true,
        delay: 0.8,
        stagger: 0.08,
        duration: 1,
        ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
      }
    );

    return () => {
      bgImagesTimeline.current?.kill();
    };
  });

  // useEffect(() => {
  //   // bgImagesTimeline.current?.restart(true);
  // });
  // function for get ranadom rgb

  const gap = 150;
  return (
    <a
      style={
        {
          // left: `${(bgImagesData.length * gap) / 2 + 40}px`,
        }
      }
      className="footer__img_wrapper  flex absolute justify-center items-center"
    >
      {bgImagesData.map((item, i) => (
        <div
          style={{
            backgroundColor: getRandRgb(),
            left: `${450 + i * -gap}px`,
            // top: `${i * 40}px`,
            rotate: `${getRandRotation(-30, 30)}deg`,
            zIndex: `${
              Math.floor(bgImagesData.length / 2) == i
                ? 520
                : Math.floor(Math.random() * 10)
            }`,
          }}
          className="w-[320px] h-[400px] absolute rounded-3xl bgImages translate-y-[0%] translate-x-[-50%] origin-center"
          key={item.id}
        ></div>
      ))}
    </a>
  );
};
