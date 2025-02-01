import React from "react";

type ProjectCardProps = {
  imgSrc: string;
};

export default function ProjectCard({ imgSrc }: ProjectCardProps) {
  return (
    <article className="relative aspect-video overflow-hidden rounded-3xl px-16 py-[1.5em]  md:rounded-[0rem] md:p-[0.2em] ">
      {/* <div className="testimonialHeader flex items-center gap-[1em] md:block">
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
      </p>*/}
      <img
        src={imgSrc}
        alt=""
        className="relative z-10 h-full w-full rounded-[0rem]"
      />
      <div className="mask absolute left-0 top-0 -z-10 h-full w-full bg-colorSecondaryLight opacity-80"></div>
    </article>
  );
}
