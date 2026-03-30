import Header from "./Header";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/Validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setUser } from "../utils/userSlice";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const name = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };
    const handleButtonClick = () => {
        const message = checkValidData(email.current?.value || "", password.current?.value || "");
        setErrorMessage(message);
        if (message) return;
        if (!isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current?.value || "", password.current?.value || "")
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current?.value || "",
                        photoURL: "https://avatars.githubusercontent.com/u/76518979?v=4",
                    })
                        .then(() => {
                            const { uid, email, displayName, photoURL } = auth.currentUser!;
                            dispatch(setUser({ uid, email, displayName, photoURL }));
                            navigate("/browse");
                        })
                        .catch((error) => {
                            setErrorMessage(error.message);
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " " + errorMessage);
                });
        } else {
            signInWithEmailAndPassword(auth, email.current?.value || "", password.current?.value || "")
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " " + errorMessage);
                });
        }
    };
    return (
        <div>
            <Header />
            <div className="absolute">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/8cc08720-ac1c-4364-bcbd-9495bf0308cd/web/IN-en-20260323-TRIFECTA-perspective_0b8c8e4e-71ee-48bd-8e16-da74f083a838_large.jpg"
                    alt="bg-img"
                    className="w-full h-full object-cover"
                />
            </div>
            <form
                action=""
                onSubmit={(e) => e.preventDefault()}
                className="absolute flex flex-col justify-center align-middle bg-black opacity-90 w-1/4  my-40 mx-auto right-0 left-0 rounded-md"
            >
                <h1 className="text-white text-2xl font-bold py-3 px-4">{isSignInForm ? "Sign In" : "Sign Up"} </h1>
                {!isSignInForm && (
                    <input
                        ref={name}
                        type="text"
                        placeholder="Name"
                        className="p-3 m-3 rounded-md text-white bg-gray-600"
                    />
                )}
                <input
                    ref={email}
                    type="email"
                    placeholder="Email or phone number"
                    className="p-3 m-3 rounded-md text-white bg-gray-600"
                />
                <input
                    type="password"
                    ref={password}
                    placeholder="Password"
                    className="p-3 m-3 rounded-md text-white bg-gray-600"
                />
                <p className="text-red-600 py-2 px-4">{errorMessage}</p>
                <button className="p-3 m-3 bg-red-500 rounded-md cursor-pointer" onClick={handleButtonClick}>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className="text-white py-4 cursor-pointer p-5" onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix? Sign Up" : "Already have an account? Sign In"}
                </p>
            </form>
        </div>
    );
};

export default Login;
