import { useDispatch, useSelector } from "react-redux";
import { lang } from "../utils/languageConstant";
import client from "../utils/openAi";
import { useRef } from "react";
import { API_OPTIONS } from "../utils/constant";
import { addGptMovieResult } from "../utils/gptSlice";
const GptSearchBar = () => {
    const selectedLang = useSelector((store: any) => store.config.lang) as "en" | "hi" | "spanish";
    const searchText = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    // Moved the query construction inside the handler so it captures the CURRENT value on click
    const handleGptSearchClick = async () => {
        const gptQuery =
            "Act as a movie recommendation system and recommend movies based on the following query: " +
            searchText.current?.value +
            ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Galipata, Kirik party, French Biryani, Humble Politician Nograj, Operation Alamelamma. Give the result in this way only and i only need the names in comma separted way not any other text except the movie names in comma sepated way.";

        const result = await client.chat.completions.create({
            model: "gpt-5.4-mini-2026-03-17",
            messages: [{ role: "user", content: gptQuery }],
        });
        const searchResult = result?.choices[0]?.message?.content?.split(",");
        const promiseArray = searchResult?.map((movie: string) => {
            return searchTmdbApi(movie);
        }) || [];
        const tmdbResults = await Promise.all(promiseArray);
        dispatch(addGptMovieResult({ movieNames: searchResult, movieResults: tmdbResults }));
    };

    const searchTmdbApi = async (movie: string) => {
        const res = await fetch(
            "https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1",
            API_OPTIONS,
        );
        const json = await res.json();
        return json.results;
    };
    return (
        <div className="pt-32 flex justify-center">
            <form className="w-1/2 p-6 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
                <input
                    ref={searchText}
                    type="text"
                    placeholder={lang[selectedLang].gptSearchPlaceHolder}
                    className="p-2 m-2 bg-white col-span-9"
                />
                <button
                    className="p-2 m-2 bg-red-500 rounded-lg col-span-3 cursor-pointer"
                    onClick={handleGptSearchClick}
                >
                    {lang[selectedLang].search}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;
