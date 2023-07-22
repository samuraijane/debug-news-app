import React from "react";

const UserProfilePage = ({ name, email }) => {
  return (
    <div>
      <h1>User Profile</h1>
      <div>
        <h2>Name: {name}</h2>
        <h3>Email: {email}</h3>
        {/* Display other profile information */}
      </div>
    </div>
  );
};

export default UserProfilePage;
