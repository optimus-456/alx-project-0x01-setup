import React from "react";
import { UserProps } from "../../interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="border p-4 rounded shadow-md bg-white">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p className="text-gray-700">
        <strong>Username:</strong> {user.username}
      </p>
      <p className="text-gray-700">
        <strong>Email:</strong> {user.email}
      </p>
      <p className="text-gray-700">
        <strong>Address:</strong> {user.address.street}, {user.address.city}
      </p>
      <p className="text-gray-700">
        <strong>Phone:</strong> {user.phone}
      </p>
      <p className="text-gray-700">
        <strong>Website:</strong>{" "}
        <a
          href={`https://${user.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          {user.website}
        </a>
      </p>
      <p className="text-gray-700">
        <strong>Company:</strong> {user.company.name}
      </p>
    </div>
  );
};

export default UserCard;
