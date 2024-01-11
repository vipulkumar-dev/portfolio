import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useAppSelector } from "@/hooks/reduxHooks";
import { memo } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { getRandRgb, getRandValues } from "@/lib/utils";

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

export const BgImages = ({
  bgImagesSharedRef,
}: {
  bgImagesSharedRef: React.MutableRefObject<gsap.core.Tween | null>;
}) => {
  const bgImagesTween = useRef<gsap.core.Tween | null>(null);
  const GAP = 10;
  useEffect(() => {
    bgImagesTween.current = gsap.fromTo(
      ".bgImages",
      {
        y: "200%",
        x: "0%",
        left: "50%",
        rotate: 0,
        // filter: "blur(20px)",
      },
      {
        y: "0%",
        x: "0%",
        left: function (index, target, targets) {
          return 80 + index * -GAP + "%";
        },
        rotate: function (index, target, targets) {
          return getRandValues(-30, 30);
        },
        // filter: "blur(0px)",

        // paused: true,
        delay: 0.8,
        stagger: 0.08,
        duration: 1,
        ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
      }
    );

    bgImagesSharedRef.current = gsap.fromTo(
      ".footer__img_wrapper",
      {
        width: "100%",
      },
      {
        width: "110%",
        paused: true,
        delay: 0.1,
        duration: 0.6,
        ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
      }
    );

    return () => {
      bgImagesTween.current?.kill();
      bgImagesSharedRef.current?.kill();
    };
  });

  return (
    <div className="footer__img_wrapper  flex absolute justify-center items-center overflow-hidden w-[100%] h-[100%] ">
      {bgImagesData.map((item, i) => (
        <div
          style={{
            backgroundColor: getRandRgb(),
            zIndex: `${
              Math.floor(bgImagesData.length / 2) == i
                ? 520
                : Math.floor(Math.random() * 10)
            }`,
          }}
          className="w-[320px] h-[400px] absolute rounded-3xl bgImages translate-y-[0%] translate-x-[-50%] origin-[center_center]"
          key={item.id}
        ></div>
      ))}
    </div>
  );
};
