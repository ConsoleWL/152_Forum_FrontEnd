import UserItem from "./UserItem";

const ListOfUsers = ({ users = [], activeIndex, setActiveIndex }) => {
  const userItem = users.map((user) => (
    <UserItem
      userObj={user}
      key={user.id}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
    />
  ));
  return (
    <table>
      <thead>
        <tr>
          <th> User:</th>
        </tr>
      </thead>
      <tbody>{userItem}</tbody>
    </table>
  );
};

export default ListOfUsers;
