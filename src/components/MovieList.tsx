import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }: any) => {
    if (!movies) return null;

    return (
        <div className="px-6 text-white text-opacity-90">
            <h1 className="text-lg md:text-3xl py-5  mt-10 font-semibold">{title}</h1>
            <div className="flex overflow-x-scroll no-scrollbar pb-6 pt-2">
                <div className="flex">
                    {movies?.map((movie: any) => (
                        <MovieCard key={movie.id} poster_path={movie.poster_path} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
