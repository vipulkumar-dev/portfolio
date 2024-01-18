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
    <div
      className={cn(
        "text-[clamp(20px,_1vw_+_14px,_24px)] text-[#a3a3a3]",
        className,
      )}
    >
      <h3 className="text-[0.6em]   ">{title}</h3>
      <ul className=" mt-2  flex gap-5  ">
        {links.map((link, index) => (
          <li key={index} className="">
            {isMagnetic ? (
              <Magentic
                strength={50}
                className="relative text-[0.8em] text-[#a3a3a3] "
                href={link.href}
                hoverUnderline
              >
                <p>{link.text}</p>
              </Magentic>
            ) : (
              <p className="text-[0.8em]">{link.text}</p>
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
