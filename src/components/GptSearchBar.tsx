import { useSelector } from "react-redux";
import { lang } from "../utils/languageConstant";

const GptSearchBar = () => {
    const selectedLang = useSelector((store: any) => store.config.lang) as "en" | "hi" | "spanish";

    return (
        <div className="pt-32 flex justify-center">
            <form className='w-1/2 p-6 bg-black grid grid-cols-12'>
                <input type="text" placeholder={lang[selectedLang].gptSearchPlaceHolder} className='p-2 m-2 bg-white col-span-9'/>
                <button className='p-2 m-2 bg-red-500 rounded-lg col-span-3'>{lang[selectedLang].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar

