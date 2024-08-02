import React from "react";
import { requests } from "../data/data.tsx";
import { Request } from "./Request.tsx";

export const SentRequests = () => {
  return (
    <div className="w-full h-full max-h-[81vh] overflow-y-scroll">
      <div className="flex flex-col space-y-3 w-2/3 mx-auto mt-3">
        {requests?.map((request, index) => {
          return (
            <div>
              <Request name={request.name} about={request.about} />{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};
