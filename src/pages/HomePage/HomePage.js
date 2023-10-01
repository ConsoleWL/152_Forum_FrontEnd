import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import TopicTable from "../../components/TopicTable/TopicTable";

const HomePage = () => {
  const [topics, setTopics] = useState([]);

  const fetchTopic = async () => {
    try {
      let response = await axios.get(`https://localhost:5001/api/topic`);
      setTopics(response.data);
    } catch (error) {
      console.log("Error in fetchBooks method", error);
    }
  };

  console.log(topics);

  useEffect(() => {
    fetchTopic();
  }, []);

  return (
    <div>
      <Link to="/addtopic">
        <button>New Topic</button>
      </Link>
      <TopicTable topicsObj={topics} />
    </div>
  );
};

export default HomePage;
