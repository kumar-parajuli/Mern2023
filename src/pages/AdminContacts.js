import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);
  const { authorizationToken } = useAuth();

  const getAllContactData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log(`contacts ${data}`);
      setContacts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllContactData();
  }, []);
  return (
    <>
      <h1>Admin contact pannel</h1>
      {contacts.map((curCon, index) => (
        <h2 key={index}>{curCon.username}</h2>
      ))}
    </>
  );
};

export default AdminContacts;
