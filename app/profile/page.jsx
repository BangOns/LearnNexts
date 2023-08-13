"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@/components/Profile";
export default function MyProfile() {
  const { data: session } = useSession();
  const router = useRouter();
  const [post, setPost] = useState([]);
  function handleEdit(post) {
    router.push(`/update-prompt?id=${post._id}`);
  }

  async function handleDelete(post) {
    const hasConfirmed = confirm("Are you sure you want to delete this prompt");
    if (hasConfirmed) {
      try {
        await fetch(`api/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });
        const filterdPost = post.filter((value) => value._id !== post._id);
        setPost(filterdPost);
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    async function FetchData() {
      const response = await fetch(`api/users/${session?.user.id}/posts`);
      const data = await response.json();
      setPost(data);
    }
    FetchData();
  }, []);
  return (
    <Profile
      name="my"
      description="welcome to your'e profile page"
      data={post}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
}
