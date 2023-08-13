import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import PromptCards from "./PromptCards";

function PromptCardList({ data, handleTagClick, handleEdit, handleDelete }) {
  return (
    <div className="mt-10 prompt_layout">
      {data.map((post) => (
        <PromptCards
          key={post._id}
          post={post}
          handleEdit={() => handleEdit && handleEdit(post)}
          handleDelete={() => handleDelete && handleDelete(post)}
        />
      ))}
    </div>
  );
}

export default function Profile({
  name,
  handleEdit,
  description,
  data,
  handleDelete,
}) {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{description}</p>
      <PromptCardList
        data={data}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </section>
  );
}
