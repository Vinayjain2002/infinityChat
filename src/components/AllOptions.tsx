import React, { useState } from "react";
import Logo from "../assets/icons/logo.png";
import chatIcon from "../assets/icons/svgIcon/chat.svg";
import friendsIcon from "../assets/icons/svgIcon/Friends.svg";
import groupIcon from "../assets/icons/svgIcon/Group.svg";
import quotes from "../assets/icons/svgIcon/quotes.svg";
import setting from "../assets/icons/svgIcon/setting.svg";
import logout from "../assets/icons/svgIcon/logout.svg";
import person from "../assets/images/person.jpeg";
import theme from "../assets/icons/svgIcon/theme.svg";

const menuItems = [
  { icon: chatIcon, alt: "Chats", link: "/chat" },
  { icon: groupIcon, alt: "Group", link: "/team/all" },
  { icon: quotes, alt: "Quotes", link: "/post/all" },
  { icon: friendsIcon, alt: "Friends", link: "/friend" },
  { icon: setting, alt: "Setting", link: "/setting" },
];
export const AllOptions = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });

  const handleMouseOver = (event, item) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPopupVisible(true);
    setPopupMessage(item.alt);
    setPopupPosition({
      top: rect.height / 2,
      left: rect.width,
    });
  };

  const handleMouseOut = () => {
    setPopupVisible(false);
  };

  return (
    <div className="w-full h-full py-5">
      <div className="flex flex-col justify-between items-center h-full">
        <div className="w-[40px]">
          <a href="/">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="flex flex-col justify-center items-center space-y-3">
          {menuItems.map((item, index) => (
            <a href={item.link}>
              <div
                key={index}
                className="xl:w-[40px] lg:w-[35px] w-[30px] p-2 hover:rounded-md hover:bg-primaryLightColor relative"
                onMouseOver={(event) => handleMouseOver(event, item)}
                onMouseOut={handleMouseOut}
              >
                {item.icon && <img src={item.icon} alt={item.alt} />}
                {popupVisible && popupMessage === item.alt && (
                  <div
                    className="absolute bg-blue-400 text-white rounded-sm"
                    style={{
                      top: popupPosition.top,
                      left: popupPosition.left,
                      transform: "translateX(0)",
                    }}
                  >
                    <div className="flex items-center p-1 rounded-md">
                      <div className="" />
                      <span className="">{popupMessage}</span>
                    </div>
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
        <div className="flex flex-col space-y-5">
          <div className="xl:w-[28px] lg:w-[25px] w-[20px] ml-2 ">
            <img src={theme} alt="Theme" />
          </div>
          <div className="border-2 rounded-full">
            <div className="w-[40px] rounded-full h-[40px] overflow-hidden">
              <a href="/account">
                <img src={person} alt="Person" className="object-cover" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
