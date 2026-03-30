import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Header = () => {
    const navigate = useNavigate();
    const userSelector = useSelector((store: any) => store.user);
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className="absolute w-full z-20 bg-gradient-to-b from-black to-transparent flex justify-between">
            <img
                src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-03-25/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="logo"
                className="w-48"
            />
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
