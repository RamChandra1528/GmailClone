/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Email } from "./Email"; // Assuming Email component is used here

function Emails() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/email/messages");
        setEmails(res.data);
        console.log(res); // Useful for debugging
      } catch (err) {
        console.error("Error fetching emails:", err);
      }
    };
    fetchEmails();
  }, []); // Only fetch emails once when component is mounted

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp); // Convert string to Date object
    return date.toLocaleString(); // Format the date to a readable string
  };

  return (
    <div className="p-4">
      {emails.length === 0 ? (
        <p className="text-gray-500">No messages found</p>
      ) : (
        emails.map((email) => (
          <Email
            key={email._id}
            id={email._id}
            title={email.subject}
            description={email.content}
            timestamp={formatTimestamp(email.timestamp)} // Use the formatted timestamp
          />
        ))
      )}
    </div>
  );
}

export default Emails;
