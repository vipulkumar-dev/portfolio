import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="cursor cursor1"></div>
      <div className="cursor cursor2"></div>

      <div id="intro" className="home__starteranimation">
        <div className="background__color"></div>
        <div className="animation__container not"></div>
        <div id="logo_animation" className="animation__container anim"></div>
      </div>

      <div id="fullpage">
        <section className="section section__1 first">
          <div className="rounded__div__down white">
            <div className="round__bg__down black"></div>
          </div>
          <div className="rounded__div__up white">
            <div className="round__bg__up black"></div>
          </div>
          <header className="nav__container anime">
            <nav className="nav__bar">
              <ul>
                <li data-strength="50" className="nav__item magnetic">
                  <a href="work.html"> Work </a>
                </li>
                <li data-strength="50" className="nav__item magnetic">
                  <a href="https://www.linkedin.com/in/coex-/"> About </a>
                </li>
              </ul>
            </nav>
          </header>
          <div className="section1__wrapper">
            <div className="myImage width={100} height={100}"></div>

            <div className="email_section1 anime">
              <div className="sqaure">
                Located in
                <br />
                Rajasthan, India
              </div>
              <div className="round">
                <Image
                  width={100}
                  height={100}
                  src="Image width={100} height={100}/logo2.png"
                  alt=""
                />
              </div>
            </div>
            <h2 className="left">
              <div className="free anime">
                &nbsp;Freelance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
              <div className="animation__wrapper anime">
                <span>&nbsp;</span>
                <span className="animate__this animate__this1">
                  Designer <span className="yellow__it">.</span>
                  <br />
                </span>
                <span className="animate__this animate__this2">
                  Developer<span className="yellow__it">.</span>
                </span>
              </div>
            </h2>

            <div className="wrapperRollingText anime">
              <div className="rollingText text">- coex - coex - coex&nbsp;</div>
            </div>
          </div>
        </section>
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
                  <div className="Image width={100} height={100}-wrapper">
                    <Image
                      width={100}
                      height={100}
                      data-src="https://cdn-icons-png.flaticon.com/512/5968/5968512.png"
                      src=""
                      alt=""
                    />
                  </div>
                </div>
                <div className="g-7">
                  <div className="Image width={100} height={100}-wrapper">
                    <Image
                      width={100}
                      height={100}
                      src=""
                      data-src="https://cdn-icons-png.flaticon.com/512/5968/5968589.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="g-7">
                  <div className="Image width={100} height={100}-wrapper">
                    <Image
                      width={100}
                      height={100}
                      src=""
                      data-src="https://cdn-icons-png.flaticon.com/512/5968/5968555.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="g-7">
                  <div className="Image width={100} height={100}-wrapper">
                    <Image
                      width={100}
                      height={100}
                      src=""
                      data-src="https://cdn-icons-png.flaticon.com/512/5968/5968333.png"
                      alt=""
                    />
                  </div>
                </div>

                <div className="g-7">
                  <div className="Image width={100} height={100}-wrapper">
                    <Image
                      width={100}
                      height={100}
                      src=""
                      data-src="https://cdn-icons-png.flaticon.com/512/5968/5968305.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="g-7">
                  <div className="Image width={100} height={100}-wrapper">
                    <Image
                      width={100}
                      height={100}
                      src=""
                      data-src="https://cdn-icons-png.flaticon.com/512/5968/5968351.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="proxy-slider"></div>
              </div>
              <div className="slider-inner rollingText3 slider">
                <div className="g-7">
                  <div className="Image width={100} height={100}-wrapper">
                    <Image
                      width={100}
                      height={100}
                      src=""
                      data-src="https://cdn-icons-png.flaticon.com/512/5968/5968512.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="g-7">
                  <div className="Image width={100} height={100}-wrapper">
                    <Image
                      width={100}
                      height={100}
                      src=""
                      data-src="https://cdn-icons-png.flaticon.com/512/5968/5968589.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="g-7">
                  <div className="Image width={100} height={100}-wrapper">
                    <Image
                      width={100}
                      height={100}
                      src=""
                      data-src="https://cdn-icons-png.flaticon.com/512/5968/5968555.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="g-7">
                  <div className="Image width={100} height={100}-wrapper">
                    <Image
                      width={100}
                      height={100}
                      src=""
                      data-src="https://cdn-icons-png.flaticon.com/512/5968/5968333.png"
                      alt=""
                    />
                  </div>
                </div>

                <div className="g-7">
                  <div className="Image width={100} height={100}-wrapper">
                    <Image
                      width={100}
                      height={100}
                      src=""
                      data-src="https://cdn-icons-png.flaticon.com/512/5968/5968305.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="g-7">
                  <div className="Image width={100} height={100}-wrapper">
                    <Image
                      width={100}
                      height={100}
                      src=""
                      data-src="https://cdn-icons-png.flaticon.com/512/5968/5968351.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="proxy-slider"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section__3 third">
          <div className="rounded__div__down white">
            <div className="round__bg__down black"></div>
          </div>
          <div className="rounded__div__up black">
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
              data-src="video/transcode.mp4"
            ></video>
          </div>
        </section>

        <section className="section section__4">
          <section className="container">
            <div className="title">
              The pixel perfect 💡
              <Image
                width={100}
                height={100}
                src="Image width={100} height={100}/Image width={100} height={100}-five.jpg"
                alt=""
              />
            </div>
          </section>
        </section>

        <section className="section section__5 fourth">
          <div className="rounded__div__down black">
            <div className="round__bg__down black"></div>
          </div>
          <div className="rounded__div__up black">
            <div className="round__bg__up white"></div>
          </div>
          <a
            data-strength="100"
            href="mailto:email.coex@gmail.com"
            className="magnetic footer__heading anime"
          >
            <span className="shapka">
              Get a<br />
              Quoute<span className="yellow__it">.</span>
            </span>
          </a>
          <a className="footer__Image width={100} height={100}_wrapper anime">
            <Image
              width={100}
              height={100}
              src=""
              data-src="Image width={100} height={100}/webp/troa.webp"
              alt=""
              className="footer__Image width={100} height={100}"
            />
          </a>
          <div className="footer__links anime">
            <div className="footer__left">
              Copyright © 2012-2022 email.coex@gmail.com
            </div>
            <div className="footer__right">
              <a className="footer__icons" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="var(--colorLight)"
                  className="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>
              <a className="footer__icons" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="var(--colorLight)"
                  className="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
