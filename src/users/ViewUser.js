import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

export const ViewUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState([]);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3004/users/${id}`);
    setUser(result.data);
  };

  useEffect(() => {
    loadUser();
  }, []);

  const back = () => {
    history.push("/");
  };

  const { name, phone, website } = user;
  return (
    <div className="container view">
      <div className="header">
        <h1 style={{ display: "block" }}>User ID: {user.id} </h1>
      </div>
      <div className="view-list">
        <ul>
          <li>Name: {name}</li>
          <li>Phone: {phone} </li>
          <li>Website: {website} </li>
        </ul>
      </div>
      <div>
        <button className="button btnlow btn1" onClick={() => back()}>
          Back to Home
        </button>
      </div>
    </div>
  );
};
