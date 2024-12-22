import React, { useState } from "react";
import UserModal from "@/components/common/UserModal";
import { UserData } from "@/interfaces";

const Users: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [userList, setUserList] = useState<UserData[]>([]);

  const handleAddUser = (newUser: UserData) => {
    const updatedUser: UserData = {
      ...newUser,
      id: userList.length + 1, // Generate ID dynamically
    };
    setUserList((prevList) => [...prevList, updatedUser]);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Users</h1>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Add User
      </button>

      {isModalOpen && (
        <UserModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddUser}
        />
      )}

      <ul className="mt-4">
        {userList.map((user) => (
          <li key={user.id} className="border p-2 rounded mb-2">
            <h2 className="text-lg font-bold">{user.name}</h2>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
