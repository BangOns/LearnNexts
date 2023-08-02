async function getDataRepos(params) {
  let res = await fetch(`https://api.github.com/search/users?q=${params}`);
  await new Promise((r) => setTimeout(r, 2000));
  return res.json();
}

async function GetRepostList({ slug }) {
  let Repos = await getDataRepos(slug);
  return (
    <div>
      <p>Detail Repo</p>
      {JSON.stringify(Repos)}
    </div>
  );
}
export default GetRepostList;
