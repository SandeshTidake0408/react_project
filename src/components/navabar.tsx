import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const Navbar = () => {
    const [user] = useAuthState(auth);

    return (
        <div className="navbar">
            <div className="nav_items">
                <div>
                    <Link to="/" className="link">
                        Home
                    </Link>
                </div>
                <div>
                    <Link to="/login" className="link">
                        Login
                    </Link>
                </div>
            </div>
            <div className="user_profile">
                <img className="profile_pic" src={user?.photoURL || ""} />
                <p>{user?.displayName}</p>
            </div>
        </div>
    );
};
