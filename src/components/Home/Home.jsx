import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import { Audio } from 'react-loader-spinner';
const Home = () => {
    const navigation = useNavigation();
    console.log(navigation);
    return (
        <div>
            <h2>This is the home components</h2>
            <Header></Header>
            {
                navigation.state === "loading"? <p><Audio
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
              /></p>: 
                <Outlet></Outlet>
            }
            
        </div>
    );
};

export default Home;