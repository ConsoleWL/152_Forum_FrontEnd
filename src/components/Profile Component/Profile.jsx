import TopicTable from "../TopicTable/TopicTable";

const Profile = ({ userObj }) => {
  return (
    <div>
      <div>User: {userObj.userName}</div>
      <div>ProfilePicture: {userObj.profilePicture}</div>
      <div>Registered: {userObj.registrationData}</div>
      <div>Likes: {userObj.likes}</div>
      <br />
    </div>
  );
};

export default Profile;
