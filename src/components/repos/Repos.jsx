import Repo from "../repo/Repo";
import "./repos.css";

export default function Repos({ repos }) {
  const repoItems = repos;
  //   console.log(repoItems);
  return (
    <div className="repos">
      {repoItems?.map((r, key) => (
        <Repo key={key} repo={r} />
      ))}
    </div>
  );
}
