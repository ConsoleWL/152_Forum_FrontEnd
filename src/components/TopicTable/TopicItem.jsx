import { Link } from "react-router-dom";

const TopicItem = ({ topic }) => {
  const handleActive = () => {};

  return (
    <tr onClick={handleActive}>
      <td>{topic.topicId}</td>
      <td>
        <Link to={`/topic/${topic.topicId}`}>{topic.title}</Link>
      </td>
      <td>{topic.user.userName}</td>
      <td>{topic.timePosted}</td>
      <td>{topic.likes}</td>
    </tr>
  );
};

export default TopicItem;
