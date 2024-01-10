import React from "react";
import Image from "next/image";
const bgImagesData = [
  {
    id: 1,
    imgLink: "",
    title: "",
    subtitle: "",
  },
  {
    id: 2,
    imgLink: "",
    title: "",
    subtitle: "",
  },
  {
    id: 3,
    imgLink: "",
    title: "",
    subtitle: "",
  },
  {
    id: 4,
    imgLink: "",
    title: "",
    subtitle: "",
  },
  {
    id: 5,
    imgLink: "",
    title: "",
    subtitle: "",
  },
  {
    id: 6,
    imgLink: "",
    title: "",
    subtitle: "",
  },
  {
    id: 7,
    imgLink: "",
    title: "",
    subtitle: "",
  },
];
export function BgImages({}) {
  // function for get ranadom rgb
  const getRandRgb = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  //  function to get rotation two beetween numbers
  const getRotation = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const gap = 150;
  return (
    <a
      style={
        {
          // left: `${(bgImagesData.length * gap) / 2 + 40}px`,
        }
      }
      className="footer__img_wrapper  flex absolute justify-center items-center"
    >
      {bgImagesData.map((item, i) => (
        <div
          style={{
            backgroundColor: getRandRgb(),
            left: `${450 + i * -gap}px`,
            // top: `${i * 40}px`,
            rotate: `${getRotation(-30, 30)}deg`,
            zIndex: `${
              Math.floor(bgImagesData.length / 2) == i
                ? 520
                : Math.floor(Math.random() * 10)
            }`,
          }}
          className="w-[320px] h-[400px] absolute  rounded-3xl bgImages translate-y-[0%] translate-x-[-50%] origin-center"
          key={item.id}
        ></div>
      ))}
    </a>
  );
}
