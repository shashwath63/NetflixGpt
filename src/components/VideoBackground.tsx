import React from "react";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import useMovieTrailer from "../hooks/useMovieTrailer";
const VideoBackground = ({ movieId }: { movieId: number }) => {
    useMovieTrailer(movieId);
    const trailerVideo = useSelector((store: any) => store.movies.trailerVideo);

    return (
        <div>
            <iframe
                className="w-screen aspect-video"
                src={"https://www.youtube.com/embed/" + "mLvZPSfjX_E" + "?&autoplay=1&mute=1"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
        </div>
    );
};

export default VideoBackground;
