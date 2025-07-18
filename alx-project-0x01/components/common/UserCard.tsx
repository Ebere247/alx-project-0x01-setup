// components/common/UserCard.tsx
import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  id,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <h2 className="text-xl font-bold">{name}</h2>
      <p>USERID:{id}</p>
      <p className="text-sm text-gray-600">@{username}</p>
      <p className="text-sm text-gray-700">📧 {email}</p>
      <p className="text-sm">
        🏠 {address.street}, {address.city}
      </p>
      <p className="text-sm">📞 {phone}</p>
      <p className="text-sm">🌐 {website}</p>
      <p className="text-sm mt-2 italic">Company: {company.name}</p>
    </div>
  );
};

export default UserCard;

// import { PostProps } from "@/interfaces";

// const PostCard: React.FC<PostProps> = ({ title, body, userId, id }) => {
//   return (
//     <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//       <div className="mb-4">
//         <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
//       </div>
//       <p className="text-gray-600">{body}</p>
//       <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
//         <span>User ID: {userId}</span>
//         <span>Post ID: {id}</span>
//       </div>
//     </div>
//   );
// };

// export default PostCard;
