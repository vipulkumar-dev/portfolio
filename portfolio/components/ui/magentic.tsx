import React, { use, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";

type MagenticProps = {
  children: React.ReactNode;
  className?: string;
  shapka?: React.ReactNode;
  strength?: number;
};
export default function Magentic({
  shapka,
  children,
  className,
  strength = 100,
}: MagenticProps) {
  const magnet = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (magnet.current === null) {
      return;
    }

    if (screen.width > 540) {
      magnet.current.addEventListener("mousemove", handleMagnetMove);
      magnet.current.addEventListener("mouseout", handleMagnetOut);
    }
    function handleMagnetOut(event: MouseEvent) {
      const eventTarget = event.currentTarget as HTMLDivElement;
      gsap.to([eventTarget, eventTarget.querySelector(".shapka")], {
        x: 0,
        y: 0,
        ease: "elastic.out(1,0.4)",
        duration: 1.5,
      });
    }

    function handleMagnetMove(event: MouseEvent) {
      var magnetButton = event.currentTarget as HTMLDivElement;
      // asiign a default value to magnet strength
      var magnetsStrength = strength;
      console.log(magnetsStrength);

      var bounding = magnetButton.getBoundingClientRect();
      var shapka = magnetButton.querySelector(".shapka");

      gsap.to(magnetButton, {
        x:
          ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) *
          magnetsStrength,
        y:
          ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) *
          magnetsStrength,
        ease: "power2.out",
        duration: 1,
      });
      if (shapka) {
        gsap.to(shapka, {
          x:
            ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) *
            (magnetsStrength / 2),
          y:
            ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) *
            (magnetsStrength / 2),
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
    <div ref={magnet} className={className}>
      {children}
    </div>
  );
}
