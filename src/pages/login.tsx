import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const signIn = async () => {
        const result = signInWithPopup(auth, provider);
        console.log(result);
    };
    return (
        <>
            <div>Login Page</div>
            <p>Sign in with Google to continue</p>
            <button onClick={signIn}>Sign In</button>
        </>
    );
};
