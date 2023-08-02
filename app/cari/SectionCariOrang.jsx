import React from "react";
import useSwr from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());
export default function SectionCariOrang({ query }) {
  const { data, error, isLoading } = useSwr(
    `https://api.github.com/search/users?q=${query}`,
    fetcher
  );
  return (
    <div>
      <p>Nama Yang Di cari : {query}</p>
      <ul>
        {!isLoading
          ? data.items.map((value, index) => {
              return <li key={index}>{value.login}</li>;
            })
          : "Loading ..."}
      </ul>
    </div>
  );
}
