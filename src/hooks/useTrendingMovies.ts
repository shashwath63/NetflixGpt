import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";
const useTrendingMovies = async () => {
    const dispatch = useDispatch();
    const getTrendingMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/top_rated?page=1",
            API_OPTIONS,
        );
        const json = await data.json();
        dispatch(addTrendingMovies(json.results));
    }

    useEffect(() => {
        getTrendingMovies();
    }, []);
};

export default useTrendingMovies;
