import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const { authorizationToken } = useAuth();
  const getAllUsersData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/users", {
        methos: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();

      setUsers(data);
      console.log(`users ${data}`);
    } catch (error) {
      console.log(error);
    }
  };

  //deleate the user
  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data = await response.json();
      console.log(`users after delete: ${data}`);
      if (response.ok) {
        getAllUsersData();
        toast.success("User Delete Successful");
      } else {
        toast.error("Opps Try Again!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllUsersData();
  }, []);

  return (
    <section className="admin-section">
      <h1 className={"menu-header"}>Admin User Panel</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((curUser, index) => (
              <tr key={index}>
                <td>{curUser.username}</td>
                <td>{curUser.email}</td>
                <td>{curUser.phone}</td>
                <td>
                  <Link
                    to={`/admin/users/${curUser._id}/edit`}
                    className="update-button">
                    Update
                  </Link>
                </td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => deleteUser(curUser._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminUsers;
