import React from "react";
import personImage from "../../../assets/images/person.jpeg";
import searchIcon from "../../../assets/icons/svgIcon/searchIcon.svg";
import threeDots from "../../../assets/icons/svgIcon/threeDots.svg";
import infoIcon from "../../../assets/icons/svgIcon/info.svg";
import { Messages } from "./Messages.tsx";

export const ChattingMessagesInfo = () => {
  return (
    <div className="w-full h-full h-screen bg-primaryLightColor">
      <div className="w-full bg-white  px-8 py-3">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div className="w-[50px] h-[50px] ring-2 ring-blue-300 rounded-full overflow-hidden">
              <img src={personImage} alt="" className="object-cover" />
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-lg text-gray-700">Vinay jain</p>
              <p className="text-sm">Last Seen Yesterday</p>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-6">
            <div className="w-[25px]">
              <img src={searchIcon} alt="" />
            </div>
            <div className="w-[25px]">
              <img src={infoIcon} alt="" />
            </div>
            <div className="w-[25px]">
              <img src={threeDots} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
          <div className="ml-2 mt-1">
              <Messages />
          </div>
      </div>
    </div>
  );
};
