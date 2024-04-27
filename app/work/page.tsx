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
      description: "Website",
      link: "https://vipulkumar.dev",
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
          Puma <br /> Store
        </>
      ),
      description: "UI Design",
      link: "fsre",
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
