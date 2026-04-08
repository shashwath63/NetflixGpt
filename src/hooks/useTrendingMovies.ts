import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";
const useTrendingMovies = () => {
    const trendingMovies = useSelector((store: any) => store.movies.trendingMovies);
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
        !trendingMovies && getTrendingMovies();
    }, []);
};

export default useTrendingMovies;
