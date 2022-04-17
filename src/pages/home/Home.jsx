import { useEffect, useState } from "react";
import Repos from "../../components/repos/Repos";

import "./home.css";

export default function Home() {
  const [repos, setRepos] = useState([]);
  const [sort, setSort] = useState("");
  const [query, setQuery] = useState("");
  const handleSort = async (e) => {
    let value = e.target.value;
    setSort(value);
    fetch(
      `https://api.github.com/search/repositories?q=language:Javascript&sort=stars&order=desc?_sort=${value}&_order=asc`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setRepos(result.items);
        },

        (error) => {}
      );
  };
  useEffect(() => {
    let mounted = true;
    fetch(
      `https://api.github.com/search/repositories?q=language:Javascript&sort=stars&order=desc`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          if (mounted) {
            setRepos(result.items);
          }
        },

        (error) => {}
      );
    return () => (mounted = false);
  }, []);
  console.log(repos);
  const search = (data) => {
    return data.filter(
      (item) =>
        item.full_name.toLowerCase().includes(query) ||
        item.language.toLowerCase().includes(query)
    );
  };
  return (
    <div className="home">
      <div className="searchmain">
        <input
          type="text"
          placeholder="Search"
          className="search"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div>
        <span>Sort: </span>
        <select value={sort} onChange={handleSort} name="" id="">
          <option disabled={true} value="sort">
            Sort
          </option>
          <option value="stargazers_count">By Stars</option>
          <option value="full_name">By name</option>
        </select>{" "}
      </div>
      <div className="homeHead">Repositories</div>
      <div className="reposContainer">
        <Repos repos={search(repos)} />
      </div>
    </div>
  );
}
