import React from "react";
import personImage from "../../../assets/images/person.jpeg";

interface RequestProps{
  name: string;
  about: string
}

export const Request: React.FC<RequestProps> = ({ name, about }) => {
  return (
    <div className="w-full min-w-[300px] md:min-w-[500px] bg-white rounded-lg shadow-lg p-4">
      <div className="flex items-center justify-between">
        <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
          <img src={personImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 pl-4">
          <p className="font-semibold text-lg">{name}</p>
          <p className="font-normal text-sm text-gray-600">{about}</p>
        </div>
        <div className="flex justify-end space-x-3">
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md">
            Confirm
          </button>
          <button className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded-md">
            Delete Request
          </button>
        </div>
      </div>
    </div>
  );
};