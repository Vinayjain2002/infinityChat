import React from "react";
import { AllOptions } from "../../../components/AllOptions.tsx";
import { ChattingUsers } from "../components/ChattingUsers.tsx";
import chattingIllustration from "../../../assets/images/chatting.png";

export const AllChats = () => {
  return (
    <div className="w-full h-full min-w-screen min-h-screen">
      <div className="w-full flex">
        <div className="h-screen w-[80px] border border-[2px] flex items-center justify-center">
          <AllOptions />
        </div>
        <div className="max-h-screen overflow-y-scroll">
          <ChattingUsers />
        </div>
        <div className="flex-1 bg-primaryLightColor max-h-screen overflow-hidden">
          <div className="h-full w-full">
            <div className="w-full h-2/3 pt-[10vh] overflow-hidden max-h-screen flex items-center justify-center">
              <img src={chattingIllustration} alt="" className="object-cover w-full" />
            </div>
            <div className="flex flex-col w-full items-center justify-center mt-4">
              <div>
                <p className="font-bold text-2xl text-gray-700">Select Message</p>
              </div>
              <div>
                <p className="text-md text-gray-600 font-medium">
                  To see your existing conversation or share a link below to
                  start new.
                </p>
              </div>
              <div className="mt-4">
                <button className="px-10 bg-blue-400 py-2 font-bold text-white hover:bg-white hover:text-blue-400 rounded-md"> Add New Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
