import React from "react";

type bulgeProps = {
  type: "Dark" | "Light";
};

// Bulge is responsible for giving paralax effect when slide up and down

export function Bulge({ type }: bulgeProps) {
  return (
    <>
      {type == "Dark" ? (
        <>
          <div className="rounded__div__down darkGradient">
            <div className="round__bg__down lightGradient"></div>
          </div>
          <div className="rounded__div__up darkGradient">
            <div className="round__bg__up lightGradient"></div>
          </div>
        </>
      ) : (
        <>
          <div className="rounded__div__down lightGradient">
            <div className="round__bg__down darkGradient"></div>
          </div>
          <div className="rounded__div__up lightGradient">
            <div className="round__bg__up darkGradient"></div>
          </div>
        </>
      )}
    </>
  );
}
