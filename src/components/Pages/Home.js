import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadusers();
  }, []);

  const loadusers = () => {
    // simple step but better to use the below one
    // const result = await axios.get("http://localhost:3004/users");
    // setUsers(result.data);

    axios
      .get("http://localhost:3004/users")
      .then((res) => {
        setloading(false);
        setUsers(res.data.reverse());
        setError("");
      })
      .catch((error) => {
        setloading(false);
        setUsers([]);
        setError("!!! Error Fetching data, Something Went Wrong !!!");
      });
  };

  const del = async (id) => {
    try {
      await axios.delete(`http://localhost:3004/users/${id}`);
      loadusers();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="ctable container">
      {error ? (
        error
      ) : loading ? (
        "The Data is Loading Bro"
      ) : (
        <table>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>website</th>
            <th>Action</th>
          </tr>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>
                  <Link className="button btnv" to={`/user/${user.id}`}>
                    View
                  </Link>
                  <Link className="button" to={`/user/edit/${user.id}`}>
                    Edit
                  </Link>
                  <Link className="button btnd" onClick={() => del(user.id)}>
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
