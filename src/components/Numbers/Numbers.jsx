"use client";
import React from "react";
import { FaUsers } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
import { FaAward } from "react-icons/fa6";

import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});
const ListArchive = [
  {
    metric: "Projeler",
    value: 100,
    postfix: "+",
    icon: <FiActivity className="w-[36px] h-[36px] text-myred" />,
  },
  {
    metric: "Kullanıcılar",
    value: 10000,
    postfix: "+",
    icon: <FaUsers className="w-[36px] h-[36px] text-myred" />,
  },
  {
    metric: "Müşteri Memnuniyeti",
    value: 100,
    postfix: "%",
    icon: <FaAward className="w-[36px] h-[36px] text-myred" />,
  },
];

const Numbers = () => {
  return (
    <div className=" flex flex-col md:flex-row gap-10 items-center justify-around">
      {ListArchive.map((arc, index) => {
        return (
          <div
            className="flex flex-col gap-3 items-center justify-center"
            key={index}
          >
            <div className="flex flex-row items-center justify-center">
              <div className="flex items-center justify-center mr-2">
                {arc.icon}
              </div>
              <h2 className="text-4xl flex flex-row">
                <AnimatedNumbers
                  includeComma
                  transitions={(index) => ({
                    type: "spring",
                    duration: index + 0.3,
                  })}
                  animateToNumber={parseInt(arc.value)}
                  fontStyle={{
                    fontSize: "48px",
                    color: "#02273b",
                  }}
                />
                <span className="text-4xl text-myblue">{arc.postfix}</span>
              </h2>
            </div>
            <p className="text-2xl text-center">{arc.metric}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Numbers;
