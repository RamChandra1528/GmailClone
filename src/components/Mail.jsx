/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import {
  MdDeleteOutline,
  MdOutlineMarkEmailUnread,
  MdOutlineReport,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { BiArchiveIn } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Mail = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 bg-white rounded-xl mx-5 mt-5">
      {/* Header Section */}
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <div
            className="p-2 rounded-full hover:bg-gray-200 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <IoMdArrowBack size={"22px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
            <BiArchiveIn size={"22px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
            <MdOutlineReport size={"22px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
            <MdDeleteOutline size={"22px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
            <MdOutlineMarkEmailUnread size={"22px"} />
          </div>
        </div>
        {/* Pagination Controls */}
        <div className="flex items-center gap-2">
          <MdKeyboardArrowLeft
            size={"22px"}
            className="rounded-full hover:bg-gray-200 cursor-pointer"
          />
          <p>1-50 pages</p>
          <MdKeyboardArrowRight
            size={"22px"}
            className="rounded-full hover:bg-gray-200 cursor-pointer"
          />
        </div>
      </div>

      {/* Mail Content */}
      <div className="h-[90vh] overflow-y-auto p-4">
        {/* Mail Subject & Date */}
        <div className="flex justify-between bg-white items-center gap-1">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-medium">Subject</h1>
            <span className="text-sm bg-gray-200 rounded-md px-2">Inbox</span>
          </div>
          <div className="flex-none text-gray-400 my-5 text-sm">
            <p>12 days ago</p>
          </div>
        </div>

        {/* Email Content */}
        <div className="mt-5 bg-gray-100 p-4 rounded-lg text-gray-700 whitespace-pre-line">
            <p>
                Lorem ipsum dolor sit amat consectetur.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Mail;
