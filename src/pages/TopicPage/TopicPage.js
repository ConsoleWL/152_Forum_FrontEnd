import Topic from "../../components/Topic/Topic";
import Comments from "../../context/Comments/Comments";

const TopicPage = () => {
  return (
    <div>
      <h2>Topic Page</h2>
      <Topic />
      <Comments />
    </div>
  );
};

export default TopicPage;
