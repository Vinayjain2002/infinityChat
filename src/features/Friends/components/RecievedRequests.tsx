import React from "react";
import { requests } from "../data/data.tsx";
import { Request } from "./Request.tsx";
import connectionIllustration from "../../../assets/images/chatting.png";
export const RecievedRequests = () => {
  return (
    <div className="flex flex-col">
      <div className=" overflow-hidden flex justify-center items-center">
        <div className="w-1/4">
          <img
            src={connectionIllustration}
            alt="Connection Illustration"
            className="object-cover w-full  rounded-full"
          />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div className="flex flex-col items-center justify-center">
          <p className="text-xl text-gray-700 font-bold">No Received Requests!</p>
          <p className="text-gray-700">You don't have any received requests.</p>
        </div>
      </div>
    </div>
  );
};
