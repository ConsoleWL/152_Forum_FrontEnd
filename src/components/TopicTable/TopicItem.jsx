import { Link } from "react-router-dom";

const TopicItem = ({ topic }) => {
  const handleActive = () => {};

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
      <td>{topic.timePosted}</td>
      <td>{topic.likes}</td>
    </tr>
  );
};

export default TopicItem;
