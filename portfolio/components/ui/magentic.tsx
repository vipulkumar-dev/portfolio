import React, { memo, use, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";

type MagenticProps = {
  children: React.ReactNode;
  className?: string;
  shapka?: React.ReactNode;
  strength?: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
const Magentic = ({
  shapka,
  children,
  className,
  onMouseEnter,
  onMouseLeave,
  strength = 100,
}: MagenticProps) => {
  const magnet = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (magnet.current === null) {
      return;
    }
    const magnetButton = magnet.current;
    const shapka = magnetButton.querySelector(".shapka");

    if (screen.width > 540) {
      magnetButton.addEventListener("mousemove", handleMagnetMove);
      magnetButton.addEventListener("mouseout", handleMagnetOut);
    }
    function handleMagnetOut(event: MouseEvent) {
      gsap.to([magnetButton, shapka], {
        x: 0,
        y: 0,
        ease: "elastic.out(1,0.4)",
        duration: 1.5,
      });
    }

    function handleMagnetMove(event: MouseEvent) {
      const bounding = magnetButton.getBoundingClientRect();
      const magneticWidth =
        (event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5;
      const magneticHeight =
        (event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5;

      gsap.to(magnetButton, {
        x: magneticWidth * strength,
        y: magneticHeight * strength,
        ease: "power2.out",
        duration: 1,
      });
      // shapka should be pointer events none

      if (shapka) {
        gsap.to(shapka, {
          x: magneticWidth * (strength / 2),
          y: magneticHeight * (strength / 2),
          ease: "power2.out",
          duration: 1,
        });
      }

      //magnetButton.style.transform = 'translate(' + (((( event.clientX - bounding.left)/(magnetButton.offsetWidth))) - 0.5) * strength + 'px,'+ (((( event.clientY - bounding.top)/(magnetButton.offsetHeight))) - 0.5) * strength + 'px)';
    }

    return () => {
      magnet.current?.removeEventListener("mousemove", handleMagnetMove);
      magnet.current?.removeEventListener("mouseout", handleMagnetOut);
    };
  }, []);
  return (
    <div
      ref={magnet}
      className={className + " *:pointer-events-none"}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {shapka && <div className="shapka">{shapka}</div>}
      {/* <div className="magnet"></div> */}
      {children}
    </div>
  );
};

export default memo(Magentic);
