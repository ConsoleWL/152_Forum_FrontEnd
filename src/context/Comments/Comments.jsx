import Comment from "./Comment";
const Comments = ({ props, userObj }) => {
  const reviewItem = props.map((review) => (
    <Comment key={review.commentId} commentObj={review} userObj={userObj} />
  ));
  return <div> {reviewItem}</div>;
};

export default Comments;
