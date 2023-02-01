gsap.registerPlugin(Draggable);

class Slider {
  constructor({ el, row_id, wrap }) {
    // this.container = el;
    this.slider = el;
    this.row = row_id;

    this.wrap = wrap;

    this.proxy = this.row.querySelector(".proxy-slider");
    // this.inner = this.row.querySelector('#slider-inner');
    this.slides = [...this.slider.querySelectorAll(".g-7")];
    this.slidesNumb = this.slides.length - 1;
    this.sliderWidth = 0;

    this.draggable = null;

    this.current = 0;
    this.last = 0;

    this.offset = 0;

    this.init();
  }

  // Set slider and proxy width/transform
  setBounds() {
    this.sliderWidth = this.slides[0].offsetWidth * this.slidesNumb;

    gsap.set([this.slider, this.proxy], {
      width: this.sliderWidth,
      x: 0,
    });
  }

  createDraggable() {
    let slider = this.slider,
      inner = this.inner,
      getter = gsap.getProperty(slider),
      updateX = () =>
        gsap.to(slider, {
          x: this.draggable.x - this.offset,
          ease: "power2",
          overwrite: "auto",
        });

    this.draggable = Draggable.create(this.proxy, {
      type: "x",
      edgeResistance: 1,
      bounds: { minX: this.row.offsetWidth - this.proxy.offsetWidth, maxX: 0 },
      inertia: true,
      throwProps: true,
      callbackScope: this,
      onPress: function (e) {
        gsap.to(slider.children, {
          duration: 1.2,
          ease: CustomEase.create("custom", "M0,0,C0.402,0,0,1,1,1"),
          scale: 0.9,
          overwrite: true,
        });
        gsap.killTweensOf(slider);
        this.offset = this.draggable.x - getter("x");
      },
      onRelease: function () {
        gsap.to(slider.children, {
          duration: 1.2,
          ease: CustomEase.create("custom", "M0,0,C0.402,0,0,1,1,1"),
          scale: 1,
          overwrite: true,
        });
        this.offset = 0;
      },
      onDrag: updateX,
      onThrowUpdate: updateX,
    })[0];
  }

  init() {
    this.setBounds();
    this.createDraggable();
  }
}

const slider = new Slider({
  el: document.querySelector(".slider"),
  row_id: document.querySelector("#one"),
  wrap: document.querySelector("#slider-inner"),
});

console.log(slider);
