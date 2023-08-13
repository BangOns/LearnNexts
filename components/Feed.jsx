"use client";
import { useState, useEffect } from "react";

import PromptCards from "./PromptCards";

function PromptCardList({ data, handleTagClick }) {
  return (
    <div className="mt-16 propt_layout">
      {data.map((post) => (
        <PromptCards
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
}
export default function Feed() {
  const [searchText, setsearchText] = useState("");
  const [post, setPosts] = useState([]);
  const [filterPost, setFilterPost] = useState([]);
  function handleSearchText(e) {
    setFilterPost(
      post.filter((item) => {
        return (
          item.prompt.toLowerCase().includes(e.target.value) ||
          item.tag.toLowerCase().includes(e.target.value) ||
          item.creator.username.toLowerCase().includes(e.target.value)
        );
      })
    );
    setsearchText(e.target.value);
  }
  useEffect(() => {
    async function FetchData() {
      const response = await fetch("api/prompt");
      const data = await response.json();
      setPosts(data);
    }
    FetchData();
  }, []);
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          onChange={handleSearchText}
          placeholder="search tag"
          value={searchText}
          required
          className="search_input peer"
        />
      </form>
      <PromptCardList
        data={
          post
            ? searchText.length === 0
              ? post
              : filterPost.length !== 0
              ? filterPost
              : filterPost.length === 0 && filterPost
            : []
        }
        handleTagClick={() => {}}
      />
    </section>
  );
}
