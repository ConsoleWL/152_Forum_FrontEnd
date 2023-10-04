import Comment from "./Comment";
const Comments = ({ props }) => {
  const reviewItem = props.map((review) => (
    <Comment key={review.commentId} commentObj={review} />
  ));
  return <div> {reviewItem}</div>;
};

export default Comments;
