import React from "react";
import { AllOptions } from "../../../components/AllOptions";

export const UploadPosts = () => {
  return (
    <div className="w-full h-full min-w-screen min-h-screen">
      <div className="w-full flex">
        <div className="h-screen w-[80px] border border-[2px] flex items-center justify-center">
          <AllOptions />
        </div>
        <div className="flex-1 bg-white">
          <div className="w-2/3 shadow-md">
            {/* <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea> */}
          </div>
        </div>
      </div>
    </div>
  );
};
