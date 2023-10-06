const UserItem = ({ userObj, activeIndex, setActiveIndex }) => {
  const handleActive = () => {
    setActiveIndex(userObj.userName);
    console.log(`You clicked ${userObj.userName}`);
  };

  return (
    <tr>
      <td onClick={handleActive}>{userObj.userName}</td>
    </tr>
  );
};

export default UserItem;
