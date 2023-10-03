import TopicItem from "./TopicItem";

const TopicTable = ({ topicsObj = [] }) => {
  const topicItem = topicsObj.map((topic) => (
    <TopicItem key={topic.topicId} topic={topic} />
  ));

  return (
    topicItem && (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Athor</th>
              <th>Published</th>
              <th>Likes</th>
            </tr>
          </thead>
          <tbody>{topicItem}</tbody>
        </table>
      </div>
    )
  );
};

export default TopicTable;
