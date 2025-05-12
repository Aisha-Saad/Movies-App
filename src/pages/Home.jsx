// import React from "react";
// import MovieCard from "../commponents/MovieCard";

// const Home = () => {
//   const movies = [
//     { id: 1, title: "poor things", release_date: "2023" },
//     { id: 2, title: "You", release_date: "2014" },
//     { id: 3, title: "young woman and the sea", release_date: "2024" },
//     { id: 4, title: "The making of lady", release_date: "2020" },
//   ];

//   const handelSubmit =()=>{

//   }
//   return (
//     <>
//     <div className="home">
//       <form onSubmit={handelSubmit} className="">
//         <input type="text"
//         placeholder="search for movies"
//         className="search-input"

//         />
//         <button type="submit">search</button>
//       </form>
//     </div>
//       <div className="movies-grid">
//         {movies.map((movie) => (
//           <MovieCard movie={movie.title} key={movie.id} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default Home;

import React, { useState } from "react";
import MovieCard from "../commponents/MovieCard";

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
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </>
  );
};

export default Home;
