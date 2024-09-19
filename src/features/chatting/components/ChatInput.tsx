import React, { useState } from "react";

export const ChatInput = () => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    // Handle send message logic here
    console.log("Message sent:", message);
    setMessage("");
  };

  return (
    <div className="flex items-center justify-around bg-white px-4 py-2 border-t border-gray-200">
      <div className="w-3/4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          className=" py-2 pl-5 rounded-md text-sm text-gray-700 border w-full"
        />
      </div>
      <button
        onClick={handleSendMessage}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 ml-3 px-4 rounded"
      >
        Send
      </button>
    </div>
  );
};
