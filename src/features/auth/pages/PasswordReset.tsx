import React, { useState } from "react";
// import  logo from "../../../assets/icons/logo.png";

export const PasswordReset = () => {
  const [emailCheck, setEmailCheck] = useState(true);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  return (
    <div className="min-w-screen min-h-screen bg-primaryLightColor flex items-center justify-center">
      <div className="w-1/2 max-w-[350px] oy-3">
        <div className="flex w-full justify-center items-center">
          <div className="xl:w-[60px] lg:w-[50px] w-[50px]">
            <img src="" alt="Logo of the Chat With Me" />
          </div>
          <p className="xl:text-2xl text-xl ml-2 font-bold text-gray-700">Connect Me</p>
        </div>
        <div className="shadow-md mt-5 bg-white px-4 py-5 border w-full rounded-md">
          <div className="text-xl font-bold text-gray-600">
            Recover Password
          </div>
          <div className="flex flex-col mt-3 space-y-2">
            <label htmlFor="" className="text-sm font-semibold text-gray-800">
              Email Address:
            </label>
            <input
              type="text"
              id="email"
              placeholder="youremail@example.com"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-md bg-gray-50 text-md  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
            {!emailCheck && (
              <div>
                <input
                  type="text"
                  id="error"
                  className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-md rounded-md focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                  placeholder={email}
                />
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {emailError}
                </p>
              </div>
            )}
          </div>
          <div className="w-full mt-4">
            <button
              type="button"
              className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none   font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Reset Password
            </button>
          </div>
        </div>
        <div className="w-full flex mt-2 space-x-1">
              <p className="text-gray-500">Some how remembered?</p>
              <a href="/user/signup" className="text-blue-600 font-normal">
                Login
              </a>
            </div>
      </div>
    </div>
  );
};
