import React from "react";
import userImage from "../../../assets/images/person.jpeg";
import threeDots from "../../../assets/icons/svgIcon/threeDots.svg";

export const UserInfo = () => {
  return (
    <div className="w-full bg-white hover:bg-primaryLightColor shadow-md border-l-2 border-r-2 border-blue-300 min-w-[220px] rounded-lg ">
      <div className="flex border justify-between px-3 py-2 rounded-lg">
        <div className="flex space-x-3">
          <div className="w-[50px] h-[50px] ring-blue-200 ring-1 rounded-full overflow-hidden">
            <img src={userImage} alt="" />
          </div>
          <div className="flex flex-col">
            <div className="font-semibold text-gray-700">Name</div>
            <div className="text-gray-700 text-sm">About</div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-center space-y-1">
          <div className="text-gray-500 text-[9px]">10:20 pm</div>
          <button className="w-[20px]">
            <img src={threeDots} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
