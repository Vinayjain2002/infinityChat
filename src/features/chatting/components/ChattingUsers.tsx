import React from "react";
import searchIcon from "../../../assets/icons/svgIcon/searchIcon.svg";
import threeDots from "../../../assets/icons/svgIcon/threeDots.svg";
import {  UserInfo } from "./UserInfo.tsx";

const pinnedMessage=[{},{},{},{},{}]
export const ChattingUsers = () => {
  return (
    <div>
      <div className="w-[25vw] border">
        <div className="flex justify-between px-4 py-5">
          <div>
            <p className="text-xl font-semibold">All Chats</p>
          </div>
          <div className="flex space-x-3">
            <div className="w-[20px]">
              <img src={searchIcon} alt="" />
            </div>
            <div className="w-[23px]">
              <img src={threeDots} alt="" />
            </div>
          </div>
        </div>
        <div className="">
            <hr />
        </div>
        <div className="my-5">
            <div className="flex px-4">
                <p className="text-md font-gray-700 font-semibold">Pinned Chat</p>
            </div>
            <div className="flex flex-col space-y-2 px-5 mt-3">
                {
                    pinnedMessage?.map((message,index)=>{
                        return (
                            <div>
                                <UserInfo />
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div className="my-5">
            <div className="flex px-4">
                <p className="text-md font-gray-700 font-semibold">Recent Chat</p>
            </div>
            <div className="flex flex-col space-y-2 px-5 mt-3">
                {
                    pinnedMessage?.map((message,index)=>{
                        return (
                            <div>
                                <UserInfo />
                            </div>
                        )
                    })
                }
            </div>
        </div>
      </div>
    </div>
  );
};
