import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import MarginInfer from "./MarginInfer";

function AnimeItem() {
  const { id } = useParams();

  const [anime, setAnime] = React.useState({});

  const [characters, setCharacters] = React.useState([]);
  const [showMore, setShowMore] = React.useState(false);

  //destructer anime

  const {
    title,
    synopsis,
    trailer,
    duration,
    aired,
    season,
    images,
    rank,
    score,
    scored_by,
    popularity,
    status,
    rating,
    source,
  } = anime;

  //get anime based on id

  const getAnime = async (anime) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`);
    const data = await response.json();
    setAnime(data.data);
  };

  // get character

  const getCharacters = async (anime) => {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime/${anime}/characters`
    );
    const data = await response.json();
    setCharacters(data.data);
    console.log(data.data);
  };

  useEffect(() => {
    getAnime(id);
    getCharacters(id);
  }, []);

  return (
    <section className="anime-des">
      <MarginInfer />
      <div className="container">
        <div className="anime-item-box">
          <h1 className="anime-item-title">{title}</h1>
          <div className="details">
            <div className="detail">
              <div className="anime-image">
                <img
                  src={images?.jpg.large_image_url}
                  alt="Title-image of this anime"
                ></img>
              </div>
              <div className="anime-details">
                <p className="anime-details-info">
                  <span className="details-info-prev">Aired: </span>
                  <span>{aired?.string}</span>
                </p>
                <p className="anime-details-info">
                  <span className="details-info-prev">Rating: </span>
                  <span>{rating}</span>
                </p>
                <p className="anime-details-info">
                  <span className="details-info-prev">Rank: </span>
                  <span>{rank}</span>
                </p>
                <p className="anime-details-info">
                  <span className="details-info-prev">Scored by: </span>
                  <span>{score}</span>
                </p>
                <p className="anime-details-info">
                  <span className="details-info-prev">Popularity: </span>
                  <span>{popularity}</span>
                </p>
                <p className="anime-details-info">
                  <span className="details-info-prev">Status: </span>
                  <span>{status}</span>
                </p>
                <p className="anime-details-info">
                  <span className="details-info-prev">Source: </span>
                  <span>{source}</span>
                </p>
                <p className="anime-details-info">
                  <span className="details-info-prev">Season: </span>
                  <span>{season}</span>
                </p>
                <p className="anime-details-info">
                  <span className="details-info-prev">Duration: </span>
                  <span>{duration}</span>
                </p>
              </div>
            </div>
            <div className="descriptio-box">
              <h4 className="description-title">description</h4>
              <p className="description">
                {showMore ? synopsis : synopsis?.substring(0, 200) + "..."}
              </p>
              <button
                className="description-btn"
                onClick={() => {
                  setShowMore(!showMore);
                }}
              >
                {showMore ? "Close" : "reade more"}
              </button>
            </div>

            <div className="trailer">
              <h3 className="trailer-title">Trailer</h3>
              <div className="trailer-container">
                {trailer?.embed_url && (
                  <iframe
                    src={trailer?.embed_url}
                    title={title}
                    frameBorder="0"
                    allowFullScreen
                    width="100%"
                    height="300"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <MarginInfer />
    </section>
  );
}

export default AnimeItem;
