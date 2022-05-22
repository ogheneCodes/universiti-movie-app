import React from 'react'
import '../CSS/MAIN_STYLES/main.css'
import {Link} from 'react-router-dom'
function Card(movie) {

  
    let img_path="https://image.tmdb.org/t/p/w500";
  return (
    <>

    <div className="movie">

                <img src={img_path+movie.info.poster_path} className="poster" alt="img"/>
                
                <div className="movie-details">

                    <div className="box">
                        <h4 className="title">{movie.info.title}</h4>
                        <p className="rating">{movie.info.vote_average}</p>
                    </div>
                    <div className="overview">
                        <h1>overview</h1>
                        <div className='container_view'><Link to={`/movie/${movie.info.id}`} className='view'>View</Link></div>
                        {movie.info.overview}
                    </div>
                </div>
            </div>
    </>
  )
}

export default Card