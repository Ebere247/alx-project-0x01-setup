import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p className="text-sm text-gray-600">@{user.username}</p>
      <p className="text-sm text-gray-700">📧 {user.email}</p>
      <p className="text-sm">
        🏠 {user.address.street}, {user.address.city}
      </p>
      <p className="text-sm">📞 {user.phone}</p>
      <p className="text-sm">🌐 {user.website}</p>
      <p className="text-sm mt-2 italic">Company: {user.company.name}</p>
    </div>
  );
};

export default UserCard;
