import React from "react";
import Popular from "./Popular";
import { useGlobalContext } from "../context/global";

function HomePage() {
  const {
    handleChange,
    handleSubmin,
    searchAnime,
    search,
    getUpcomingAnime,
    getAiringAnime,
    getPopularAnime,
  } = useGlobalContext();

  const [rendered, setRendered] = React.useState("popular");

  const switchComponent = () => {
    switch (rendered) {
      case "popular":
        return <Popular rendered={rendered} />;
      default:
        return <Popular rendered={rendered} />;
    }
  };

  return (
    <div>
      <header>
        <div className="container">
          <div className="header-box">
            <div className="logo">
              <h1 className="header-title">
                {rendered === "popular"
                  ? "Popular anime"
                  : rendered === "airing"
                  ? "Airing anime"
                  : "Upcoming anime"}
              </h1>
            </div>
            <div className="search-container">
              <div className="filter-btn opular-filter">
                <button
                  onClick={() => {
                    setRendered("popular");
                  }}
                >
                  Popular
                </button>
              </div>
              <form className="asearch-form" onSubmit={handleSubmin}>
                <div className="input-contol">
                  <input
                    type="text"
                    placeholder="search anime"
                    value={search}
                    onChange={handleChange}
                  />
                  <button type="submit">search</button>
                </div>
              </form>
              <div className="filter-btn airing-filter">
                <button
                  onClick={() => {
                    setRendered("airing");
                    getAiringAnime();
                  }}
                >
                  Airing
                </button>
              </div>
              <div className="filter-btn upcoming-filter">
                <button
                  onClick={() => {
                    setRendered("upcoming");
                    getUpcomingAnime();
                  }}
                >
                  Upcoming
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      {switchComponent()}
    </div>
  );
}

export default HomePage;
