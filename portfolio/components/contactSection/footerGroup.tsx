import { cn } from "@/lib/utils";
import React from "react";
import Magentic from "@/components/ui/magentic";
export function FooterGroup({
  title,
  links,
  isMagnetic = false,
  className,
}: FooterGroupProps) {
  return (
    <div className={cn("", className)}>
      <h3 className="text-xs text-foreground mix-blend-difference">{title}</h3>
      <ul className=" mt-2  flex gap-5 text-lg text-foreground">
        {links.map((link, index) => (
          <li key={index} className="mix-blend-difference">
            {isMagnetic ? (
              <Magentic
                strength={50}
                className="relative text-foreground mix-blend-difference"
                href={link.href}
                hoverUnderline
              >
                <p>{link.text}</p>
              </Magentic>
            ) : (
              <p>{link.text}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

interface FooterGroupProps {
  title: string;
  links: { href: string; text: string }[];
  isMagnetic?: boolean;
  className?: string;
}
