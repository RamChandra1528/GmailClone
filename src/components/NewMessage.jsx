/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { MdOutlineClear, MdFullscreen } from "react-icons/md";

const NewMessage = ({ onClose }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`absolute ${
        isExpanded
          ? "top-0 left-0 w-full h-full bg-white p-8"
          : "bottom-0 right-[20%] bg-white w-96 p-4 rounded-lg shadow-lg"
      }`}
    >
      {/* Header Section */}
      <div className="flex justify-between items-center border-b pb-2">
        <p className="text-lg font-semibold text-gray-800">New Message</p>
        <div className="flex gap-2">
          {/* Expand Button */}
          <MdFullscreen
            className="text-gray-500 cursor-pointer hover:text-gray-700"
            size={20}
            onClick={() => setIsExpanded(!isExpanded)}
          />
          {/* Close Button */}
          <MdOutlineClear
            className="text-gray-500 cursor-pointer hover:text-gray-700"
            size={20}
            onClick={onClose} 
          />
        </div>
      </div>

      {/* Input Fields */}
      <div className="mt-2 space-y-3">
        <input
          type="text"
          placeholder="To..."
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Subject..."
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          name="main_content"
          placeholder="Write here..."
          className="w-full p-2 border rounded-md h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
      </div>

      {/* Send Button */}
      <div className="flex justify-end mt-3">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Send
        </button>
      </div>
    </div>
  );
};

export default NewMessage;
