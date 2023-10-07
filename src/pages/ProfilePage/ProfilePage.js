import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useEffect, useState } from "react";
import Profile from "../../components/Profile Component/Profile";
import TopicTable from "../../components/TopicTable/TopicTable";
import Comments from "../../context/Comments/Comments";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const [user, token] = useAuth();
  const [userObj, setUserObj] = useState({});
  const { userName } = useParams();
  const [isSendMessage, setIsSendMessage] = useState(false); // I don't need that
  const [messageBox, setMessageBox] = useState(false);
  const [messageText, setMessageText] = useState("");

  var chechProfileIsUf = user.userName !== userObj.userName;
  const handleSendMessageButton = async (e) => {
    e.preventDefault();
    setMessageBox(!messageBox);
  };

  const messageData = {
    text: messageText,
    useridtoid: userObj.id,
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `https://localhost:5001/api/DirectMessage`,
        messageData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      setMessageBox(!messageBox);
    } catch (error) {
      console.warn(
        "Error in handleSendMessage function, in Profile Page",
        error
      );
    }
  };

  useEffect(() => {
    fetchUser();
  }, [userObj.topics]);

  const fetchUser = async () => {
    try {
      let response = await axios.get(
        `https://localhost:5001/api/user/username/${userName}`
      );
      setUserObj(response.data);
    } catch (error) {
      console.log("Error in fetchUser by name", error);
    }
  };

  return (
    <div>
      <h4>Profile page</h4>
      <div>
        {chechProfileIsUf ? (
          <button
            onClick={handleSendMessageButton}
            type="button"
            className="btn btn-secondary"
          >
            Send a Messages
          </button>
        ) : null}

        {messageBox ? (
          <div>
            <form onSubmit={handleSendMessage}>
              <label>Text</label>
              <textarea
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
              ></textarea>
              <button type="submit">SendMessage</button>
            </form>
          </div>
        ) : null}

        <Profile userObj={userObj} />
        <TopicTable topicsObj={userObj.topics} userObj={userObj} />
        {userObj.comments && (
          <Comments props={userObj.comments} userObj={userObj} />
        )}
      </div>
    </div>
  );
};

export default ProfilePage;

// fetchTopics();
// fetchComments();

// const [topics, setTopics] = useState([]);
// const [comments, setComments] = useState([]);

// const fetchUser = async () => {
//   try {
//     let response = await axios.get(
//       `https://localhost:5001/api/user/${user.id}`,
//       {
//         headers: {
//           Authorization: "Bearer " + token,
//         },
//       }
//     );
//     setUserObj(response.data);
//   } catch (error) {
//     console.log("Error in fetchUser by Id", error);
//   }
// };

// const fetchTopics = async () => {
//   try {
//     let response2 = await axios.get(
//       `https://localhost:5001/api/topic/user/${userObj.id}`
//     );
//     // console.log(response2);
//     setTopics(response2.data);
//   } catch (error) {
//     console.log("Error in fetchTopics by Id in ProfilePage", error);
//   }
// };

// const fetchComments = async () => {
//   try {
//     let response3 = await axios.get(
//       `https://localhost:5001/api/comment/usercomments/${userObj.id}`
//     );
//     console.log(response3);
//     setComments(response3.data);
//   } catch (error) {
//     console.log("Error in fetchComments by User Id in Profile Page", error);
//   }
// };
