import React from "react";

type TestimonialCardProps = {
  clientName: string;
  testimonial: string;
  imgSrc: string;
};

export default function TestimonialCard({
  clientName,
  testimonial,
  imgSrc,
}: TestimonialCardProps) {
  return (
    <article className="swiper-slide mask rounded-3xl px-16  py-[1.5em] max-md:px-5 md:rounded-[3rem] md:py-[1.1em] ">
      <div className="testimonialHeader flex items-center gap-[1em] md:block">
        <div
          // src={imgSrc}
          // alt=""
          className="h-[60px] w-[60px] rounded-full bg-colorLight md:mt-2.5 md:h-[106px] md:w-[106px]"
        ></div>
        <p className="max-w-fit justify-center whitespace-nowrap rounded-[30px] bg-colorSecondaryDark px-4 py-2 text-sm font-medium leading-5 tracking-normal text-stone-100 md:mt-5">
          {clientName}
        </p>
      </div>
      <p className="mt-[1em] text-[0.8em]  tracking-tight  max-md:max-w-full  ">
        “{testimonial}”
      </p>
      <div className="absolute left-0 top-0 -z-10 h-full w-full bg-colorSecondaryLight opacity-80"></div>
    </article>
  );
}
