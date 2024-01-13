import { Cursor } from "./cursor";
import { ContactSection } from "@/components/contactSection/contactSection";

import { HeroSection } from "@/components/heroSection/heroSection";
import React from "react";
import Image from "next/image";
export function Main() {
  // console.log(state);

  return (
    <>
      <HeroSection />
      <section className="section section__2 second">
        <div className="rounded__div__down black">
          <div className="round__bg__down white"></div>
        </div>
        <div className="rounded__div__up black">
          <div className="round__bg__up white"></div>
        </div>
        <div className="about__me anime">
          <div className="container">
            <div className="section__2_left" id="my-text">
              About Me<span className="yellow__it">.</span>
            </div>
            <div className="section__2_right">
              <div className="section__2_top" id="my-text2">
                Hey, I&#39;m Coex. You may learn more about me on linkedIn.
                Simply click the next button.
              </div>
              <div className="section__2_bottom">
                <a
                  data-strength="100"
                  href="https://www.linkedin.com/in/coex--/"
                  className="magnetic footer__heading"
                >
                  <span className="shapka">
                    About<span className="yellow__it">.</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="me anime">My Skills</div>
        <div id="one" className="anime">
          <div className="slider_wip">
            <div className="slider-inner rollingText2 slider">
              <div className="g-7">
                <div className="img-wrapper">
                  <Image
                    width={100}
                    height={100}
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968512.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="g-7">
                <div className="img-wrapper">
                  <Image
                    width={100}
                    height={100}
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968589.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="g-7">
                <div className="img-wrapper">
                  <Image
                    width={100}
                    height={100}
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968555.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="g-7">
                <div className="img-wrapper">
                  <Image
                    width={100}
                    height={100}
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968333.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="g-7">
                <div className="img-wrapper">
                  <Image
                    width={100}
                    height={100}
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968305.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="g-7">
                <div className="img-wrapper">
                  <Image
                    width={100}
                    height={100}
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968351.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="proxy-slider"></div>
            </div>
            <div className="slider-inner rollingText3 slider">
              <div className="g-7">
                <div className="img-wrapper">
                  <Image
                    width={100}
                    height={100}
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968512.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="g-7">
                <div className="img-wrapper">
                  <Image
                    width={100}
                    height={100}
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968589.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="g-7">
                <div className="img-wrapper">
                  <Image
                    width={100}
                    height={100}
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968555.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="g-7">
                <div className="img-wrapper">
                  <Image
                    width={100}
                    height={100}
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968333.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="g-7">
                <div className="img-wrapper">
                  <Image
                    width={100}
                    height={100}
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968305.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="g-7">
                <div className="img-wrapper">
                  <Image
                    width={100}
                    height={100}
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968351.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="proxy-slider"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section__3 third !h-[100vh] overflow-hidden ">
        <div className="rounded__div__down white">
          <div className="round__bg__down black"></div>
        </div>
        <div className="rounded__div__up white">
          <div className="round__bg__up black"></div>
        </div>
        <div>
          <div className="anime">
            <h2 className="heading">
              recent <br />
              work
            </h2>
          </div>

          <a href="work.html" className="work__cto anime">
            <div className="left">
              <svg
                width="21"
                height="6"
                viewBox="0 0 21 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 2V4H14.5V6L20.5 3L14.5 0V2H0.5Z"
                  fill="var(--colorLight)"
                />
              </svg>
            </div>
            <div className="center">
              view all work<span className="yellow__it"> .</span>
            </div>
            <div className="right">
              <svg
                width="21"
                height="6"
                viewBox="0 0 21 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 2V4H14.5V6L20.5 3L14.5 0V2H0.5Z"
                  fill="var(--colorLight)"
                />
              </svg>
            </div>
          </a>
        </div>
        <div className="section3__video anime">
          <video
            id="video"
            autoPlay
            muted
            loop
            src="/video/transcode.mp4"
          ></video>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
