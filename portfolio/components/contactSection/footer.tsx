import { FooterGroup } from "@/components/contactSection/footerGroup";
import React from "react";
export function Footer({}) {
  return (
    <footer className="footer__links absolute flex max-w-maxWidth flex-wrap gap-5  mix-blend-difference md:gap-10">
      <FooterGroup
        title="VERSION"
        links={[{ href: "", text: "2022 © Edition" }]}
      />
      <FooterGroup
        title="LOCAL TIME"
        links={[{ href: "", text: "10:13 AM GMT+1" }]}
      />
      <FooterGroup
        title="SOCIALS"
        className="md:ml-auto"
        isMagnetic={true}
        links={[
          { href: "oggle", text: "Github" },
          { href: "oggle", text: "Twitter" },
          { href: "oggle", text: "LinkedIn" },
          { href: "oggle", text: "Instagram" },
        ]}
      />
    </footer>
  );
}
