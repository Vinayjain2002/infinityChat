import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import logo from "../../../assets/icons/logo.png"

export const SignUpUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState(true);
  const [confirmPasswordCheck, setConfirmPasswordCheck] = useState(true);
  const [emailCheck, setEmailCheck] = useState(true);
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name == "email") {
      setEmail(value);
    } else if (name == "password") {
      setPassword(value);
    } else if (name == "confirmPassword") {
      setConfirmPassword(value);
    } else if (name == "name") {
      setName(value);
    }
  };

  const checkFields = async () => {
    try {
      console.log("Checking Fields");
    } catch (err) {
      console.error("Error while checking Fields");
    }
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
    } catch (err) {}
    setEmail("");
    setName("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="min-h-screen min-w-screen max-w-screen bg-primaryLightColor">
      <ToastContainer />
      <div className="w-full h-full flex items-center justify-center px-3 py-5">
        <div className="">
          <div className="w-full flex items-center justify-center">
            <div className="xl:w-[60px] lg:w-[50px] w-[50px]">
              <img src="" alt="" />
            </div>
            <p className="xl:text-2xl text-xl ml-2 font-bold">ConnectMe</p>
          </div>
          <div className="shadow-lg mt-5 bg-white px-4 py-5 border rounded-md">
            <div className="xl:text-xl text-lg font-bold text-gray-700">
              Create Account
            </div>
            <div className="flex mt-3 justify-between md:space-x-3 md:flex-nowrap flex-wrap">
              <div className="flex flex-col space-y-1 w-full">
                <label
                  htmlFor=""
                  className="text-sm font-semibold text-gray-800"
                >
                  Your Name:
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="example"
                  className=" w-full p-2 text-gray-900 border border-gray-300 rounded-md bg-gray-50 text-sm  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white min-w-[150px]"
                />
              </div>
              <div className="flex flex-col space-y-1 w-full">
                <label
                  htmlFor=""
                  className="text-sm font-semibold text-gray-800"
                >
                  Email Address:
                </label>
                <input
                  type="text"
                  id="email"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-md bg-gray-50 text-sm  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white min-w-[150px]"
                  placeholder="someone@example.com"
                />
              </div>
            </div>
            <div className="flex mt-3 justify-between md:space-x-3  md:flex-nowrap flex-wrap">
              <div className="flex flex-col space-y-1 w-full">
                <label
                  htmlFor=""
                  className="text-sm font-semibold text-gray-800"
                >
                  Password:
                </label>
                <input
                  type="text"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-md bg-gray-50 text-sm  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white min-w-[150px]"
                  placeholder="Password"
                />
              </div>
              <div className="flex flex-col space-y-1 w-full">
                <label
                  htmlFor=""
                  className="text-sm font-semibold text-gray-800"
                >
                  Password Repeat:
                </label>
                <input
                  type="text"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-md bg-gray-50 text-sm  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white min-w-[150px]"
                  placeholder="Password again"
                />
              </div>
            </div>
            <div className="flex space-x-2 mt-3 ml-2">
              <input type="checkbox" id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-bold text-gray-500"
              >
                I agree with{" "}
                <span className="pl-2 text-sm font-semibold text-blue-700">
                  privacy policy & terms
                </span>
              </label>
            </div>
            <div className="w-full mt-4">
              <button
                type="button"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none   font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                Account Register
              </button>
            </div>
            <div className="my-3">
              <hr />
            </div>
            <div className="w-full text-center">
              <p className="text-sm font-semibold text-gray-400">Or Use With</p>
            </div>
            <div className="flex md:flex-nowrap flex-wrap justify-evenly mt-2">
              <div>
                <button className="w-full text-gray-600 bg-gray-200 hover:bg-blue-300 min-w-[140px] hover:text-blue-600 focus:outline-none   font-bold rounded-md text-sm px-3 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700">
                  logo <span>Google</span>
                </button>
              </div>
              <div>
                <button className="w-full text-gray-600 bg-gray-200 hover:bg-blue-300 min-w-[140px] hover:text-blue-600 focus:outline-none   font-bold rounded-md text-sm px-3 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700">
                  logo <span>Facebook</span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center mt-2 space-x-1">
            <p className="text-gray-600">Already have an Account?</p>
            <a href="/user/login" className="text-blue-600 font-normal">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
