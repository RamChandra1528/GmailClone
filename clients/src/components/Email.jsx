/* eslint-disable no-unused-vars */
import React from "react";
import { MdCropSquare } from "react-icons/md";
import { RiStarSLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export const Email = () => {
  const navigate  = useNavigate()
  const openMail = () => {
    navigate("/mail/123")
  }
  return (
    <div onClick={openMail} className="flex items-center justify-between border-b border-gray-200 p-4 hover:shadow-lg">
      {/* child 1: Icons and Title */}
      <div className="flex items-center gap-2">
        <div className="text-gray-400">
          <MdCropSquare size={22} />
        </div>
        <div className="text-gray-400">
          <RiStarSLine />
        </div>
        <div className="font-semibold text-gray-900">Sample Title</div>
      </div>

      {/* child 2: Description */}
      <div className="flex-1 ml-4">
        <span className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
      </div>

      {/* child 3: Timestamp */}
      <div className="flex-none text-gray-500 text-sm">
        <span className="text-gray-400">12 Days Ago</span>
      </div>
    </div>
  );
};
