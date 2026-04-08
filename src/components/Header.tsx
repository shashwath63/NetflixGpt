import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import { lang_options, LOGO } from "../utils/constant";
const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userSelector = useSelector((store: any) => store.user);
    const showGptSearch = useSelector((store: any) => store.gpt.isGptView);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {})
            .catch((error) => {
                console.log(error);
            });
    };
    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView());
    };

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeLanguage(e.target.value));
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(setUser({ uid, email, displayName, photoURL }));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });
        return () => unsubscribe();
    }, []);
    return (
        <div className="absolute w-full z-20 bg-gradient-to-b from-black to-transparent flex justify-between">
            <img src={LOGO} alt="logo" className="w-48 pl-10 pt-10" />
            {userSelector && (
                <div className="flex p-4 mx-2">
                    {showGptSearch && (
                        <select className="p-2 m-2 bg-gray-900 text-white rounded-lg" onChange={handleLanguageChange}>
                            {lang_options?.map((lang) => (
                                <option key={lang.value} value={lang.value}>
                                    {lang.label}
                                </option>
                            ))}
                        </select>
                    )}
                    <button
                        className="bg-white text-black rounded-lg mr-2 my-2 px-4 py-2 cursor-pointer"
                        onClick={handleGptSearchClick}
                    >
                        {showGptSearch ? "Home Page" : "Gpt search"}
                    </button>
                    <img src={userSelector?.photoURL} className="w-12 h-12 rounded-lg" />
                    <button
                        onClick={handleSignOut}
                        className="bg-red-500 text-white px-4 py-2 m-2 rounded-md cursor-pointer"
                    >
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;
