

import React, { useState } from "react";
import MovieCard from "../commponents/MovieCard";
import "../pages/style.css"

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(searchQuery);
    setSearchQuery("")
  };
  const allMovies = [
    {
      id: 1,
      title: "Poor Things",
      release_date: "2023",
      url: "",
    },
    {
      id: 2,
      title: "You",
      release_date: "2014",
      url: "",
    },
    {
      id: 3,
      title: "Young Woman and the Sea",
      release_date: "2024",
      url: "",
    },
    {
      id: 4,
      title: "The Making of Lady",
      release_date: "2020",
      url: "",
    },
  ];

  return (
    <>
      <div className="home">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search for movies"
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="movies-grid">
        {allMovies.map((movie) => (
          movie.title.toLocaleLowerCase().startsWith(searchQuery)&&
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </>
  );
};

export default Home;
