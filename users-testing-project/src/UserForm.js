import React, { useState } from "react";

function UserForm({ onUserAdd }) {
  const [formData, setFormData] = useState({ userName: "", userEmail: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onUserAdd(formData);
    setFormData({ userName: "", userEmail: "" });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="userName">User Name</label>
        <input
          id="userName"
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="userEmail">User Email</label>
        <input
          id="userEmail"
          type="email"
          name="userEmail"
          value={formData.userEmail}
          onChange={handleInputChange}
        />
      </div>
      <button>Add User</button>
    </form>
  );
}

export default UserForm;
