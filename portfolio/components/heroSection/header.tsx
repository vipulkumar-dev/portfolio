import React from "react";
import Magentic from "../ui/magentic";
export function Header({}) {
  return (
    <header className="nav__container anime">
      <nav className="nav__bar">
        <ul>
          <Magentic
            href="work.html"
            hoverUnderline
            strength={50}
            className="nav__item text-lg text-inherit before:bg-colorDark"
          >
            <p>@DeveloperCoex</p>
          </Magentic>
          <Magentic
            href="https://www.linkedin.com/in/coex-/"
            strength={50}
            className="nav__item h-full text-lg text-inherit before:bg-colorDark"
          >
            <div className="flex h-3 w-10 flex-col justify-between ">
              <div className="h-0.5 w-full rounded-full bg-colorDark"></div>
              <div className="h-0.5 w-full rounded-full bg-colorDark"></div>
            </div>
          </Magentic>
        </ul>
      </nav>
    </header>
  );
}
