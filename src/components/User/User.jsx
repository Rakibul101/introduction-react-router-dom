import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const User = ({user}) => {
    const {id, name, username, email, website} = user;
    const userStyle = {
        border: '1px solid blue',
        padding: '5px',
        borderRadius: '15px'
    }
    return (
        <div style={userStyle}>
            <h2>Name: {name}</h2>
            <h3>User-Name: {username}</h3>
            <p>Email: {email}</p>
            <p>Website: {website}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};
User.propTypes = {
    user: PropTypes.object
}
export default User;
