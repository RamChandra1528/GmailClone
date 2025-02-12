/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { MdOutlineClear, MdFullscreen } from "react-icons/md";

const SendMessage = ({ onClose }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [from, setFrom] = useState('');  // 'from' field added
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = async () => {
    // Check if all fields are filled
    if (!from || !to || !subject || !message) {
      alert("All fields (from, to, subject, message) are required");
      return;
    }

    try {
      // Get token from localStorage (make sure it's stored earlier)
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Unauthorized. Please log in.");
        return;
      }

      // Send the message to the server
      const response = await fetch("http://localhost:3000/api/email/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,  // Include the token in the Authorization header
        },
        body: JSON.stringify({ from, to, subject, message }),  // Including 'from' as well
      });

      const data = await response.json();  // Parse the response as JSON

      // Handle success response
      if (response.ok) {
        setShowSuccessMessage(true);

        // Clear form fields after successful send
        setFrom('');
        setTo('');
        setSubject('');
        setMessage('');

        // Hide success message after 2 seconds
        setTimeout(() => {
          setShowSuccessMessage(false);

          // Reload the page after message is sent
          window.location.reload();  // Refresh the page
        }, 2000);
      } else {
        // Handle failure in sending message
        alert(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred while sending the message.");
    }
  };

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
          placeholder="From..."
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={from}
          onChange={(e) => setFrom(e.target.value)}  // 'from' field
        />
        <input
          type="text"
          placeholder="To..."
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Subject..."
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          name="main_content"
          placeholder="Write here..."
          className="w-full p-2 border rounded-md h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>

      {/* Send Button */}
      <div className="flex justify-end mt-3">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSend}
        >
          Send
        </button>
      </div>

      {/* Success Message */}
      {showSuccessMessage && (
        <div className="mt-3 text-green-600 font-semibold text-center">
          Message sent successfully!
        </div>
      )}
    </div>
  );
};

export default SendMessage;
