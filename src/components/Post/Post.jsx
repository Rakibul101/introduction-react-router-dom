import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';



const Post = ({ post }) => {
    const { id, title, body, userId } = post;
    const navigate = useNavigate();
    const postStyle = {
        border: "1px solid green",
        padding: "10px",
        borderRadius: "15px"
    }
    const handleShowDetail = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div style={postStyle}>
            <h2>Title: {title}</h2>
            <p>Description: {body}</p>
            <Link to={`/post/${id}`}>Show Details</Link>
            <button onClick={handleShowDetail}>Click to see detail</button>
        </div>
    );
};
Post.propTypes = {
    post: PropTypes.object
}
export default Post;