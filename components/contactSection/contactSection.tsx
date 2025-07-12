import { Footer } from "@/components/contactSection/footer";
import React, { useRef } from "react";
import Magentic from "@/components/ui/magentic";
import { BgImagesContainer } from "@/components/contactSection/bgImagesContainer";
import { useAppSelector } from "@/hooks/reduxHooks";
import { Header } from "../header";
import { Bulge } from "../bulge";
import { links } from "@/data/data";
export function ContactSection({}) {
  const { suscribe } = useAppSelector((state) => state.fullpageReducer.third);
  const bgImagesSharedRef = useRef<gsap.core.Tween | null>(null);

  return (
    <section className="section section__5 third darkGradient ">
      <Bulge type="Light" />
      <Header color="Light"></Header>

      <Magentic // href="mailto:email.coex@gmail.com"
        href={links.contact}
        className="footer__heading anime cursor-pointer"
        scrambleParams={{
          text: "Contact",
        }}
        onMouseEnter={() => {
          bgImagesSharedRef.current?.restart(true);
        }}
        onMouseLeave={() => {
          bgImagesSharedRef.current?.reverse();
        }}
      >
        <span className="shapka mask">
          <span className="scrambleText inline-block text-left">Contact</span>
          <span className="yellow__it">.</span>
        </span>
      </Magentic>
      <BgImagesContainer bgImagesSharedRef={bgImagesSharedRef} />
      <Footer />
    </section>
  );
}
