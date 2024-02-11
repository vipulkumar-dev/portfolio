import { FooterGroup } from "@/components/contactSection/footerGroup";
import { links } from "@/data/data";
import { cn } from "@/lib/utils";
import React from "react";
export function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        "footer__links absolute flex  flex-wrap gap-0 px-paddingX  mix-blend-difference md:gap-12",
        className,
      )}
    >
      <FooterGroup
        title="LOCAL TIME"
        className="hidden md:block"
        links={[{ href: "", text: "10:13:23 AM" }]}
      />

      <FooterGroup
        className="hidden md:block"
        title="VERSION"
        links={[{ href: "", text: "v0.1.0 ©2024" }]}
      />

      <FooterGroup
        title="SOCIALS"
        className="md:ml-auto"
        isMagnetic={true}
        links={[
          { href: links.resume, text: "Resume" },
          { href: links.github, text: "Github" },
          { href: links.twitter, text: "Twitter" },
          { href: links.linkedin, text: "LinkedIn" },
        ]}
      />
    </footer>
  );
}
