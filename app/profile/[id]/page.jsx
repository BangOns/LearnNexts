"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@/components/Profile";
import ProfileUser from "@/components/ProfileUser";
export default function MyProfile({ params }) {
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function FetchData() {
      const response = await fetch(`api/users/${params.id}/posts`);
      const data = await response.json();
      console.log(data);
      setPost(data);
    }
    FetchData();
  }, []);
  return (
    <ProfileUser
      name="my"
      description="welcome to your'e profile page"
      data={post}
    />
  );
}
