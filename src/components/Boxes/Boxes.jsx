import Image from "next/image";
import React from "react";
import { LuCalculator, LuActivitySquare, LuLineChart } from "react-icons/lu";

const boxesInfo = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam nisi quis sapiente? Non vero earum sint, natus labore quod dolore?",
    icon: <LuCalculator className="w-[36px] h-[36px] text-myred" />,
  },
  {
    id: 2,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam nisi quis sapiente? Non vero earum sint, natus labore quod dolore?",
    icon: <LuActivitySquare className="w-[36px] h-[36px] text-myred" />,
  },
  {
    id: 3,
    title:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis aliquid necessitatibus qui vero nihil in aut delectus? Provident, natus placeat.",
    icon: <LuLineChart className="w-[36px] h-[36px] text-myred" />,
  },
];

const Boxes = () => {
  return (
    <div className="container flex-col sm:flex-col md:flex-row lg:flex-row sm:mx-auto flex justify-between items-center gap-10">
      {boxesInfo.map((box, key) => (
        <div
          className="w-[400px] h-[200px] flex flex-col justify-center bg-white rounded-3xl   shadow-black gap-4"
          key={key}
        >
          {box.icon}

          <p>{box.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Boxes;
