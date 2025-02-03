import React, { use, useEffect } from "react";
import gsap from "gsap";

export function ImageSequence({
  sectionRef,
}: {
  sectionRef: React.RefObject<HTMLDivElement>;
}) {
  useEffect(() => {
    const canvas = document.getElementById(
      "hero-lightpass",
    ) as HTMLCanvasElement;
    const context = canvas.getContext("2d");
    // const frameCount = 147;
    const frameCount = 120;
    // const currentFrame = (index: number) =>
    //   `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${(index + 1).toString().padStart(4, "0")}.jpg`;
    const currentFrame = (index: number) =>
      `/modal_seq/${index.toString().padStart(3, "0")}.avif`;

    const images: HTMLImageElement[] = [];
    const airpods = {
      frame: 60,
    };
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    images[60].onload = render;
    function render() {
      context?.clearRect(0, 0, canvas.width, canvas.height);
      context?.drawImage(images[airpods.frame], 0, 0);
    }

    if (!sectionRef.current) return;
    const handleMouseMove = (event: MouseEvent) => {
      if (!sectionRef.current) return;
      const mousePositionX = event.clientX;
      const mappedX = gsap.utils.mapRange(
        0,
        sectionRef.current.offsetWidth,
        1,
        frameCount - 1,
        mousePositionX,
      );
      console.log(mappedX, mousePositionX);

      gsap.to(airpods, {
        frame: mappedX - 1,
        snap: "frame",
        ease: "none",
        duration: 0.2,
        onUpdate: render, // use animation onUpdate instead of scrollTrigger's onUpdate
      });
    };

    const sectionElement = sectionRef.current;
    sectionElement.addEventListener("mousemove", handleMouseMove);

    return () => {
      gsap.killTweensOf(airpods);
      sectionElement.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // const { isActive } = useAppSelector((state) => state.splineReducer);
  return (
    <div className="contrast-110 absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center grayscale">
      <canvas
        width={1024}
        height={1024}
        id="hero-lightpass"
        className="scale-[0.65] md:scale-[0.8] lg:scale-[1]"
      ></canvas>
    </div>
  );
}
