import { Link } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../context/AuthContext";

import useAuth from "../../hooks/useAuth";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

const TopicItem = ({ topic, userObj }) => {
  const [user, token] = useAuth();
  const handleActive = () => {}; // what is that stuff? i don;t think I need this
  const navigate = useNavigate();

  var checkProdileIsAuthorizedUser = false;
  if (userObj != null) {
    checkProdileIsAuthorizedUser = user.id === userObj.id;
  }

  const handleTopicLikes = async (e) => {
    try {
      const response = await axios.put(
        `https://localhost:5001/api/topic/like/${topic.topicId}`,
        {},
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.warn("Error in Home Page , Topic Item, Like Button", error);
    }
  };

  const handleDeleteTopic = async (e) => {
    try {
      const response = await axios.delete(
        `https://localhost:5001/api/topic/${topic.topicId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.warn("Error in Home Page , Topic Item, Delete Button", error);
    }
  };

  const handleUpdateTopic = async (e) => {
    try {
    } catch (error) {
      console.warn("Error in Home Page , Topic Item, Delete Button", error);
    }
  };

  const shortDateFormat = dayjs(topic.timePosted).format("MM/DD/YYYY");

  return (
    <tr onClick={handleActive}>
      <td>{topic.topicId}</td>
      <td>
        <Link to={`/topic/${topic.topicId}`}>{topic.title}</Link>
      </td>
      <td>
        <Link to={`/profile/${topic.user.userName}`}>
          {topic.user.userName}
        </Link>
      </td>
      <td> {shortDateFormat}</td>
      <td>
        <button onClick={handleTopicLikes}>{topic.likes}</button>
      </td>

      {checkProdileIsAuthorizedUser ? (
        <td>
          <button onClick={handleDeleteTopic}>Delete</button>
        </td>
      ) : null}

      {checkProdileIsAuthorizedUser ? (
        <td>
          <button onClick={handleUpdateTopic}>Update</button>
        </td>
      ) : null}
    </tr>
  );
};

export default TopicItem;
