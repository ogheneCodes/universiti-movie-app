import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player";
import '../CSS/MAIN_STYLES/main.css'
import { Link } from "react-router-dom";
const MovieDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [videos, setVideos] = React.useState([]);
  const [poster, setPoster] = React.useState("");
  const API_KEY = "e7869564c036947eb86f5687a39e7af7";

  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;

  // Algorithm to process Video URL
  const getVideoUrl = (site, key) => {
    switch (site) {
      case "YouTube":
        return `https://www.youtube.com/watch?v=${key}`;
      case "vimeo":
        return `https://vimeo.com/${key}`;
      default:
        return `https://www.youtube.com/watch?v=${key}`;
    }
  };

  // Fetch Movies
  const fetchMovies = async () => {
    try {
      const res = await axios.get(URL);
      console.log(res.data);
      setVideos(res.data.videos.results);
      setPoster(res.data.poster_path);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div className='movie-detail-container'>
    <Link to='/Main'><h1>Go Back</h1></Link>
      <div className="movie-container">
        <img src={"https://image.tmdb.org/t/p/w500" + poster} />
      </div>

      <section>
        {videos &&
          videos.map((video, index) => {
            return (
              <>
                <div className="video-player">
                  <ReactPlayer className="react-player" controls url={getVideoUrl(video.site, video.key)} />
                </div>
              </>
            );
          })}
      </section>
    </div>
  );
};

export default MovieDetail;
