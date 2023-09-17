import { addDoc, getDocs, collection, query, where } from "firebase/firestore";
import { Post as ps } from "./main";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
interface Props {
    post: ps;
}
interface Like {
    userID: string;
}

export const Post = (props: Props) => {
    const [likes, setLikes] = useState<Like[] | null>(null);
    const [user] = useAuthState(auth);
    const { post } = props;
    const likesRef = collection(db, "likes");
    const likesDoc = query(likesRef, where("postId", "==", post.id));

    const addLike = async () => {
        // console.log(data);
        await addDoc(likesRef, {
            userID: user?.uid,
            postId: post.id,
        });
    };

    const getLikes = async () => {
        const data = await getDocs(likesDoc);
        setLikes(data.docs.map((doc) => ({ userID: doc.data().userID })));
    };
    useEffect(() => {
        getLikes();
    }, []);

    const hasUserLiked = likes?.find((like) => like.userID == user?.uid);

    return (
        <>
            <div className="title">
                <h3>{post.title}</h3>
            </div>
            <div className="desc">
                <p>{post.description}</p>
            </div>
            <div className="footer">
                <p>@{post.user}</p>
                <button onClick={addLike}>
                    {hasUserLiked ? <>&#128078;</> : <>&#128077;</>}
                </button>
                {likes && <p>Likes :{likes.length}</p>}
            </div>
        </>
    );
};
