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
    imgLink:
      "https://scontent.cdninstagram.com/v/t51.29350-15/412493075_1655284558214576_7155881858955888873_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=abihNFapfYcAX_-kj1V&_nc_ht=scontent.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AfBoTwPrit9X_Gzugd23R-9ad5vGlzz2B0wPM0hAB48AbA&oe=65A52EDB",
    title: "",
    subtitle: "",
  },
  {
    id: 2,
    imgLink:
      "https://scontent.cdninstagram.com/v/t51.29350-15/416509460_272419918840933_1887840669524509545_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=HRJQ-eDxVYsAX-7p2sg&_nc_ht=scontent.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AfCV6tyv1Bmi6jEOUZxE0372mqC8AtGHzdooS-_Lb_vRdg&oe=65A49F4A",
    title: "",
    subtitle: "",
  },
  {
    id: 3,
    imgLink:
      "https://scontent.cdninstagram.com/v/t51.29350-15/413236444_332729426282187_672327673182001002_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=tR3BKKmL7lQAX-GSrj2&_nc_ht=scontent.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AfBhqK4Xmwj6cwN4S5eT7ywI6KUZ-RP5ZsfGV2P9Btzhuw&oe=65A499CC",
    title: "",
    subtitle: "",
  },
  {
    id: 4,
    imgLink:
      "https://scontent.cdninstagram.com/v/t51.29350-15/413953549_390081976839568_7613069954670142331_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=kRV8eLsy6zsAX9B0fGC&_nc_ht=scontent.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AfAwMGEV-SwQ46vP56pB6j_sPsqr9DumXKqGgaHlpW1r5w&oe=65A401F3",
    title: "",
    subtitle: "",
  },
  {
    id: 5,
    imgLink:
      "https://scontent.cdninstagram.com/v/t51.29350-15/413907896_747340443925627_7282997310284058081_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=f_SLijztA7gAX9F70lo&_nc_ht=scontent.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AfDlMWwc2fJlso6llgRlCchTIqYaf4RXfjX40cp7aW13hA&oe=65A4ACDD",
    title: "",
    subtitle: "",
  },
  {
    id: 6,
    imgLink:
      "https://scontent.cdninstagram.com/v/t51.29350-15/413415746_2339617886239499_7506335399156934676_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=f44SBSB9z44AX91D17c&_nc_ht=scontent.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AfCxATn8iw6eT18Bs2X7tDU4iAez0eXspWxiSofUxOJjcA&oe=65A5A6C7",
    title: "",
    subtitle: "",
  },
  {
    id: 7,
    imgLink:
      "https://scontent.cdninstagram.com/v/t51.29350-15/414274682_323944107267894_4709379989655752642_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=g9OzFdVc4_AAX81fsZP&_nc_ht=scontent.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AfBsn938ngkmH-6iItI9Z5qrH0nghtay1Pc15aebn-OZ_Q&oe=65A43F37",
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
  const GAP = 10;
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
          return 80 + index * -GAP + "%";
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
