import { Link } from "react-router-dom";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Comment = ({ commentObj }) => {
  const { topicId } = useParams();
  const [user, token] = useAuth();

  const handleCommentLikes = async (e) => {
    try {
      const response = await axios.put(
        `https://localhost:5001/api/comment/like/${commentObj.commentId}`,
        {},
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
    } catch (error) {
      console.warn(
        "Error in Topic Page, Comment Component, handleCommentLikes Button",
        error
      );
    }
  };

  return (
    <div>
      <br />
      <div>
        <span>id: {commentObj.commentId} </span>
        <span>
          likes:
          <button onClick={handleCommentLikes}> {commentObj.likes}</button>
        </span>
        <span>
          Author:
          <Link to={`/profile/${commentObj.user.userName}`}>
            {commentObj.user.userName}
          </Link>
        </span>
        <div>
          <span>Text: {commentObj.text}</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
