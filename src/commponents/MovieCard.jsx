import React from 'react'


// const MovieCard = ({movie}) => {

//   const onFavriteClick=()=>{
//     alert ("hello !")

//   }


//   return (
//     <>
    
      
//     <div className="move-card">
//         <div className="movie-poster">
//           <img src={movie.url || "https://via.placeholder.com/200x300?text=No+Image"}  alt={movie.title} />
//           <div className="movie-overlay">
//             <button className='favorite-btn' onClick={onFavriteClick}>❤️</button>
//           </div>
//         </div>
//          <div className="movie-info">
//         <h3>{movie.title}</h3>
//         <p>{movie.release_date}</p>
//       </div>
//       </div>
    
//     </>
    
  
//   )
// }





const MovieCard = ({ movie }) => {
  const onFavoriteClick = () => {
    alert("Added to favorites!");
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={movie.url  }
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={onFavoriteClick}>
            ❤️
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;


// export default MovieCard