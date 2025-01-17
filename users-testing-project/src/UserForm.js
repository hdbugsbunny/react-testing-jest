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
        <label>User Name</label>
        <input
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>User Email</label>
        <input
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
