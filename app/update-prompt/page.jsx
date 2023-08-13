"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Form from "@/components/Form";
export default function UpdatePrompt() {
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");
  const router = useRouter();
  const [submitting, setsubmitting] = useState(false);
  async function UpdatePrompts(e) {
    e.preventDefault();
    setsubmitting(true);
    if (!promptId) return alert("Prompt Id Not a found");
    try {
      const response = await fetch(`api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setsubmitting(false);
    }
  }
  useEffect(() => {
    async function getParamsId() {
      const response = await fetch(`/api/prompt/${promptId}`);
      const data = await response.json();
      setPost({
        prompt: data.prompt,
        tag: data.tag,
      });
    }

    if (promptId) getParamsId();
  }, [promptId]);
  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={UpdatePrompts}
    />
  );
}
