import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const Navbar = () => {
    const [user] = useAuthState(auth);
    const logOut = async () => { 
        await signOut(auth);
    };

    return (
        <div className="navbar">
            <div className="nav_items">
                <div>
                    <Link to="/" className="link">
                        Home
                    </Link>
                </div>
                <div>
                    {!user ? (
                        <Link to="/login" className="link">
                            Login
                        </Link>
                    ) : (
                        <Link to="/createpost" className="link">
                            Create Post
                        </Link>
                    )}
                </div>
            </div>
            {user && (
                <div className="user_profile">
                    <img className="profile_pic" src={user?.photoURL || ""} />
                    <p>{user?.displayName}</p>
                    <button className="logout_button" onClick={logOut}>
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    );
};
