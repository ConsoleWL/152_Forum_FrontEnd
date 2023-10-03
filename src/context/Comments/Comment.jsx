const Comment = ({ commentObj }) => {
  return (
    <div>
      <br />
      <div>
        <span>id: {commentObj.commentId}</span>
        <span>likes: {commentObj.likes}</span>
        <div>
          <span>
            UserId. Need to change to username but some reason we get null need
            to include later in the controller: {commentObj.userId}
          </span>
        </div>
        <span>Text: {commentObj.text}</span>
      </div>
    </div>
  );
};

export default Comment;
