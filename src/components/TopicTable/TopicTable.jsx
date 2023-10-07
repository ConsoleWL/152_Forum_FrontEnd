import TopicItem from "./TopicItem";

const TopicTable = ({ topicsObj = [], userObj }) => {
  const topicItem = topicsObj.map((topic) => (
    <TopicItem key={topic.topicId} topic={topic} userObj={userObj} />
  ));
  return (
    topicItem && (
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Athor</th>
              <th scope="col">Published</th>
              <th scope="col">Likes</th>
            </tr>
          </thead>
          <tbody>{topicItem}</tbody>
        </table>
      </div>
    )
  );
};

export default TopicTable;
