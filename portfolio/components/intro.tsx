import React, { useEffect } from "react";
import lottie from "lottie-web";
import animationData from "@/data/data.json";
import Lottie from "lottie-react";

export function Intro({}) {
  useEffect(() => {
    const introContainer = document.querySelector("#intro") as HTMLElement;
    const logo_animation = document.querySelector("#logo_animation");
    const vipul = document.querySelector(
      "#intro > div.animation__container > svg",
    );
    if (vipul) {
      // console.log(vipul);

      // vipul.onmousemove = () => {
      //   console.log("move");
      // };
      vipul.addEventListener("mousemove", () => {
        console.log("click");
      });
    }
    // const animation__container = document.querySelector(
    //   "#logo_animation",
    // ) as HTMLElement;

    // const anim = lottie.loadAnimation({
    //   container: animation__container,
    //   renderer: "svg",
    //   loop: false,
    //   autoplay: true,
    //   animationData: animationData,
    // });

    // anim.addEventListener("complete", function () {
    //   //   introContainer.style.opacity = "0";
    // });
    return () => {
      //   anim.destroy();
    };
  }, []);

  return (
    <div id="intro" className="home__starteranimation">
      <div className="background__color"></div>
      {/* <div className="animation__container not"></div> */}
      {/* <div id="logo_animation" className="animation__container anim"></div> */}
      <Lottie
        className="animation__container"
        animationData={animationData}
        loop={true}
        autoplay={true}
      />
    </div>
  );
}
