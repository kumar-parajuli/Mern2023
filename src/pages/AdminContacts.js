import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const AdminContacts = () => {
  const [contactData, setContactData] = useState([]);
  const { authorizationToken } = useAuth();

  const getContactData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log("contact data:", data.contacts);
      if (response.ok) {
        console.log(response);
      }
      setContactData(data.contacts);
    } catch (error) {
      console.log(error);
    }
  };
  //delete the contactsusers
  const deleteContact = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/contacts/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      if (response.ok) {
        getContactData();
        toast.success("Contact Delete Successful");
      } else {
        toast.error("Opps Try Again!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getContactData();
  }, []);

  return (
    <section className="admin-section">
      <h1 className={"menu-header"}>Admin User Panel</h1>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>UserName</th>
              <th>Email</th>
              <th>Message</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(contactData) &&
              contactData.map((curConts, index) => (
                <tr key={index}>
                  <td>{curConts.username}</td>
                  <td>{curConts.email}</td>
                  <td>{curConts.message}</td>

                  <td>
                    <button
                      className="delete-button"
                      onClick={() => deleteContact(curConts._id)}>
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

export default AdminContacts;
