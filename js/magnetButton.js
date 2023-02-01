let link = document.querySelector(".vipul1");
let link2 = document.querySelector(".vipul2");
let section = document.querySelector(".section__1");

class hoverEffect {
  constructor(el) {
    this.el = el;
    this.hire_me = el.querySelector(".hire-me--text");
    this.shapka = el.querySelector(".shapka");
    this.hover = false;
    this.calculatePosition();
    this.attachEventsListener();
  }

  attachEventsListener() {
    section.addEventListener("mousemove", (e) => this.onMouseMove(e));
    section.addEventListener("resize", (e) => this.calculatePosition(e));
  }

  calculatePosition() {
    gsap.set(this.el, {
      x: 0,
      y: 0,
    });
    const box = this.el.getBoundingClientRect();
    this.x = box.left + box.width * 0.5;
    this.y = box.top + box.height * 0.5;
    this.width = box.width;
    this.height = box.height;
  }

  onMouseMove(e) {
    let hover = false;
    let hoverArea = this.hover ? 0.7 : 0.5;
    let x = e.clientX - this.x;
    let y = e.clientY - this.y;
    let distance = Math.sqrt(x * x + y * y);
    if (distance < this.width * hoverArea) {
      hover = true;
      if (!this.hover) {
        this.hover = true;
      }
      this.onHover(e.clientX, e.clientY);
    }

    if (!hover && this.hover) {
      this.onLeave();
      this.hover = false;
    }
  }

  onHover(x, y) {
    gsap.to(this.hire_me, {
      x: (x - this.x) * 0.2,
      y: (y - this.y) * 0.2,
      duration: 0.4,
      ease: Power2.easeOut,
    });
    gsap.to(this.shapka, {
      x: (x - this.x) * 0.3,
      y: (y - this.y) * 0.3,
      duration: 0.4,
      ease: Power2.easeOut,
    });
  }

  onLeave() {
    gsap.to([this.shapka, this.hire_me], {
      x: 0,
      y: 0,
      duration: 1.5,
      ease: Elastic.easeOut,
    });
  }
}

new hoverEffect(link);
new hoverEffect(link2);
