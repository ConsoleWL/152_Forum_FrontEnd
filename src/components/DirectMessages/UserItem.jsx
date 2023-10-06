const UserItem = ({ userObj }) => {
  console.log(userObj);
  return (
    <tr>
      <td>{userObj.userName}</td>
    </tr>
  );
};

export default UserItem;
