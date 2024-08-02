import React from "react";
import leftArrow from "../../../assets/icons/svgIcon/leftArrow.svg";
import searchIcon from "../../../assets/icons/svgIcon/searchIcon.svg";
import userImage from "../../../assets/images/person.jpeg";
import penIcon from "../../../assets/icons/svgIcon/penIcon.svg";
import rightArrow from "../../../assets/icons/svgIcon/rightArrow.svg";
import { settingOptions } from "../data/data.tsx";

export const Settinginfo = () => {
  return (
    <div>
      <div className="w-[25vw] border overflow-y-scroll max-h-screen">
        <div className="w-full flex flex-col">
          <div className="w-full flex py-6 px-5 justify-between">
            <div className="flex space-x-3">
              <div className="w-[20px] mt-1">
                <img src={leftArrow} alt="" />
              </div>
              <div className="xl:text-xl font-semibold">Setting</div>
            </div>
            <div className="w-[20px] mt-1">
              <img src={searchIcon} alt="" />
            </div>
          </div>
          <div>
            <hr />
          </div>

          {/* we are gonna to define the update Image Sign */}
          <div className="">
            <div className="flex flex-row px-4 py-3 justify-between">
              <div className="text-sm font-semibold text-gray-700">
                Account Setting
              </div>
              <div className="w-[20px]">
                <img src={penIcon} alt="" />
              </div>
            </div>
            <div className="w-full flex justify-center my-5">
              <div className="w-[150px] h-[150px] rounded-full overflow-hidden ">
                <img
                  src={userImage}
                  alt=""
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col px-4 mt-4 space-y-3">
            <div>
              <p className="text-md font-normal text-gray-600">Your Name</p>
              <p className="font-semibold pl-1 text-md">Vinay jain</p>
            </div>
            <div>
              <p className="text-md font-normal text-gray-600">About</p>
              <p className="font-semibold pl-1 text-md">
                Can't Talk WhataApp only.
              </p>
            </div>
            <div>
              <p className="text-md font-normal text-gray-600">Date of Birth</p>
              <p className="font-semibold pl-1 text-md">05/10/2002</p>
            </div>
            <div>
              <p className="text-md font-normal text-gray-600">Gender</p>
              <p className="font-semibold pl-1 text-md">Male</p>
            </div>
            <div>
              <p className="text-md font-normal text-gray-600">Country</p>
              <p className="font-semibold pl-1 text-md">India</p>
            </div>
          </div>

          <div className="my-6">
            <hr />
          </div>
          {/* we are gonna to define the other options */}
          <div className="mb-4 pointer">
            {settingOptions?.map((option, index) => (
              <div className="mb-4 pointer">
                <div className="flex justify-between px-4">
                  <div className="flex">
                    <div className="w-[20px] mt-1">
                      <img src={option.icon} alt="" />
                    </div>
                    <div className="pl-3 pointer font-semibold text-gray-600">
                      {option.message}
                    </div>
                  </div>
                  <div className="w-[16px] mt-1">
                    <img src={rightArrow} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
