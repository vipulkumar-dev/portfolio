import React, { useEffect } from "react";
// import Spline from "@splinetool/react-spline/next";
// import { useAppSelector } from "@/hooks/reduxHooks";
// import Scene from "./reactThree";

import App from "./reactThree";

export function SplineScene({}) {
  // const { isActive } = useAppSelector((state) => state.splineReducer);
  return (
    <div className="absolute left-0 top-0 z-10 h-full w-full origin-top scale-[100%]">
      {/* <Spline
        // className={isActive ? "" : "hidden"}
        loading-anim-type="spinner-small-dark"
        scene="https://prod.spline.design/2Y1ZMOQCV5sQd6rM/scene.splinecode"
      /> */}
      {/* <img
        className="h-full w-full object-cover"
        src="/img/nexbot.png"
        alt=""
      /> */}
      <App />

      {/* <DynamicScene /> */}
      {/* <spline-viewer
        // class={isActive ? "" : "pointer-events-none"}
        url="https://prod.spline.design/2Y1ZMOQCV5sQd6rM/scene.splinecode"
      ></spline-viewer> */}
    </div>
  );
}
