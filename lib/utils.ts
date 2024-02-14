import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getRandRgb = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

//  function to get rotation two beetween numbers
export const getRandValues = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const shuffle = (array: any[]) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export const isDesktop = () => {
  return screen.width > 540;
};

export function getJoinedDate(
  options: Intl.DateTimeFormatOptions[],
  separator: string = " | ",
) {
  function format(option: Intl.DateTimeFormatOptions) {
    let formatter = new Intl.DateTimeFormat("en", option);
    return formatter.format(new Date());
  }
  return options.map(format).join(separator);
}
