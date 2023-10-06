import { Link } from "react-router-dom";
import React from "react";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Topic = ({ props }) => {
  const navigate = useNavigate();
  const [user, token] = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState();
  const [title, setTitle] = useState();

  var checkProdileIsAuthorizedUser = user.userName === props.user.userName;

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
      <div>
        <div>
          Author:
          <Link to={`/profile/${props.user.userName}`}>
            {props.user.userName}
          </Link>
        </div>
        <div>PublishedDate {props.timePosted}</div>
        <div>Likes: {props.likes}</div>
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
          <div>Title: {props.title}</div>
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
