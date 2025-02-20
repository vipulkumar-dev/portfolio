import React, { memo, use, useEffect, useRef } from "react";
import { gsap } from "gsap";

import { cn, isDesktop } from "@/lib/utils";

interface MagenticProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href?: string;
  className?: string;
  strength?: number;
  hoverUnderline?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  scrambleParams?:
    | {
        text: string;
        chars?: string;
        speed?: number;
      }
    | {
        text: string;
        chars?: string;
        speed?: number;
      }[];
}
const Magentic = ({
  children,
  className,
  onMouseEnter,
  onMouseLeave,
  scrambleParams,
  hoverUnderline = false,
  strength = 100,
  ...rest
}: MagenticProps) => {
  const magnet = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (magnet.current === null) {
      return;
    }

    const magnetButton = magnet.current as HTMLAnchorElement;
    const shapka = magnetButton.querySelector(".shapka");

    if (isDesktop()) {
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

  function handleScramble(
    scrambleParams: {
      text: string;
      chars?: string;
      speed?: number;
    },
    scrambleEl: HTMLElement,
  ) {
    if (typeof ScrambleTextPlugin !== "undefined") {
      gsap.set(scrambleEl, {
        width: scrambleEl?.clientWidth,
      });
      gsap
        .to(scrambleEl, {
          scrambleText: scrambleParams,
          duration: 0.8,
          ease: "power3.out",
        })
        .progress(0.04);
    }
  }
  return (
    <a
      ref={magnet}
      className={cn(
        "flex justify-center *:pointer-events-none  " +
          (hoverUnderline
            ? " before:absolute before:bottom-0 before:h-0.5 before:w-0 before:origin-center before:bg-[#a3a3a3] before:transition-all before:duration-300 hover:before:w-full "
            : " ") +
          className,
      )}
      onMouseEnter={() => {
        if (scrambleParams) {
          if (magnet.current === null) {
            return;
          }
          const magnetButton = magnet.current as HTMLAnchorElement;
          gsap.registerPlugin(ScrambleTextPlugin);

          const scrambleEl = magnetButton.querySelectorAll(".scrambleText");
          if (scrambleParams instanceof Array) {
            scrambleParams.forEach((param, i) => {
              handleScramble(
                { speed: 0.1, chars: "-x", ...param },
                scrambleEl[i] as HTMLElement,
              );
            });
          } else {
            handleScramble(
              { speed: 0.1, chars: "-x", ...scrambleParams },
              scrambleEl[0] as HTMLElement,
            );
          }
        }
        onMouseEnter?.();
      }}
      onMouseLeave={onMouseLeave}
      {...rest}
    >
      {children}
    </a>
  );
};

export default memo(Magentic);
