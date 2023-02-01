gsap.registerPlugin(ScrollTrigger);
// locoScroll.init();
// locoScroll.start();

// locoScroll.update();
// ScrollTrigger.refresh();

var targets = document.querySelectorAll(".menu__item-link");

targets.forEach((target) => {
  target.addEventListener("mouseover", mOver, false);
  target.addEventListener("mouseout", mOut, false);
});

function mOver() {
  targets.forEach((target) => {
    target.classList.add("active");
  });
}

function mOut() {
  targets.forEach((target) => {
    target.classList.remove("active");
  });
}

const clamp = (val, min, max) => Math.max(min, Math.min(max, val));

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".scrollContainer"),
  smooth: true,
  getSpeed: true,
  getDirection: true,
  smoothMobile: true,
  lerp: 0.06,
});

const contents = document.querySelectorAll(".menu__item");
var speed = 0;

locoScroll.on("scroll", (args) => {
  // console.log(args);
  speed = args.speed;
  contents.forEach((content) => {
    content.style.transform = "skewY(" + clamp(speed, -8, 8) + "deg)";
  });
});

// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)

locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".scrollContainer", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".scrollContainer").style.transform
    ? "transform"
    : "fixed",
});

// window.addEventListener("load", (event) => {
//   let intro = gsap
//     .timeline({ defaults: { ease: "none" } })
//     .to(".intro .animate__this1", {
//       y: "0%",
//       scaleY: 1,
//       skewX: "0deg",
//       delay: 0.3,
//       duration: 0.9,
//       ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
//     })
//     .to(".intro .animate__this1", {
//       y: "-140%",
//       scaleY: 1.5,
//       duration: 0.9,
//       ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
//     })
//     .to(
//       ".intro .animate__this2",
//       {
//         y: "0%",
//         scaleY: 1,
//         skewX: "0deg",
//         duration: 0.9,
//         ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
//       },
//       "-=0.9"
//     )
//     .to(
//       ".intro .animate__this2",
//       {
//         y: "-140%",
//         scaleY: 1.5,
//         delay: 1,
//         duration: 0.9,
//         ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
//       },
//       "-=0.9"
//     )
//     .to(
//       ".intro .animate__this3",
//       {
//         y: "0%",
//         scaleY: 1,
//         skewX: "0deg",
//         duration: 0.9,
//         ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
//       },
//       "-=0.9"
//     )
//     .to(
//       ".intro",
//       {
//         // y: "-100%",
//         opacity: 0,
//         duration: 0.5,
//         ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
//       },
//       "+=0.5"
//     )
//     .from(
//       ".section__1 .anim",
//       {
//         y: "100%",
//         opacity: 0,
//         skewX: "-10deg",
//         scaleY: 1.5,
//         stagger: 0.12,
//         duration: 0.9,
//         ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
//       },
//       "-=0.5"
//     );

//   gsap.to("#starter__number", {
//     innerText: 100,
//     duration: 4,
//     snap: {
//       innerText: 1,
//     },
//     ease: CustomEase.create("custom", "M0,0,C0,0,0,1,1,1"),
//   });
// });

// let about = gsap
//   .timeline({ defaults: { ease: "none" }, repeat: 1 })
//   .to(".left .animate__this1", {
//     y: "0%",
//     opacity: 1,
//     duration: 0.9,
//     ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
//   })
//   .to(".left .animate__this1", {
//     y: "-140%",
//     opacity: 0,
//     delay: 1.7,
//     duration: 0.9,
//     ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
//   })
//   .to(
//     ".left .animate__this2",
//     {
//       y: "0%",
//       opacity: 1,
//       duration: 0.9,
//       ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
//     },
//     "-=0.9"
//   )
//   .to(
//     ".left .animate__this2",
//     {
//       y: "-140%",
//       opacity: 0,
//       delay: 2.7,
//       duration: 0.9,
//       ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
//     },
//     "-=0.9"
//   )
//   .to(
//     ".left .animate__this3",
//     {
//       y: "0%",
//       opacity: 1,
//       duration: 0.9,
//       ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
//     },
//     "-=0.9"
//   );
// .to(
//   ".left .animate__this3",
//   {
//     y: "-140%",
//     opacity: 0,
//     delay: 2.7,
//     duration: 0.9,
//     ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
//   },
//   "-=0.9"
// );

gsap.to(".rotatedAnchor .circulerText", {
  scrollTrigger: {
    trigger: ".rotatedAnchor .circulerText",
    start: "top bottom",
    scroller: ".scrollContainer",
    end: "bottom top",
    scrub: 1,
  },
  rotate: 720,
});
// ScrollTrigger.create({
//   trigger: ".section__3",
//   start: "top 40%",
//   scroller: ".scrollContainer",
//   animation: intro,
//   // markers: true,
//   toggleActions: "restart none none reverse",
// });

//
//
//

// gsap.from(".sick2 .content__section", {
//   scrollTrigger: {
//     trigger: ".sick2",
//     start: "top bottom",
//     scroller: ".scrollContainer",
//     end: "top center",
//     scrub: true,
//     // markers: true,
//   },
//   y: "-100%",
//   opacity: 0.3,
//   ease: "none",
// });

// gsap.from(".sick2 video", {
//   scrollTrigger: {
//     trigger: ".sick2",
//     start: "30% bottom",
//     scroller: ".scrollContainer",
//     end: "top center",
//     scrub: true,
//     // markers: true,
//   },
//   opacity: 0,
// });

gsap.to("html", {
  scrollTrigger: {
    trigger: ".section__4",
    start: "top center",
    scroller: ".scrollContainer",
    end: "end end",
    scrub: 0.5,
    // markers: true,
  },
  "--section4__padding": "0px",
});

// let textrev = gsap.timeline();

// textrev
//   .from(".section__2 .small__heading span", 1.8, {
//     y: 200,
//     ease: "power4.out",
//     skewY: 10,
//     stagger: {
//       amount: 0.4,
//     },
//   })
//   .from(
//     ".section__2 .small__heading__ribbon",
//     {
//       ease: "power4.out",
//       scaleX: 0,
//       duration: 1,
//     },
//     "-=0.70"
//   )
//   .from(
//     ".section__2 h2 div span",
//     1.8,
//     {
//       y: 200,
//       ease: "power4.out",
//       skewY: 10,
//       stagger: {
//         amount: 0.4,
//       },
//     },
//     "-=1"
//   )
//   .from(
//     ".section__2 h4 div span",
//     1.8,
//     {
//       y: 200,
//       ease: "power4.out",
//       skewY: 10,
//       stagger: {
//         amount: 0.4,
//       },
//     },
//     "-=1.7"
//   );

// ScrollTrigger.create({
//   trigger: ".small__heading",
//   start: "top 50%",
//   scroller: ".scrollContainer",
//   animation: textrev,
//   // markers: true,
//   toggleActions: "play none none none",
// });

// let tl = gsap
//   .timeline({ defaults: { ease: "none" } })
//   .to(".section__3__bg", {
//     rotation: 15,
//     duration: 0.9,
//     ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
//   })
//   .to(".bg__img2", {
//     opacity: 1,
//     x: -600,
//     duration: 0.9,
//     ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
//   })
//   .to(
//     ".bg__img1",
//     {
//       opacity: 1,
//       x: 600,
//       duration: 0.9,
//       ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
//     },
//     "-=0.50"
//   );

// ScrollTrigger.create({
//   trigger: ".section__3",
//   start: "top 40%",
//   scroller: ".scrollContainer",
//   animation: tl,
//   // markers: true,
//   toggleActions: "restart none none reverse",
// });

let tl2 = gsap
  .timeline({ defaults: { ease: "none" } })
  .from(".footer__heading", {
    opacity: 0,
    y: 500,
    duration: 0.7,
    ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
  })
  .from(
    ".footer__img",
    {
      opacity: 0,
      y: 500,
      duration: 0.9,
      ease: CustomEase.create("custom", "M0,0 C0.906,0 0.16,1 1,1 "),
    },
    "-=0.60"
  )
  .from(
    ".footer__links",
    {
      opacity: 0,
      y: 500,
      duration: 0.9,
      ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
    },
    "-=0.6"
  );

ScrollTrigger.create({
  trigger: ".section__5",
  start: "88% bottom",
  end: "top bottom",
  scroller: ".scrollContainer",
  animation: tl2,
  // markers: true,
  toggleActions: "restart none none reverse",
});

let whiteToBlack = gsap.fromTo(
  "html",
  {
    "--color1": "#f7f7f7",
    "--foreground-color": "#212121",
    "--background-color": "#fff",
  },
  {
    "--color1": "#000",
    "--background-color": "#000",
    "--foreground-color": "#fff",
  }
);

ScrollTrigger.create({
  trigger: ".section__3",
  start: "top 30%",
  end: "+=150",
  scroller: ".scrollContainer",
  // markers: true,
  scrub: 1,
  // toggleActions: "restart none none reverse",
  animation: whiteToBlack,
});

// let blackToWhite = gsap.fromTo(
//   "html",
//   {
//     "--background-color": "black",
//     "--foreground-color": "white",
//   },
//   {
//     "--background-color": "white",
//     "--foreground-color": "black",
//   }
// );

// ScrollTrigger.create({
//   trigger: ".section__4",
//   start: "bottom bottom",
//   end: "bottom bottom",
//   scroller: ".scrollContainer",
//   markers: true,
//   scrub: 1,
//   // toggleActions: "restart none none reverse",
//   animation: blackToWhite,
// });

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

//watch the free video on how this demo was made
// https://www.snorkl.tv/scrolltrigger-smooth-scroll/

// cursor.

document.addEventListener("mousemove", function (e) {
  gsap.to(".cursor", {
    x: e.clientX,
    y: e.clientY,
    stagger: 0.06,
  });
});
