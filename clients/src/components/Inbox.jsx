/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { MdCropSquare, MdInbox, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FaCaretDown, FaUserFriends } from "react-icons/fa";
import { IoMdMore, IoMdRefresh } from "react-icons/io";
import { GoTag } from 'react-icons/go';
import { Emails } from './Emails';
// import { Email } from './Emails';


const mailType = [
    { icon: <MdInbox />, text: 'Primary' },
    { icon: <GoTag />, text: 'Promotions' },
    { icon: <FaUserFriends />, text: 'Social' }
];

function Inbox() {
    const [selected, setSelected] = useState(0);

  return (
    <>
        <div className="flex-1 bg-white rounded-xl mx-16 my-6">
            {/* Child 1 */}
            <div className="flex items-center justify-between px-4 my-2 ">
                {/* SubChild one */}
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                        <MdCropSquare size={"20px"}/>
                        <FaCaretDown size={"20px"}/>
                    </div>
                    <div className="p-2 rounded-full cursor-pointer">
                        <IoMdRefresh size={"20px"}/>
                    </div>
                    <div className="p-2 rounded-full cursor-pointer">
                        <IoMdMore size={"20px"}/>
                    </div>
                        
                </div>

                {/* SubChild two */}
                <div className="flex items-center gap-2">
                    <span>1 to 50</span>
                    <MdKeyboardArrowLeft/>
                    <MdKeyboardArrowRight/>
                </div>
                

            </div>
            
            {/* Child 2 */}
            <div className='h-90vh overflow-y-auto'>
                <div className='flex items-center gap-1'>
                        {mailType.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => setSelected(index)}
                                className= {`${
                                    selected === index
                                    ? "border-b-4 border-b-blue-600 text-blue-600"
                                    : "boarder-b-4 border-b-transparent"
                            } flex items-center p-4 gap-5 w-52 hover:bg-gray-200 cursor-pointer`}>
                                {item.icon}
                                <span>{item.text}</span>
                            </button>                        
                        ))}
                    </div>
            </div>
          <Emails/>
        </div>
      
    </>
  )
}

export default Inbox