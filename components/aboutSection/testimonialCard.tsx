import React from "react";

type TestimonialCardProps = {
  clientName: string;
  testimonial: string;
};

export default function TestimonialCard({
  clientName,
  testimonial,
}: TestimonialCardProps) {
  return (
    <article className="swiper-slide mask   rounded-3xl  bg-colorSecondaryLight  px-16  py-[1.5em] opacity-80 max-md:px-5 md:rounded-[3rem] md:py-[1.1em] ">
      <div className="testimonialHeader flex items-center gap-[1em] md:block">
        <div className="h-[70px] w-[70px] rounded-full bg-colorLight md:mt-2.5 md:h-[106px] md:w-[106px]" />
        <p className="max-w-fit justify-center whitespace-nowrap rounded-[30px] bg-colorSecondaryDark px-4 py-2 text-sm font-medium leading-5 tracking-normal text-stone-100 md:mt-5">
          {clientName}
        </p>
      </div>
      <p className="mt-[1em] text-[0.8em]  tracking-tight  max-md:max-w-full  ">
        {testimonial}
      </p>
    </article>
  );
}
