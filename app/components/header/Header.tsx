import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail, AiOutlineGlobal } from "react-icons/ai";
const TopHeader = () => {
  const items = [
    { icon: <BsFillTelephoneFill />, description: "503 680 3865" },
    { icon: <AiOutlineMail />, description: "matthew-martin@programmer.net" },
    { icon: <AiOutlineGlobal />, description: "Bristol, CT" },
  ];
  
  return (
    <div className="mx-3 py-5 text-center">
      <div className="flex gap-3 flex-wrap justify-around">
        <div className="bg-gradient-to-r from-indigo-600 to-violet-800 bg-clip-text text-transparent font-bold text-2xl">
          Matthew Jeshua Martin
        </div>
        <ul className="flex flex-wrap gap-2 md:gap-8 justify-center text-center">
          {items.map(({ icon, description }, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-violet-500">{icon}</span>
              <span className="text-violet-600">{description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default TopHeader;