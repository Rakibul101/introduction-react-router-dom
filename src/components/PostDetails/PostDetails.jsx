import { useLoaderData } from "react-router-dom";

const PostDetails = () => {

    const post = useLoaderData();
    const {title, body} = post;
    return (
        <div>
            <h2>Title: {title}</h2>
            <p>Description: {body}</p>
        </div>
    );
};

export default PostDetails;