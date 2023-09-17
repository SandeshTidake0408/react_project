import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";
import { Post } from "./post";
export interface Post {
    id: string;
    user_id: string;
    description: string;
    user: string;
    title: string;
}
export const Main = () => {
    const postRef = collection(db, "0408");
    const [postList, setPostList] = useState<Post[] | null>(null);

    const getPost = async () => {
        const data = await getDocs(postRef);
        setPostList(
            data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]
        );
    };
    useEffect(() => {
        getPost();
    }, []);
    return (
        <>
            <h2>Home Page</h2>
            <div>
                {postList?.map((post) => (
                    <Post post={post} />
                ))}
            </div>
        </>
    );
};
