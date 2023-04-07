import React from "react";
import { useGlobalContext } from "../context/global";
import { Link } from "react-router-dom";

function Sidebar() {
  const { popularAnime } = useGlobalContext();

  const sorted = popularAnime?.sort((a, b) => {
    return b.score - a.score;
  });

  return (
    <aside className="sidebar">
      <h3 className="sidebar-title"> Top 5 popular anime</h3>
      <div className="sidebar-box">
        {sorted.slice(0, 5).map((anime) => {
          return (
            <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
              <div className="sidebar-img-box">
                <img src={anime.images.jpg.large_image_url}></img>
                <h5 className="top-title">{anime.title}</h5>
              </div>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}

export default Sidebar;
