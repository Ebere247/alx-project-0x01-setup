// components/common/UserModal.tsx

import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    id: 1,
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    nestedField?: string,
    subField?: string
  ) => {
    const { name, value } = e.target;

    if (nestedField && subField) {
      setUser((prevUser) => ({
        ...prevUser,
        [nestedField]: {
          ...prevUser[nestedField as keyof UserData],
          [subField]: value,
        },
      }));
    } else {
      setUser((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-2xl overflow-y-auto max-h-[90vh]">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            placeholder="Username"
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="website"
            value={user.website}
            onChange={handleChange}
            placeholder="Website"
            className="w-full p-2 border rounded"
          />

          {/* Address fields */}
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              placeholder="Street"
              value={user.address.street}
              onChange={(e) => handleChange(e, "address", "street")}
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Suite"
              value={user.address.suite}
              onChange={(e) => handleChange(e, "address", "suite")}
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="City"
              value={user.address.city}
              onChange={(e) => handleChange(e, "address", "city")}
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Zipcode"
              value={user.address.zipcode}
              onChange={(e) => handleChange(e, "address", "zipcode")}
              className="p-2 border rounded"
            />
          </div>

          {/* Company fields */}
          <input
            type="text"
            placeholder="Company Name"
            value={user.company.name}
            onChange={(e) => handleChange(e, "company", "name")}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Catchphrase"
            value={user.company.catchPhrase}
            onChange={(e) => handleChange(e, "company", "catchPhrase")}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Business Strategy"
            value={user.company.bs}
            onChange={(e) => handleChange(e, "company", "bs")}
            className="w-full p-2 border rounded"
          />

          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
