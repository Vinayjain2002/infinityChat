import React from "react";
import { AllOptions } from "../../../components/AllOptions.tsx";
import { Settinginfo } from "../controllers/Settinginfo.tsx";

export const Setting = () => {
  return (
    <div>
      <div className="flex">
        <div className="h-screen w-[80px] border border-[2px] flex items-center justify-center">
          <AllOptions />
        </div>
        <div>
          <Settinginfo />
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};
