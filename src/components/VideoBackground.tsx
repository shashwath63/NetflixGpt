import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }: { movieId: number }) => {
    useMovieTrailer(movieId);
    const trailerVideo = useSelector((store: any) => store.movies.trailerVideo);

    return (
        <div>
            <iframe
                className="w-screen aspect-video pointer-events-none"
                src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1&controls=0&showinfo=0"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
        </div>
    );
};

export default VideoBackground;
