"use client";

import React from "react";
import "../work.css";
import "../header.css";
import FullpageProviderWork from "@/components/fullpageProviderWork";
import { Header } from "@/components/header";
import { HeaderNavigation } from "@/components/headerNavigation";
import Magentic from "@/components/ui/magentic";

export default function WorkPage() {
  const projectsData = [
    {
      title: (
        <>
          Sneakers <br /> Shop
        </>
      ),
      description: "page",
      link: "abc",
    },
    {
      title: (
        <>
          Nike <br /> Store
        </>
      ),
      description: "page",
      link: "sc",
    },
    {
      title: (
        <>
          Adidas <br /> Store
        </>
      ),
      description: "page",
      link: "sds",
    },
    {
      title: (
        <>
          Puma <br /> Store
        </>
      ),
      description: "page",
      link: "fsre",
    },
    {
      title: (
        <>
          Reebok <br /> Store
        </>
      ),
      description: "page",
      link: "3r3",
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
            <div className={`section s${index} `} key={item.link}>
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
                  <div className="title ml-paddingX">
                    <h2 className="title__text js-letter anime font-semibold">
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
                      <Magentic strength={50} className="btn" href={item.link}>
                        <p className="shapka">Show me</p>
                      </Magentic>
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
