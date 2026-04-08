import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId: number) => {
    const movieTrailer = useSelector((store: any) => store.movies.trailerVideo);
    const dispatch = useDispatch();

    const fetchTrailer = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS);
        const json = await data.json();
        const filterData = json.results ? json.results.filter((video: any) => video.type === "Trailer") : [];
        const trailer = filterData.length ? filterData[0] : (json.results?.[0] || { key: "mLvZPSfjX_E", name: "Fallback" });
        dispatch(addTrailerVideo(trailer));
    };

    useEffect(() => {
        if (!movieTrailer) {
            fetchTrailer();
        }
    }, []);
}
export default useMovieTrailer;
