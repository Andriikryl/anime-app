import React from "react";
import { useGlobalContext } from "../context/global";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

function Popular({ rendered }) {
  const { popularAnime, isSearch, searchResults } = useGlobalContext();

  const conditionalRender = () => {
    if (!isSearch && rendered === "popular") {
      return popularAnime?.map((anime) => {
        return (
          <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
            <img src={anime.images.jpg.large_image_url} alt=""></img>
          </Link>
        );
      });
    } else {
      return searchResults?.map((anime) => {
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
      <Sidebar />
    </div>
  );
}

export default Popular;
