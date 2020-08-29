import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Axios from "axios";

export const EditUser = () => {
  const { id } = useParams();
  let history = useHistory();
  const [loading, setloading] = useState(true);
  const [error, setError] = useState("");

  const [user, setUser] = useState({
    name: "",
    phone: "",
    website: "",
  });

  useEffect(() => {
    load();
  }, []);

  const load = () => {
    // const result = await Axios.get(`http://localhost:3004/users/${id}`);
    // setUser(result.data);

    Axios.get(`http://localhost:3004/users/${id}`)
      .then((res) => {
        setloading(false);
        setUser(res.data);
        setError("");
      })
      .catch((error) => {
        setloading(false);
        setUser({});
        setError("Error Loading the data from API");
      });
  };

  const change = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    await Axios.put(`http://localhost:3004/users/${id}`, user);
    history.push("/");
  };

  const { name, phone, website } = user;

  return (
    <div className="container formclass">
      {error ? (
        error
      ) : loading ? (
        "Data is loading"
      ) : (
        <form onSubmit={(e) => submit(e)}>
          <h1 className="header">Edit User</h1>
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
          <button className="button btnlow btn1">Edit User</button>
          <button
            onClick={() => history.push("/")}
            className="button btnlow btn2"
          >
            Back to Home
          </button>
        </form>
      )}
    </div>
  );
};
