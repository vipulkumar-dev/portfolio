"use client";
import React from "react";
import "../work.css";
import "../header.css";
import FullpageProviderWork from "@/components/fullpageProviderWork";
import { Cursor } from "@/components/cursor";
import { HeaderNavigation } from "@/components/headerNavigation";
import { WorkSection } from "@/components/workPage/workSection";

export default function WorkPage() {
  const projectsData = [
    {
      title: (
        <>
          Portfolio <br /> Website
        </>
      ),
      description: "Tech : Next.js",
      link: "abc",
      imageLink: "/img/projects/1.png",
    },
    {
      title: (
        <>
          Nike <br /> Store
        </>
      ),
      description: "Webflow Page",
      link: "sc",
      imageLink: "/img/projects/2.png",
    },
    {
      title: (
        <>
          Adidas <br /> Store
        </>
      ),
      description: "Wordpress Theme",
      link: "sds",
      imageLink: "/img/projects/3.png",
    },
    {
      title: (
        <>
          Puma <br /> Store
        </>
      ),
      description: "UI Design",
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
      <Cursor />
      <HeaderNavigation />
      <FullpageProviderWork>
        <div id="fullpage">
          <div className="background">
            PROJECTS
            <br />
            PROJECTS
          </div>

          {projectsData.map((item, index) => (
            <WorkSection
              item={item}
              index={index}
              color={index % 2 !== 0 ? "Light" : "Dark"}
            />
          ))}
        </div>
      </FullpageProviderWork>
    </>
  );
}
