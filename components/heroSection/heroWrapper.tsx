import React from "react";
import { HeroButton } from "./heroButton";
import { HeroMarquee } from "./heroMarquee";
export function HeroWrapper({}) {
  return (
    <main className="section1__wrapper relative max-w-maxWidth grow ">
      <div className="myImage"></div>
      <HeroButton />
      <h2 className="left mask pt-20">
        <div className="free anime">
          Website&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div className="animation__wrapper anime">
          <span className="animate__this animate__this1">
            Designer <span className="yellow__it">.</span>
            <br />
          </span>
          <span className="animate__this animate__this2">
            Developer<span className="yellow__it">.</span>
          </span>
          <span>&nbsp;</span>
        </div>
      </h2>
      <HeroMarquee />
    </main>
  );
}
