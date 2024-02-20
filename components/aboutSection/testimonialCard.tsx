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
    <article className="mt-[2em] min-w-[95%]  rounded-[48px]  bg-colorSecondaryHalfLight px-16 py-[1.1em] max-md:px-5 md:min-w-[950px] ">
      <div className="flex items-center gap-[1em] md:block">
        <div className="mt-2.5 h-[80px] w-[80px] rounded-full bg-colorLight md:h-[106px] md:w-[106px]" />
        <p className="mt-5 max-w-fit justify-center whitespace-nowrap rounded-[30px] bg-colorSecondaryDark px-4 py-2 text-sm font-medium leading-5 tracking-normal text-stone-100">
          {clientName}
        </p>
      </div>
      <p className="mt-[1em] text-[0.8em]  tracking-tight  max-md:max-w-full  md:text-[0.9em]">
        {testimonial}
      </p>
    </article>
  );
}
