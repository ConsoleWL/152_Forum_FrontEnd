const Topic = ({ props }) => {
  console.log(props);
  return (
    <div>
      <div>
        <div>Author: {props.user.userName} </div>
        <div>PublishedDate {props.timePosted}</div>
        <div>Likes: {props.likes}</div>
      </div>
      <div>Text: {props.text}</div>
    </div>
  );
};

export default Topic;
