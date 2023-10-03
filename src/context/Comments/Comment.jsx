const Comment = ({ commentObj }) => {
  return (
    <div>
      <br />
      <div>
        <span>id: {commentObj.commentId}</span>
        <span>likes: {commentObj.likes}</span>
        <div>
          <span>Author: {commentObj.user.userName}</span>
        </div>
        <span>Text: {commentObj.text}</span>
      </div>
    </div>
  );
};

export default Comment;
