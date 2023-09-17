import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();
    const signIn = async () => {
        const result = await signInWithPopup(auth, provider);
        console.log(result);
        navigate("/");
    };
    return (
        <>
            <h2>Login Page</h2>
            <button className="login_button" onClick={signIn}>
                Sign In
            </button>
        </>
    );
};
