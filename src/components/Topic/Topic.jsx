import { Link } from "react-router-dom";
import React from "react";

const Topic = ({ props }) => {
  console.log(props.user.userName);
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
      <div>Text: {props.text}</div>
    </div>
  );
};

export default Topic;
