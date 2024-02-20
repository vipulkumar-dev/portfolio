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
    <article className="mask mt-[2em] min-w-[calc(100%-var(--paddingX))] rounded-3xl  bg-colorSecondaryLight  px-16  py-[1.5em] opacity-90 max-md:px-5 md:min-w-[950px] md:rounded-[3rem] md:py-[1.1em] ">
      <div className="testimonialHeader flex items-center gap-[1em] md:block">
        <div className="h-[70px] w-[70px] rounded-full bg-colorLight md:mt-2.5 md:h-[106px] md:w-[106px]" />
        <p className="max-w-fit justify-center whitespace-nowrap rounded-[30px] bg-colorSecondaryDark px-4 py-2 text-sm font-medium leading-5 tracking-normal text-stone-100 md:mt-5">
          {clientName}
        </p>
      </div>
      <p className="mt-[1em] text-[0.85em]  tracking-tight  max-md:max-w-full  md:text-[0.9em]">
        {testimonial}
      </p>
    </article>
  );
}
