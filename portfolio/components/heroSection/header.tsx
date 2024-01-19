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
            <p>Work</p>
          </Magentic>
          <Magentic
            hoverUnderline
            href="https://www.linkedin.com/in/coex-/"
            strength={50}
            className="nav__item text-lg text-inherit before:bg-colorDark"
          >
            <p>About</p>
          </Magentic>
        </ul>
      </nav>
    </header>
  );
}
