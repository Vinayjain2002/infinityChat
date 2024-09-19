import React from "react";
import personImage from "../../../assets/images/person.jpeg";
import searchIcon from "../../../assets/icons/svgIcon/searchIcon.svg";
import threeDots from "../../../assets/icons/svgIcon/threeDots.svg";
import infoIcon from "../../../assets/icons/svgIcon/info.svg";
import { Messages } from "./Messages.tsx";
import { ChatInput } from "./ChatInput.tsx";

export const ChattingMessagesInfo = () => {
  return (
    <div className="w-full h-full h-screen bg-primaryLightColor">
      <div className="w-full sticky bg-white  px-8 h-[13vh]">
        <div className="flex justify-between h-full items-center">
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
      <div className="w-full h-[77vh] py-3 overflow-y-scroll">
        <div className="ml-4 mt-2 flex flex-col space-y-3">
          <Messages />
          <Messages />
          <Messages />

          <Messages />
          <Messages />
          <Messages />
          <Messages />
        </div>
      </div>
      <div className="h-[10vh] w-full">
          <ChatInput />
      </div>
    </div>
  );
};