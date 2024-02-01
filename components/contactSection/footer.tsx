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
        title="LOCAL TIME"
        className="hidden md:block"
        links={[{ href: "", text: "10:13 AM" }]}
      />

      <FooterGroup
        className="hidden md:block"
        title="VERSION"
        links={[{ href: "", text: "v0.1.0" }]}
      />

      <FooterGroup
        title="SOCIALS"
        className="md:ml-auto"
        isMagnetic={true}
        links={[
          { href: "oggle", text: "Github" },
          { href: "oggle", text: "Twitter" },
          { href: "oggle", text: "LinkedIn" },
        ]}
      />
    </footer>
  );
}
