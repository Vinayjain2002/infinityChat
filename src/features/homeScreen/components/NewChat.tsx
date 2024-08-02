import React from "react";
const chattingIllustration = require("../../../assets/images/chatting.png");

export const NewChat = () => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col">
        <div className="">
          <img src={chattingIllustration} alt="" />
        </div>
      </div>
    </div>
  );
};
