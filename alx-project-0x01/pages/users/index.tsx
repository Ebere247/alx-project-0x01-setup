// import React from "react";
// import UserCard from "@/components/common/UserCard";
// import { UserProps, UserData } from "@/interfaces";
// import Header from "@/components/layout/Header";

// interface UsersPageProps {
//   posts: UserProps[];
// }

// const Users: React.FC<UsersPageProps> = ({ posts }) => {
//   return (
//     <div>
//       <Header />
//       <div className="p-6 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//         {posts.map((user) => (
//           <UserCard key={user.id} {...user} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export async function getStaticProps() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const posts = await response.json(); // must be named `posts`

//   return {
//     props: {
//       posts,
//     },
//   };
// }

// export default Users;
// pages/users/index.tsx

import React, { useState } from "react";
import UserModal from "@/components/common/UserModal";
import { UserData } from "@/interfaces";

const UsersPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState<UserData[]>([]);

  const handleAddUser = (newUser: UserData) => {
    setUsers([...users, newUser]);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600"
      >
        Add User
      </button>

      {showModal && (
        <UserModal
          onClose={() => setShowModal(false)}
          onSubmit={handleAddUser}
        />
      )}

      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="border p-4 rounded">
            <h2 className="font-semibold">{user.name}</h2>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
