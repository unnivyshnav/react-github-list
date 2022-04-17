import "./repo.css";

export default function Repo({ repo }) {
  console.log(repo);
  return (
    <div className="repo">
      <div className="repoInfo">
        <img src={repo.owner.avatar_url} alt="" className="repoImg" />
        <span className="repoTitle">{repo.full_name}</span>
        <div className="repoDesc">{repo.description}</div>
        <div className="repoOwner">{repo.owner.login}</div>
        <div className="repoStarsCount">Stars : {repo.stargazers_count}</div>
        <div className="numberOfForks">Forks: {repo.forks_count}</div>
        <div className="language">Language : {repo.language}</div>
      </div>
    </div>
  );
}
