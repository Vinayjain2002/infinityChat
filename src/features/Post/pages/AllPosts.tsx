import React from "react";
import { AllOptions } from "../../../components/AllOptions.tsx";
import { Post } from "../components/Post.tsx";

const posts = [{}, {}, {}, {},{}];
export const AllPosts = () => {
  return (
    <div className="w-full h-full min-w-screen min-h-screen">
      <div className="w-full flex">
        <div className="h-screen sticky left-0 w-[80px] border border-[2px] flex items-center justify-center">
          <AllOptions />
        </div>
        <div className="w-full bg-gray-100 flex flex-col">
          <div className="w-full px-5 py-5 bg-white  shadow-sm">
            <p className="text-xl font-semibold">All Posts</p>
          </div>
          <div className=" w-full">
            <div className="flex flex-col max-h-[84vh] overflow-y-scroll mt-3 space-y-3">
              {posts?.map((post, index) => {
                return (
                  <div className="w-full px-4">
                    <Post key={index} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
