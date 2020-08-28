import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    phone: "",
    website: "",
  });

  const change = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3004/users", user);
    history.push("/");
  };

  const { name, phone, website } = user;

  return (
    <div className="container formclass">
      <form onSubmit={(e) => submit(e)}>
        <h1 className="header">Add User</h1>
        <input
          type="text"
          placeholder="Enter the Name"
          name="name"
          value={name}
          onChange={(e) => change(e)}
        />
        <input
          type="text"
          placeholder="Enter the Phone number"
          name="phone"
          value={phone}
          onChange={(e) => change(e)}
        />
        <input
          type="text"
          placeholder="Enter the Website"
          name="website"
          value={website}
          onChange={(e) => change(e)}
        />
        <button className="button btnlow btn1">Add User</button>
        <button
          onClick={() => history.push("/")}
          className="button btnlow btn2"
        >
          {" "}
          Back to Home{" "}
        </button>
      </form>
    </div>
  );
};
