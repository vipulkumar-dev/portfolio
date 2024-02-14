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
      imageLink: "/img/projects/1.png",
    },
    {
      title: (
        <>
          Nike <br /> Store
        </>
      ),
      description: "page",
      link: "sc",
      imageLink: "/img/projects/2.png",
    },
    {
      title: (
        <>
          Adidas <br /> Store
        </>
      ),
      description: "page",
      link: "sds",
      imageLink: "/img/projects/3.png",
    },
    {
      title: (
        <>
          Puma <br /> Store
        </>
      ),
      description: "page",
      link: "fsre",
      imageLink: "/img/projects/4.png",
    },
    {
      title: (
        <>
          Reebok <br /> Store
        </>
      ),
      description: "page",
      link: "3r3",
      imageLink: "/img/projects/5.png",
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
              <div className="fullpage__slide">
                <a
                  className={`image image--works image--works${
                    index + 1
                  } anime`}
                  href={item.link}
                  style={{
                    background: `url(${item.imageLink}) center center / contain no-repeat`,
                  }}
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
                      <p className="shapka">
                        Show Me
                        <svg
                          className="ml-4 inline w-[0.8em] -rotate-[75deg] text-inherit" // width="34px"
                          // height="34px"
                          viewBox="0 0 14 14"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg" // xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <title>arrow-up-right</title>
                          <g
                            id="Page-1"
                            stroke="none"
                            strokeWidth="1.5"
                            fill="none"
                            fillRule="evenodd"
                          >
                            <g
                              id="Artboard"
                              transform="translate(-1019.000000, -279.000000)"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            >
                              <g
                                id="arrow-up-right"
                                transform="translate(1026.000000, 286.000000) rotate(90.000000) translate(-1026.000000, -286.000000) translate(1020.000000, 280.000000)"
                              >
                                <polyline
                                  id="Path"
                                  points="2.76923077 0 12 0 12 9.23076923"
                                ></polyline>
                                <line
                                  x1="12"
                                  y1="0"
                                  x2="0"
                                  y2="12"
                                  id="Path"
                                ></line>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </p>
                    </Magentic>
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
