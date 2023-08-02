"use client";
import React, { useState } from "react";
import SectionCariOrang from "./SectionCariOrang";
export default function CariOrang() {
  const [Nama, setGetNama] = useState("");
  function getData(e) {
    e.preventDefault();
    setGetNama(e.target[0].value);
  }
  return (
    <div>
      <form onSubmit={getData}>
        <input type="text" placeholder="Sebut nama" />
        <button type="submit">Cari orang</button>
      </form>

      {Nama && <SectionCariOrang query={Nama} />}
    </div>
  );
}
