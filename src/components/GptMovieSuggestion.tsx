import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
    const { movieNames, movieResults } = useSelector((result: any) => result.gpt);
    if (!movieNames) return null;
    return (
        <div className="p-2 m-2 bg-black/90 text-white justify-center rounded-lg">
            {movieNames.map((movie: string, index: number) => (
                <MovieList key={movie} title={movie} movies={movieResults[index]} />
            ))}
        </div>
    );
};

export default GptMovieSuggestion;
