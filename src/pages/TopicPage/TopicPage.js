import Topic from "../../components/Topic/Topic";
import Comments from "../../context/Comments/Comments";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import TopicItem from "../../components/TopicTable/TopicItem";

const TopicPage = () => {
  const [user, token] = useAuth();
  const { topicId } = useParams();
  const [topicItem, setTopicItem] = useState(null);
  const [topicReview, setTopicReview] = useState(null);

  useEffect(() => {
    fetchTopic();
    fetchReviews();
  }, []);

  const fetchTopic = async () => {
    try {
      let response = await axios.get(
        `https://localhost:5001/api/topic/${topicId}`
      );
      setTopicItem(response.data);
    } catch (error) {
      console.log("Error in fetchTopic by id ", error);
    }
  };

  const fetchReviews = async () => {
    try {
      let response2 = await axios.get(
        `https://localhost:5001/api/comment/topic/${topicId}`
      );
      setTopicReview(response2.data);
    } catch (error) {
      console.log("Error in fetch reviews in Topic page");
    }
  };
  return (
    <div>
      <h2>Topic Page</h2>
      {topicItem && <Topic props={topicItem} />}

      {topicReview && <Comments props={topicReview} />}
    </div>
  );
};

export default TopicPage;
