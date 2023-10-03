import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useEffect, useState } from "react";
import Profile from "../../components/Profile Component/Profile";
import TopicTable from "../../components/TopicTable/TopicTable";
import Comments from "../../context/Comments/Comments";

const ProfilePage = () => {
  const [user, token] = useAuth();
  const [userObj, setUserObj] = useState({});
  const [topics, setTopics] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchUser();
    fetchTopics();
    fetchComments();
  }, []);

  console.log(comments);

  const fetchUser = async () => {
    try {
      let response = await axios.get(
        `https://localhost:5001/api/user/${user.id}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setUserObj(response.data);
    } catch (error) {
      console.log("Error in fetchUser by Id", error);
    }
  };

  const fetchTopics = async () => {
    try {
      let response2 = await axios.get(
        `https://localhost:5001/api/topic/user/${user.id}`
      );
      setTopics(response2.data);
    } catch (error) {
      console.log("Error in fetchTopics by Id in ProfilePage", error);
    }
  };

  const fetchComments = async () => {
    try {
      let response3 = await axios.get(
        `https://localhost:5001/api/comment/usercomments/${user.id}`
      );
      setComments(response3.data);
    } catch (error) {
      console.log("Error in fetchComments by User Id in Profile Page", error);
    }
  };

  return (
    <div>
      <div>Profile page</div>
      <div>
        <Profile userObj={userObj} />
        <TopicTable topicsObj={topics} />
        <Comments props={comments} />
      </div>
    </div>
  );
};

export default ProfilePage;
