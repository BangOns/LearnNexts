import React, { Suspense } from "react";
import GetRepostList from "./SectionRepository";
async function getDataUsers(params) {
  let res = await fetch(`https://api.github.com/search/users?q=${params}`);
  return res.json();
}

//Sequantial fetching
// async function GetRepostList({ slug }) {
//   let Repos = await getDataRepos(slug);
//   return (
//     <div>
//       <p>Detail Repo</p>
//       {JSON.stringify(Repos)}
//     </div>
//   );
// }

export default async function DetailOrang({ params }) {
  let User = await getDataUsers(params.slug);
  // let Repos = await getDataRepos(slug); //paralel Fetch

  return (
    <div>
      <div>
        <p>DetailOrang : {params.slug}</p>
        {JSON.stringify(User)}
      </div>
      <br />
      {/* 
      Paralel Fetch
      <div>
      <p>Detail Repo</p>
      {JSON.stringify(Repos)}
    </div> */}

      {/* Sequantial fetching */}
      {/* <Suspense fallback={<div>Sedang di render...</div>}>
        <GetRepostList slug={params.slug} />
      </Suspense> */}

      {/* Block Fetching */}
      <Suspense fallback={<div>Sedang di render...</div>}>
        <GetRepostList slug={params.slug} />
      </Suspense>
    </div>
  );
}
