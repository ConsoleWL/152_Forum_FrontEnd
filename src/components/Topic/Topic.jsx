import { Link } from "react-router-dom";
import React from "react";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

const Topic = ({ props }) => {
  const navigate = useNavigate();
  const [user, token] = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState();
  const [title, setTitle] = useState();

  var checkProdileIsAuthorizedUser = user.userName === props.user.userName;

  const shortDateFormat = dayjs(props.timePosted).format("MM/DD/YYYY");

  const handleUpdateButton = async (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
    setText(props.text);
    setTitle(props.title);
  };

  const updatedTopic = {
    title,
    text,
  };

  const handleUpdateTopic = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.put(
        `https://localhost:5001/api/topic/${props.topicId}`,
        updatedTopic,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setIsEditing(!isEditing);
    } catch (error) {
      console.warn("Error in Topic Page , Topic Item, Update Button", error);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-evenly">
        <span>
          Author:
          <Link to={`/profile/${props.user.userName}`}>
            {props.user.userName}
          </Link>
        </span>
        <span>PublishedDate {shortDateFormat}</span>
        <span>Likes: {props.likes}</span>
      </div>

      {isEditing ? (
        <div>
          <form onSubmit={handleUpdateTopic}>
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
            <br />
            <br />
            <label>Text</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>

            <button type="submit">Save</button>
          </form>
        </div>
      ) : (
        <div>
          <div className="d-flex justify-content-center">{props.title}</div>
          <div>Text: {props.text}</div>
        </div>
      )}

      <div>
        {checkProdileIsAuthorizedUser && !isEditing ? (
          <button onClick={handleUpdateButton}>Update</button>
        ) : null}
      </div>
    </div>
  );
};

export default Topic;
