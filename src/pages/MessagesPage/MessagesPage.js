import DirectMessagesUser from "../../components/DirectMessages/DirectMessagesUser";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import React, { useState, useEffect } from "react";
import ListOfUsers from "../../components/DirectMessages/ListOfUsers";

const DirecMessages = () => {
  const [user, token] = useAuth();
  const [users, setUsers] = useState([]);
  // for direct messages
  const [messages, setMessages] = useState([]);
  //
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    fetchUsers();
    fetchMessages();
  }, []);

  const fetchUsers = async () => {
    try {
      let response = await axios.get(
        `https://localhost:5001/api/DirectMessage`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setUsers(response.data);
    } catch (error) {
      console.log("Error in MessagesPage ", error);
    }
  };

  // for direct messages empty
  const fetchMessages = async () => {
    try {
    } catch (error) {
      console.log("Error in MessagesPage ", error);
    }
  };

  return (
    <div>
      <h2>Message Page</h2>
      <div>
        <ListOfUsers
          users={users}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>
      <div>
        <DirectMessagesUser userObj={users[activeIndex]} />
      </div>
    </div>
  );
};

export default DirecMessages;
