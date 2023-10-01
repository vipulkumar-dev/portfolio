// var YOUR_API_KEY = "AIzaSyCRl-M5wCloEJ40LerD6hAK19D0iRAgbVs";

// fetch(
//   `https://youtube.googleapis.com/youtube/v3/commentThreads?part=id%2C%20snippet&searchTerms=vipul%20kumar&videoId=DuudSp4sHmg&key=${YOUR_API_KEY}`
// )
//   .then((response) => response.json())
//   .then((data) => console.log(data.items[0].snippet.topLevelComment.snippet));

document.addEventListener("mousemove", function (e) {
  gsap.to(".cursor", {
    x: e.clientX,
    y: e.clientY,
    stagger: 0.05,
  });
});

const introContainer = document.querySelector("#intro");
const logo_animation = document.querySelector("#logo_animation");

const animation__container = document.querySelector("#logo_animation");

const anim = lottie.loadAnimation({
  container: animation__container,
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "/bodymovin/data.json",
});

anim.addEventListener("complete", function () {
  introContainer.style.opacity = "0";
});

let about = gsap
  .timeline({ defaults: { ease: "none" }, repeat: -1 })
  .to(".left .animate__this1", {
    y: "0%",
    opacity: 1,
    duration: 0.9,
    ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
  })
  .to(".left .animate__this1", {
    y: "-140%",
    opacity: 0,
    delay: 1.7,
    duration: 0.9,
    ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
  })
  .to(
    ".left .animate__this2",
    {
      y: "0%",
      opacity: 1,
      duration: 0.9,
      ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
    },
    "-=0.9"
  )
  .to(
    ".left .animate__this2",
    {
      y: "-140%",
      opacity: 0,
      delay: 2.7,
      duration: 0.9,
      ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
    },
    "-=0.9"
  );

const myText = new SplitType("#my-text", { types: "lines,chars" });

let textAnim__section2__down = gsap.from("#my-text .char", 1.4, {
  y: "200%",
  skewX: -10,
  scaleY: 1.5,
  paused: true,
  delay: 1.3,
  stagger: 0.04,
  ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
});

const videoElement = document.querySelector("#video");

new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: false,
  navigationPosition: "left",
  scrollingSpeed: 1300,
  easingcss3: "cubic-bezier(.70,0,.30,1)",
  anchors: ["first", "second", "third", "fourth", "fifth", "sixth"],
  credits: { enabled: false },
  afterLoad: function () {},

  onLeave: function (index, nextIndex, direction) {
    // console.log(index);

    // console.log(direction);
    if (nextIndex.anchor == "first") {
      if (direction == "down") {
      } else {
        about.seek(1.2);
      }
    }

    if (nextIndex.anchor == "second") {
      if (direction == "down") {
        // anim__section2__down.restart();
        textAnim__section2__down.restart();
      } else {
        // textAnim__section2__up.restart();
        // anim__section2__up.restart();
      }
    }

    if (nextIndex.anchor == "third") {
      videoElement.currentTime = 1.6;
      videoElement.play();
    }

    var flex = screen.width > 540 ? 17 : 5;
    if (direction == "down") {
      gsap
        .timeline()
        .from(`.${nextIndex.anchor} .rounded__div__down`, {
          duration: 0.1,
        })
        .fromTo(
          `.${nextIndex.anchor} .rounded__div__down`,
          {
            height: `${flex}vh`,
          },
          {
            height: "0vh",
            duration: 1.2,
            ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
          }
        );

      gsap
        .timeline()
        .from(`.${nextIndex.anchor} .anime`, {
          duration: 0.3,
        })
        .fromTo(
          `.${nextIndex.anchor} .anime`,
          {
            y: "30vh",
          },
          {
            y: "0vh",
            duration: 1.1,
            stagger: 0.14,
            ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
          }
        );
    } else {
      gsap
        .timeline()
        .from(`.${nextIndex.anchor} .rounded__div__up`, {
          duration: 0.1,
        })
        .fromTo(
          `.${nextIndex.anchor} .rounded__div__up`,
          {
            height: `${flex}vh`,
          },
          {
            height: "0vh",
            duration: 1.2,
            ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
          }
        );

      gsap
        .timeline()
        .from(`.${nextIndex.anchor} .anime`, {
          duration: 0.3,
        })
        .fromTo(
          `.${nextIndex.anchor} .anime`,
          {
            y: "-30vh",
          },
          {
            y: "0vh",
            duration: 1.1,
            stagger: -0.08,
            ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
          }
        );
    }
  },
});

let direction = 1; // 1 = forward, -1 = backward scroll

const roll1 = roll(".rollingText", { duration: 15 });
// const roll2 = roll(".rollingText2", { duration: 15 });

gsap.fromTo(
  `.rollingText2`,
  {
    xPercent: 0,
  },
  {
    xPercent: -100,
    duration: 20,
    ease: CustomEase.create("custom", "M0,0,C0,0,1,1,1,1"),
    repeat: -1,
  }
);

gsap.fromTo(
  `.rollingText3`,
  {
    xPercent: 0,
  },
  {
    xPercent: -100,
    duration: 20,
    ease: CustomEase.create("custom", "M0,0,C0,0,1,1,1,1"),
    repeat: -1,
  }
);

gsap.set(`.rollingText3`, {
  left: `${document.querySelector(".rollingText3").offsetWidth}`,
});

// helper function that clones the targets, places them next to the original, then animates the xPercent in a loop to make it appear to roll across the screen in a seamless loop.
function roll(targets, vars, reverse) {
  vars = vars || {};
  vars.ease || (vars.ease = "none");
  const tl = gsap.timeline({
      repeat: -1,
      onReverseComplete() {
        this.totalTime(this.rawTime() + this.duration() * 10); // otherwise when the playhead gets back to the beginning, it'd stop. So push the playhead forward 10 iterations (it could be any number)
      },
    }),
    elements = gsap.utils.toArray(targets),
    clones = elements.map((el) => {
      let clone = el.cloneNode(true);
      el.parentNode.appendChild(clone);
      return clone;
    }),
    positionClones = () =>
      elements.forEach((el, i) =>
        gsap.set(clones[i], {
          position: "absolute",
          overwrite: false,
          top: el.offsetTop,
          left: "100%",
        })
      );
  positionClones();
  elements.forEach((el, i) =>
    tl.to([el, clones[i]], { xPercent: reverse ? 100 : -100, ...vars }, 0)
  );
  window.addEventListener("resize", () => {
    let time = tl.totalTime(); // record the current time
    tl.totalTime(0); // rewind and clear out the timeline
    positionClones(); // reposition
    tl.totalTime(time); // jump back to the proper time
  });
  return tl;
}

// // Variables
// const el = document.querySelector(".section__4 .title");
// const container = document.querySelector(".section__4 .container");

// // Variables ~ Widths
// let elWidth = el.offsetWidth;
// let windowWidth = window.innerWidth;

// // Variables ~ Mouse
// let mouseX = 0;
// let prevMouseX = 0;

// // Target: value we want to animate to
// let skewTarget = 0;
// let translateTarget = 0;

// // WithEasing: value we use to animate
// let skewWithEasing = 0;
// let translateWithEasing = 0;

// // EasingFactor: determines how quick the animation/interpolation goes
// let skewEasingFactor = 0.1;
// let translateEasingFactor = 0.05;

// // Events
// container.addEventListener("mousemove", handleMouseMove);
// container.addEventListener("resize", handleWindowResize);

// // Functions
// function handleMouseMove(e) {
//   mouseX = e.pageX;
// }

// function handleWindowResize(e) {
//   elWidth = el.offsetWidth;
//   windowWidth = window.innerWidth;
// }

// function lerp(start, end, factor) {
//   return (1 - factor) * start + factor * end;
// }

// function animateMe() {
//   // Get difference between current and previous mouse position
//   skewTarget = mouseX - prevMouseX;
//   prevMouseX = mouseX;

//   // Calc how much we need to translate our el
//   translateTarget = ((elWidth - windowWidth) / windowWidth) * mouseX * -1;

//   // Ease between start and target values (skew)
//   skewWithEasing = lerp(skewWithEasing, skewTarget, skewEasingFactor);

//   // Limit our skew to a range of 75 degrees so it doesn't "over-skew"
//   skewWithEasing = Math.min(Math.max(parseInt(skewWithEasing), -75), 75);

//   // Ease between start and target values (translate)
//   translateWithEasing = lerp(
//     translateWithEasing,
//     translateTarget,
//     translateEasingFactor
//   );

//   el.style.transform = `translateX(${translateWithEasing}px)`;

//   //   el.style.transform = `
//   //   translateX(${translateWithEasing}px)
//   //   skewX(${skewWithEasing}deg)
//   // `;

//   // RAF
//   window.requestAnimationFrame(animateMe);
// }

// window.requestAnimationFrame(animateMe);
