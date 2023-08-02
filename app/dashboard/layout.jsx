import React from "react";

export default function Rootlayout({ children }) {
  return (
    <div>
      <p>Header Dashboard</p>
      {children}
      <p>Footer Dashboard</p>
    </div>
  );
}
