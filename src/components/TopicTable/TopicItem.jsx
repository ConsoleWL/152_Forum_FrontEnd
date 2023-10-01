const TopicItem = ({ topic }) => {
  const handleActive = () => {};

  return (
    <tr onClick={handleActive}>
      <td>{topic.topicId}</td>
      <td>{topic.title}</td>
      <td>{topic.user.userName}</td>
      <td>{topic.timePosted}</td>
      <td>{topic.likes}</td>
    </tr>
  );
};

export default TopicItem;
