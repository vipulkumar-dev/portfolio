"use client";
import React from "react";
import "../work.css";
import "../header.css";
import FullpageProviderWork from "@/components/fullpageProviderWork";
import { Cursor } from "@/components/cursor";
import { HeaderNavigation } from "@/components/headerNavigation";
import { WorkSection } from "@/components/workPage/workSection";

//test
export default function WorkPage() {
  const projectsData = [
    {
      title: (
        <>
          Simple Font <br /> Replacer
        </>
      ),
      description: "Figma Plugin",
      link: "https://www.figma.com/community/plugin/1380643582596908985/simple-font-replacer",
      imageLink: "/img/projects/1.png",
    },
    {
      title: (
        <>
          Therapist <br /> Website
        </>
      ),
      description: "UI Design",
      link: "https://www.figma.com/proto/Tzz9bwrjHtSza87b1l3D0i/Inner-Strength-UI-Design?type=design&node-id=37-10&t=pq2KDLjYbMU4LFgA-1&scaling=min-zoom&page-id=0%3A1&mode=design",
      imageLink: "/img/projects/2.png",
    },
    {
      title: (
        <>
          AmanFX <br /> Portfolio
        </>
      ),
      description: "Webflow Site",
      link: "https://amanfx.webflow.io/",
      imageLink: "/img/projects/3.png",
    },
    {
      title: (
        <>
          InfoBot <br /> Page
        </>
      ),
      description: "UI Design",
      link: "https://www.figma.com/proto/7CmQQMDo0rdns5SkHqJBxa/AI-Bot-UI?type=design&node-id=3-75&t=wVQT7zV2hi9Ejb43-1&scaling=min-zoom&page-id=0%3A1&mode=design",
      imageLink: "/img/projects/4.png",
    },

    {
      title: (
        <>
          Skin Loyalty <br /> Store
        </>
      ),
      description: "Ecommere Store",
      link: "https://skinloyalty.com/",
      imageLink: "/img/projects/5.png",
    },
    {
      title: (
        <>
          Old <br /> Portfolio
        </>
      ),
      description: "Page",
      link: "https://vipulkumar-dev.github.io/Portfolio-old/",
      imageLink: "/img/projects/6.png",
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
              key={index}
              item={item}
              index={index}
              length={projectsData.length}
              color={index % 2 !== 0 ? "Light" : "Dark"}
            />
          ))}
        </div>
      </FullpageProviderWork>
    </>
  );
}
