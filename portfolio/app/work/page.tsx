"use client";

import React from "react";
import "../work.css";
import "../header.css";
import FullpageProviderWork from "@/components/fullpageProviderWork";
import { Header } from "@/components/header";
import { HeaderNavigation } from "@/components/headerNavigation";

export default function WorkPage() {
  const projectsData = [
    {
      title: "Sneakers Shop",
      description: "page",
      link: "",
    },
    {
      title: "Seo Exp",
      description: "page",
      link: "",
    },
    {
      title: "Sports Theme",
      description: "page",
      link: "",
    },
    {
      title: "Nike",
      description: "page",
      link: "",
    },
  ];

  return (
    <>
      <Header color="Dark"></Header>
      <HeaderNavigation />
      <FullpageProviderWork>
        <div id="fullpage">
          <div className="background">
            PROJECTS
            <br />
            PROJECTS
          </div>

          {projectsData.map((item, index) => (
            <div className={`section s${index} `} key={item.title}>
              <div className="fp-tableCell" style={{ height: 937 }}>
                <div className="fullpage__slide">
                  <a
                    className={`image image--works image--works${
                      index + 1
                    } anime`}
                    href={item.link}
                  >
                    <div className="image__over">
                      <div className="image__cover">1</div>
                      <div className="image__cover">2</div>
                    </div>
                    <div className="page-num anime">
                      <p>0{index + 1}</p>
                    </div>
                  </a>
                  <div className="title">
                    <h2 className="title__text js-letter anime">
                      {item.title}
                      <br />
                    </h2>
                    <div className="js-letter anime borderv">
                      <span></span>
                      <span className="js-letter"></span>
                    </div>
                    <p className="title__lead js-letter anime">
                      {item.description}
                    </p>
                    <div className="btn-wrap js-letter anime">
                      <a className="btn" href={item.link}>
                        Show me
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </FullpageProviderWork>
    </>
  );
}
