import Image from "next/image";
import React from "react";
import { LuCalculator, LuActivitySquare, LuLineChart } from "react-icons/lu";

const boxesInfo = [
  {
    id: 1,
    title: "Mali Müşavirlik Hizmeti",
    desc: "Vergi Usul Kanunu ve Türk Ticaret Kanunu’na uyumlu olarak  defter ve belgeleriniz tanzim edilip dönem sonlarında size rapor edilir.",
    icon: <LuCalculator className="w-[36px] h-[36px] text-myred" />,
  },
  {
    id: 2,
    title: "Finansal Raporlama Hizmetleri",
    desc: "Dönemsel Mali ve finansal analiz raporlarının hazırlanması ve değerlendirilmesi hizmeti.",
    icon: <LuActivitySquare className="w-[36px] h-[36px] text-myred" />,
  },
  {
    id: 3,
    title: "Vergi Danışmanlığı Hizmetleri",
    desc: "Mükelleflerin vergi, teşvik ve diğer mali avantaj ve kolaylıklardan faydalandırılmasına yönelik danışmanlık hizmetleri.",
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
          <div className="flex gap-3  items-center">
            {box.icon}
            <h2 className="text-xl font-semibold text-myblue text-wrap text-center">
              {box.title}
            </h2>
          </div>

          <p>{box.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Boxes;
