import React, { memo, use, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { cn } from "@/lib/utils";

type MagenticProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
  strength?: number;
  hoverUnderline?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
const Magentic = ({
  children,
  className,
  onMouseEnter,
  onMouseLeave,
  hoverUnderline = false,
  strength = 100,
  ...rest
}: MagenticProps) => {
  const magnet = useRef<HTMLAnchorElement>(null);

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
    <a
      ref={magnet}
      className={cn(
        "flex justify-center *:pointer-events-none  " +
          className +
          (hoverUnderline
            ? " before:absolute before:bottom-0   before:h-0.5 before:w-0 before:origin-center before:bg-foreground before:transition-all before:duration-300  hover:before:w-full"
            : ""),
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...rest}
    >
      {children}
    </a>
  );
};

export default memo(Magentic);
