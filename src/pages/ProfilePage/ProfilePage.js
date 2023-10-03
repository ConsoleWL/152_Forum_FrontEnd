import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  const [user, token] = useAuth();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      let response = await axios.get(
        `https://localhost:5001/api/user/${user.id}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log("Error in fetchUser by Id", error);
    }
  };

  return (
    <div>
      <div>Profile page</div>
      <div></div>
    </div>
  );
};

export default ProfilePage;
