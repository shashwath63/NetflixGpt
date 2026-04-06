import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";
const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userSelector = useSelector((store: any) => store.user);
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {})
            .catch((error) => {
                console.log(error);
            });
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
            <img src={LOGO} alt="logo" className="w-48" />
            {userSelector && (
                <div className="flex p-4">
                    <img src={userSelector?.photoURL} className="w-12 h-12 " />
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
