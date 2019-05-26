import React from 'react';
import {Link} from "react-router-dom";

const Home = props => {

    return (
        <div>
            <h1>Home</h1>
            <p>You can check Weather in -  <Link to="/weather">here</Link></p>

        </div>
    );
};

export default Home;
