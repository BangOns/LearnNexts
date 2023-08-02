"use client";
import React, { useEffect } from "react";

export default function Error({ error, reset }) {
  return (
    <div>
      <p>Error.. ada kesalahan pada page</p>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
}
