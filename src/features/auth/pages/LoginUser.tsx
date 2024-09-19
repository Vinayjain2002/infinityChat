import React, { HtmlHTMLAttributes, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const LoginUser: React.FC = () => {
  const [emailCheck, setEmailCheck] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isloading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState(false);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    try {
      if (email === "") {
        setEmailCheck(false);
        setEmailError("Enter Email");
      }
      if (password === "") {
        setPasswordCheck(false);
        setPasswordError("Enter Password");
      }
      if (emailCheck && passwordCheck) {
        // so the email and the password check are correct and we are going to make the api call
        event.preventDefault();
      }
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.error(err);
    }
    setEmail("");
    setPassword("");
    const emailTextField = document.getElementById("email");
    const passwordTextField = document.getElementById("password");
    if (emailTextField instanceof HTMLInputElement) {
      emailTextField.value = "";
    }
    if (passwordTextField instanceof HTMLInputElement) {
      passwordTextField.value = "";
    }
  };
  return (
    <div className="w-full bg-primaryLightColor min-h-screen">
      <ToastContainer />
      <div className="flex flex-row px-3">
        <div className="lg:w-1/2 w-full flex items-center justify-center">
          {/* this is for the text Input */}
          <div className="flex w-full max-w-[400px] flex-col justify-center items-center lg:mt-0 min-h-screen py-5">
            <div className="flex w-full justify-center items-center">
              <div className="xl:w-[60px] lg:w-[50px] w-[50px]">
                <img src="" alt="Logo of the Chat With Me" />
              </div>
              <p className="xl:text-2xl text-xl ml-2 font-bold">ConnectMe</p>
            </div>
            <div className="shadow-md mt-5 bg-white px-4 py-5 border w-full rounded-md">
              <div className="text-xl font-bold text-gray-600">Login</div>
              <div className="flex flex-col mt-3 space-y-1">
                <label
                  htmlFor=""
                  className="text-sm font-semibold text-gray-800"
                >
                  Email Address:
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="someone@example.com"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-md bg-gray-50 text-sm  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                />
                {!emailCheck && (
                  <div>
                    <input
                      type="text"
                      id="error"
                      className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-md focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                      placeholder={email}
                    />
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                      {emailError}
                    </p>
                  </div>
                )}
              </div>
              <div className="flex flex-col mt-3">
                <div className="flex justify-between">
                  <label
                    htmlFor=""
                    className="text-sm font-semibold text-gray-800"
                  >
                    Password:
                  </label>
                  <a href="/password/reset" className="text-sm font-semibold text-blue-600">
                    Forgot ?
                  </a>
                </div>
                <div className="mt-1">
                  <input
                    type="text"
                    id="small-input password"
                    placeholder="************"
                    className="block w-full p-2 text-gray-900 border border-gray-300 rounded-md bg-gray-50 text-sm  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  />
                  {passwordCheck && (
                    <div>
                      <input
                        type="text"
                        id="error"
                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-md bg-gray-50 text-sm  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        placeholder={password}
                      />
                      <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                        {passwordError}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              {/* we are gonna to dewfine the button Field */}
              <div className="w-full mt-2">
                <button
                  type="button"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:outline-none   font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  Account Login
                </button>
              </div>
              <div className="my-3">
                <hr className="bg-black-200" />
              </div>
              <div className="w-full text-center">
                <p className="text-sm font-semibold text-gray-400">
                  Or Use With
                </p>
              </div>
              <div className="flex flex-wrap justify-evenly mt-2">
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

            {/* here we are gonna to define the don't have an account */}
            <div className="w-full flex justify-center mt-2 space-x-1">
              <p className="text-gray-600">Don't have an account?</p>
              <a href="/user/signup" className="text-blue-600 font-normal">
                Register
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex w-1/2">
          {/* this is for the image */}
          <div className="w-full  items-center justify-center">
            <img
              src=""
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
