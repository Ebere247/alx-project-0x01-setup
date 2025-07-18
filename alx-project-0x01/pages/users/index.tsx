import React from "react";
import UserCard from "@/components/common/UserCard";
import { UserProps, UserData } from "@/interfaces";
import Header from "@/components/layout/Header";

interface UsersPageProps {
  posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  return (
    <div>
      <Header />
      <div className="p-6 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json(); // must be named `posts`

  return {
    props: {
      posts,
    },
  };
}

export default Users;
