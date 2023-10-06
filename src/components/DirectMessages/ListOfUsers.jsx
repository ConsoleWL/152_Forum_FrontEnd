import UserItem from "./UserItem";

const ListOfUsers = ({ users }) => {
  console.log(users);
  const userItem = users.map((user) => (
    <UserItem userObj={user} key={user.id} />
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
