import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

interface CreatePostData {
    title: string;
    description: string;
}

export const CreateForm = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const schema = yup.object().shape({
        title: yup.string().required("Title for post is required"),
        description: yup.string().required("Description is neccessary"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreatePostData>({
        resolver: yupResolver(schema),
    });

    const postRef = collection(db, "0408");
    const onCreatePost = async (data: CreatePostData) => {
        // console.log(data);
        await addDoc(postRef, {
            ...data,
            // title: data.title,
            // description: data.description,
            user: user?.displayName,
            user_id: user?.uid,
        });
        navigate("/");
    };

    return (
        <form onSubmit={handleSubmit(onCreatePost)}>
            <input type="text" placeholder="Title..." {...register("title")} />
            <p style={{ color: "red" }}>{errors.title?.message}</p>
            <textarea
                placeholder="Description..."
                {...register("description")}
            />
            <p style={{ color: "red" }}>{errors.description?.message}</p>
            <input type="submit" />
        </form>
    );
};
