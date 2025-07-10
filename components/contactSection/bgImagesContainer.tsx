import { BgImage } from "@/components/contactSection/bgImage";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useAppSelector } from "@/hooks/reduxHooks";
import { memo } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { getRandRgb, getRandValues, shuffle } from "@/lib/utils";

const bgImagesData = [
  {
    id: 1,
    imgLink: "/svg_logo/after-effects-logo.svg",
    title: "",
    subtitle: "",
  },
  {
    id: 2,
    imgLink: "/svg_logo/attributes-logo.svg",
    title: "",
    subtitle: "",
  },
  {
    id: 3,
    imgLink: "/svg_logo/client-first-logo.svg",
    title: "",
    subtitle: "",
  },
  {
    id: 4,
    imgLink: "/svg_logo/figma-logo.svg",
    title: "",
    subtitle: "",
  },
  {
    id: 5,
    imgLink: "/svg_logo/framer-logo.svg",
    title: "",
    subtitle: "",
  },
  {
    id: 6,
    imgLink: "/svg_logo/gsap-logo.svg",
    title: "",
    subtitle: "",
  },
  {
    id: 7,
    imgLink: "/svg_logo/mailchimp-logo.svg",
    title: "",
    subtitle: "",
  },
  {
    id: 8,
    imgLink: "/svg_logo/nextjs-logo.svg",
    title: "",
    subtitle: "",
  },
  {
    id: 9,
    imgLink: "/svg_logo/photoshop-logo.svg",
    title: "",
    subtitle: "",
  },
  {
    id: 10,
    imgLink: "/svg_logo/react-logo.svg",
    title: "",
    subtitle: "",
  },
  {
    id: 11,
    imgLink: "/svg_logo/spline-logo.svg",
    title: "",
    subtitle: "",
  },
  {
    id: 12,
    imgLink: "/svg_logo/rive-logo.svg",
    title: "",
    subtitle: "",
  },
  {
    id: 13,
    imgLink: "/svg_logo/typescript-logo.svg",
    title: "",
    subtitle: "",
  },
  {
    id: 14,
    imgLink: "/svg_logo/webflow-logo.svg",
    title: "",
    subtitle: "",
  },
];

function getRandDistrubutedTop(index: number, targets: any[]) {
  const mid = Math.floor(targets.length / 2);
  if (index === 0) {
    return 65;
  }

  if (index === targets.length - 1) {
    return 35;
  }

  if (index === mid) {
    return 50;
  }

  if (index < mid) {
    return getRandValues(30, 60);
  }
  if (index > mid) {
    return getRandValues(40, 70);
  }

  return getRandValues(30, 70);
}

export const BgImagesContainer = ({
  bgImagesSharedRef,
}: {
  bgImagesSharedRef: React.MutableRefObject<gsap.core.Tween | null>;
}) => {
  shuffle(bgImagesData);

  const bgImagesTween = useRef<gsap.core.Tween | null>(null);
  const GAP = 6;
  useEffect(() => {
    bgImagesTween.current = gsap.fromTo(
      ".bgImages",
      {
        y: "200%",
        x: "0%",
        left: "50%",
        rotate: 0,
        top: "50%",

        // filter: "blur(20px)",
      },
      {
        y: "-50%",
        x: "0%",
        left: function (index, target, targets) {
          return 90 + index * -GAP + "%";
        },
        top: function (index, target, targets) {
          return getRandDistrubutedTop(index, targets) + "%";
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
      },
    );

    bgImagesSharedRef.current = gsap.fromTo(
      ".footer__img_wrapper",
      {
        minWidth: "100%",
        minHeight: "100%",
      },
      {
        minWidth: "110%",
        minHeight: "150%",
        paused: true,
        delay: 0.1,
        duration: 0.6,
        ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
      },
    );

    return () => {
      bgImagesTween.current?.kill();
      bgImagesSharedRef.current?.kill();
    };
  });

  return (
    <div className="footer__img_wrapper bg-transparent-foreground  !absolute flex h-[100%] w-[100%] items-center justify-center overflow-hidden ">
      {bgImagesData.map((item, i) => (
        <BgImage key={item.id} total={bgImagesData.length} item={item} i={i} />
      ))}
    </div>
  );
};
