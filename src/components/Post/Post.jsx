import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Post = ({post}) => {
    const {id, title, body, userId} = post;
    const postStyle = {
        border: "1px solid green",
        padding: "10px",
        borderRadius: "15px"
    }
    return (
        <div style={postStyle}>
            <h2>Title: {title}</h2>
            <p>Description: {body}</p>
            <Link to={`/post/${id}`}>Show Details</Link>
        </div>
    );
};
Post.propTypes = {
    post: PropTypes.object
}
export default Post;