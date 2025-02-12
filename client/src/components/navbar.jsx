/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { BiPlus } from "react-icons/bi";
import { MdApps } from "react-icons/md";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [searchQuery, setSearchQuery] = useState(''); // State to hold the search query
  const [filteredEmails, setFilteredEmails] = useState([]); // State to hold filtered results
  const navigate = useNavigate();

  // Dummy email data for demonstration (you can replace this with actual email data)
  const emails = [
    { id: "101", title: "Project Update", description: "Latest changes in project X", timestamp: "1 Day Ago", content: "Here are the latest updates for project X..." },
    { id: "102", title: "Meeting Reminder", description: "Don't forget the client call", timestamp: "3 Days Ago", content: "The client call is scheduled for tomorrow at 10 AM." },
    { id: "103", title: "Invoice Due", description: "Your invoice is due next week", timestamp: "5 Days Ago", content: "Your invoice for the month is due on the 15th." },
    { id: "104", title: "New Assignment", description: "Check your latest task", timestamp: "2 Days Ago", content: "You have been assigned a new task for the project." },
    { id: "105", title: "Weekly Report", description: "Summary of this week's progress", timestamp: "6 Days Ago", content: "Here is the weekly progress report." },
    { id: "106", title: "Security Alert", description: "Unusual login detected", timestamp: "4 Days Ago", content: "We detected an unusual login attempt on your account." },
    { id: "107", title: "Subscription Expiry", description: "Your subscription is about to end", timestamp: "7 Days Ago", content: "Renew your subscription to continue using our services." },
    { id: "108", title: "Team Outing", description: "Join us for a fun event", timestamp: "1 Week Ago", content: "The team outing is scheduled for next Saturday." },
    { id: "109", title: "Performance Review", description: "Your quarterly review is ready", timestamp: "5 Days Ago", content: "Your quarterly performance review has been shared." },
    { id: "110", title: "System Maintenance", description: "Scheduled maintenance update", timestamp: "2 Days Ago", content: "The system will be under maintenance this weekend." },
    { id: "111", title: "New Feature", description: "Check out our latest update", timestamp: "3 Days Ago", content: "We have added a new feature to the platform." },
    { id: "112", title: "Bug Fixes", description: "Recent bug fixes and patches", timestamp: "6 Days Ago", content: "Here are the latest bug fixes and improvements." },
    { id: "113", title: "Happy Holidays", description: "Wishing you a great holiday season", timestamp: "2 Weeks Ago", content: "Enjoy your holidays with our special offers." },
    { id: "114", title: "Reminder: Password Change", description: "Time to update your password", timestamp: "1 Week Ago", content: "For security reasons, please update your password." },
    { id: "115", title: "Client Feedback", description: "Important feedback from the client", timestamp: "3 Days Ago", content: "The client has shared their feedback on the project." },
    { id: "116", title: "Training Session", description: "Upcoming training on new tools", timestamp: "4 Days Ago", content: "Join the training session on the new tools." },
    { id: "117", title: "Invoice Paid", description: "Your invoice has been processed", timestamp: "1 Week Ago", content: "Your recent invoice payment has been received." },
    { id: "118", title: "Product Launch", description: "Exciting new product announcement", timestamp: "5 Days Ago", content: "Our new product is launching next month." },
    { id: "119", title: "Policy Update", description: "Important changes to terms of service", timestamp: "2 Days Ago", content: "We have updated our terms of service." },
    { id: "120", title: "Conference Invite", description: "Join our annual conference", timestamp: "3 Weeks Ago", content: "You're invited to our annual industry conference." },
    { id: "121", title: "Deadline Extension", description: "New deadline for submissions", timestamp: "1 Day Ago", content: "The deadline for submission has been extended." },
    { id: "122", title: "HR Announcement", description: "New policies and updates", timestamp: "4 Days Ago", content: "Important HR policy updates have been published." },
    { id: "123", title: "Support Ticket", description: "Your ticket has been updated", timestamp: "3 Days Ago", content: "Your support request has been addressed." },
    { id: "124", title: "Networking Event", description: "Meet industry professionals", timestamp: "1 Week Ago", content: "Join our networking event this Friday." },
  ];
  

  useEffect(() => {
    // Fetching user data from localStorage
    const storedName = localStorage.getItem('userName') || 'Guest User';
    const storedEmail = localStorage.getItem('userEmail') || 'guest@example.com';
    setUserName(storedName);
    setUserEmail(storedEmail);
  }, []);

  useEffect(() => {
    // Filter emails based on search query
    if (searchQuery) {
      const results = emails.filter(email =>
        email.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        email.content.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredEmails(results);
    } else {
      setFilteredEmails([]); // Clear the search results if no query
    }
  }, [searchQuery]);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleSignOut = () => {
    try {
      console.log("Signing out...");
      const token = localStorage.getItem("userToken");
  
      if (!token) {
        console.warn("No token found in localStorage!");
      } else {
        localStorage.removeItem("userToken");
        console.log("Token removed successfully.");
      }
  
      navigate("/login");
    } catch (error) {
      console.error("Error during sign-out:", error);
    }
  };

  return (
    <nav className="flex items-center justify-between bg-white h-16 px-6">
      {/* Left Menu */}
      <div className="flex items-center gap-4">
        <RxHamburgerMenu className="text-xl text-gray-700 cursor-pointer" />
        <img
          src="https://cdn-icons-png.freepik.com/512/5968/5968534.png"
          alt="Gmail Logo"
          className="h-10 w-10"
        />
        <h2 className="text-2xl font-semibold text-gray-800">Gmail</h2>
      </div>

      {/* Search Area */}
      <div className="flex-1 flex justify-center relative">
        <div className="flex items-center border border-gray-300 px-4 py-2 rounded-full w-1/3 focus-within:ring-2 focus-within:ring-blue-400">
          <FaSearch className="text-xl text-gray-500" />
          <input
            type="text"
            placeholder="Search mail"
            className="w-full bg-transparent outline-none pl-2 text-sm text-gray-800 placeholder-gray-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Handle input change
          />
          <HiAdjustmentsHorizontal className="text-xl text-gray-600 cursor-pointer" />
        </div>

        {/* Display search results */}
        {searchQuery && filteredEmails.length > 0 && (
          <div className="absolute left-0 w-full bg-white border rounded-lg shadow-lg mt-1 z-10">
            {filteredEmails.map((email) => (
              <div key={email.id} className="p-2 border-b border-gray-200 hover:bg-gray-100 cursor-pointer">
                <p className="text-sm font-semibold">{email.subject}</p>
                <p className="text-xs text-gray-500">{email.content.substring(0, 50)}...</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right Menu */}
      <div className="flex items-center gap-6 relative">
        {/* Compose Button */}
        <button className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full">
          <BiPlus className="text-xl" />
        </button>

        {/* Google Apps Icon */}
        <MdApps className="text-2xl text-gray-700 cursor-pointer" />

        {/* User Profile */}
        <div className="relative">
          <div
            className="flex items-center gap-4 cursor-pointer"
            onClick={toggleDropdown}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6T22hjg-27EwUwJlnyIY5uNDm_NoXr3I5ZlqEhH86thsrkbuUc6PrgXykltpo3kKj3HU&usqp=CAU"
              alt="User Profile"
              className="h-10 w-10 rounded-full border-2 border-gray-300"
            />
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg py-4">
              <div className="flex flex-col items-center px-4 pb-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6T22hjg-27EwUwJlnyIY5uNDm_NoXr3I5ZlqEhH86thsrkbuUc6PrgXykltpo3kKj3HU&usqp=CAU"
                  alt="User Profile"
                  className="h-16 w-16 rounded-full mb-2"
                />
                <p className="font-bold text-gray-800">{userName}</p>
                <p className="text-sm text-gray-600">{userEmail}</p>
              </div>
              <hr className="border-gray-200" />
              <button
                className="flex items-center justify-center gap-2 px-4 py-2 w-full text-gray-800 hover:bg-gray-100 text-sm"
                onClick={() => console.log("Add account clicked")}
              >
                <BiPlus className="text-lg" /> Add account
              </button>
              <button
                className="flex items-center justify-center gap-2 px-4 py-2 w-full text-red-600 hover:bg-gray-100 text-sm"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
              <hr className="border-gray-200 my-2" />
              <div className="flex justify-center text-xs text-gray-500">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
                <span className="mx-2">·</span>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
