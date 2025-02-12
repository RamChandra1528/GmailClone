/* eslint-disable no-unused-vars */
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { MdDeleteOutline, MdOutlineMarkEmailUnread, MdOutlineReport, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { BiArchiveIn } from "react-icons/bi";

// Sample Email Data
const emails = [
  {
    _id: "67a59fa1aa075dd47b58017d",
    from: "iitjee451@@gmail.com",
    to: "limbaramchandra2002@gmail.com",
    subject: "Test Email",
    message: "Hello, this is a test email from our Gmail clone!",
    timestamp: "2025-02-07T05:52:33.129+00:00",
  }
];

const Mail = () => {
  const { id } = useParams(); // Get email ID from URL
  const navigate = useNavigate();

  // Find the selected email based on the ID from URL
  const email = emails.find((mail) => mail._id === id);

  if (!email) {
    return <div className="text-center mt-10 text-red-500">Email not found</div>;
  }

  return (
    <div className="flex-1 bg-white rounded-xl mx-5 mt-5">
      {/* Header Section */}
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer" onClick={() => navigate("/app")}>
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
        <div className="flex items-center gap-2">
          <MdKeyboardArrowLeft size={"22px"} className="rounded-full hover:bg-gray-200 cursor-pointer" />
          <p>1 - 0 pages</p>
          <MdKeyboardArrowRight size={"22px"} className="rounded-full hover:bg-gray-200 cursor-pointer" />
        </div>
      </div>

      {/* Mail Content */}
      <div className="h-[90vh] overflow-y-auto p-4">
        {/* Mail Subject & Date */}
        <div className="flex justify-between bg-white items-center gap-1">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-medium">{email.subject}</h1>
            <span className="text-sm bg-gray-200 rounded-md px-2">Inbox</span>
          </div>
          <div className="flex-none text-gray-400 my-5 text-sm">
            <p>{new Date(email.timestamp).toLocaleString()}</p>
          </div>
        </div>

        {/* Email Content */}
        <div className="mt-5 bg-gray-100 p-4 rounded-lg text-gray-700 whitespace-pre-line">
          <p>{email.message}</p>
        </div>
      </div>
    </div>
  );
};

export default Mail;
