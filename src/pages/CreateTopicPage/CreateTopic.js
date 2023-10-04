import React from "react";
import AuthContext from "../../context/AuthContext";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateTopic = ({ onNewTopic }) => {
  const [user, token] = useAuth();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [publichDate, setPublichDate] = useState("2018");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // TIME DOESN'T WORK

    // const current = new Date();
    // const date = `${current.getDate()}/${
    //   current.getMonth() + 1
    // }/${current.getFullYear()}`;

    // setPublichDate(date);
    // console.log(publichDate);

    const formData = {
      title,
      text,
      publichDate,
    };

    console.log(formData);

    try {
      const response = await axios.post(
        "https://localhost:5001/api/topic",
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      navigate("/");
    } catch (error) {
      console.warn("Error submitting new aaaatopic", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Topic</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Text</label>
        <input
          type="text"
          className="form-control"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Create
      </button>
    </form>
  );
};

export default CreateTopic;
