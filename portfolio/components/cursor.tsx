import React, { useEffect } from "react";
import { gsap } from "gsap";
export function Cursor() {
  useEffect(() => {
    // let xTo = gsap.quickTo(".cursor", "x", {
    //     duration: 0.4,
    //     ease: "power3",
    //     // stagger: 0.05,
    //   }),
    //   yTo = gsap.quickTo(".cursor", "y", {
    //     duration: 0.4,
    //     ease: "power3",
    //     // stagger: 0.05,
    //   });
    function handleMove(e: MouseEvent) {
      gsap.to(".cursor", {
        x: e.clientX,
        y: e.clientY,
        stagger: 0.05,
      });
      // xTo(e.pageX);
      // yTo(e.pageY);
    }

    document.addEventListener("mousemove", handleMove);

    return () => {
      document.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <>
      <div className="cursor cursor1"></div>
      <div className="cursor cursor2"></div>
    </>
  );
}
