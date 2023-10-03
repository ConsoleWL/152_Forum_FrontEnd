import Comment from "./Comment";
const Comments = ({ props }) => {
  const reviewItem = props.map((review, index) => (
    <Comment key={review.commentId} commentObj={review} />
  ));

  console.log(props);

  return <div> {reviewItem}</div>;
};

export default Comments;
