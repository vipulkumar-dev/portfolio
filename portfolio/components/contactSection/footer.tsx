import { FooterGroup } from "@/components/contactSection/footerGroup";
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
