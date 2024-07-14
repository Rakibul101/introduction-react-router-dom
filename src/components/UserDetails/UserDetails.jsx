import { useLoaderData } from "react-router-dom";

const UserDetails = () => {

    const user = useLoaderData();
    const {name, website} = user;
    return (
        <div>
            <h2>User Details Page</h2>
            <h3>Name: {name}</h3>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;