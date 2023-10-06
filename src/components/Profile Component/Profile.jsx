import TopicTable from "../TopicTable/TopicTable";

const Profile = ({ userObj }) => {
  // console.log(userObj);
  return (
    <div>
      <div>UserName: {userObj.userName}</div>
      <div>ProfilePicture: {userObj.profilePicture}</div>
      <div>registrationData: {userObj.registrationData}</div>
      <div>LIkes: {userObj.likes}</div>
      <button>Send a Messages</button>
      <br />
    </div>
  );
};

export default Profile;
