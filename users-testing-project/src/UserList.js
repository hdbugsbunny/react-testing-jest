import React from "react";

function UserList({ users = [] }) {
  const renderedUsers = users.map((user) => (
    <tr key={user.userName}>
      <td>{user.userName}</td>
      <td>{user.userEmail}</td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>User Name</th>
          <th>User Email</th>
        </tr>
      </thead>
      <tbody data-testid="users">{renderedUsers}</tbody>
    </table>
  );
}

export default UserList;
