import React from "react";
import { useGlobalContext } from "../context/global";
import { Link } from "react-router-dom";

function Popular() {
  const { popularAnime, isSearch } = useGlobalContext();

  const conditionalRender = () => {
    if (!isSearch) {
      return popularAnime.map((anime) => {
        return (
          <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
            <img src={anime.images.jpg.large_image_url} alt=""></img>
          </Link>
        );
      });
    }
  };

  return (
    <div className="popular__box">
      <div className="popular-anime">{conditionalRender()}</div>
    </div>
  );
}

export default Popular;
