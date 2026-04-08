import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { LOGIN_BG_IMG } from "../utils/constant";
const GptSearch = () => {
    return (
        <div>
            <div className="-z-10 absolute">
                <img src={LOGIN_BG_IMG} alt="bg-img" className="w-full h-full object-cover" />
            </div>
            <GptSearchBar />
            <GptMovieSuggestion />
        </div>
    );
};

export default GptSearch;
