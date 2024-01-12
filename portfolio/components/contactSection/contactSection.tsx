import { Footer } from "@/components/contactSection/footer";
import React, { use, useRef } from "react";
import Magentic from "@/components/ui/magentic";
import { BgImagesContainer } from "@/components/contactSection/bgImagesContainer";
import { useAppSelector } from "@/hooks/reduxHooks";
export function ContactSection({}) {
  const { suscribe } = useAppSelector((state) => state.fullpageReducer.fourth);
  const bgImagesSharedRef = useRef<gsap.core.Tween | null>(null);

  return (
    <section className="section section__5 fourth ">
      <div className="rounded__div__down black">
        <div className="round__bg__down white"></div>
      </div>
      <div className="rounded__div__up black">
        <div className="round__bg__up white"></div>
      </div>
      <Magentic // href="mailto:email.coex@gmail.com"
        className="magnetic footer__heading anime cursor-pointer"
        onMouseEnter={() => {
          bgImagesSharedRef.current?.restart(true);
        }}
        onMouseLeave={() => {
          bgImagesSharedRef.current?.reverse();
        }}
      >
        <span className="shapka ">
          Get a<br />
          Quoute<span className="yellow__it">.</span>
        </span>
      </Magentic>
      <BgImagesContainer bgImagesSharedRef={bgImagesSharedRef} />
      <Footer />
    </section>
  );
}
