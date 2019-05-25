import React from 'react';
import {Route} from 'react-router-dom';
import Header from './Header';
import Weather from './Component/Weather';
import Info from './Component/Weather/Info';

const About = () => <div>About</div>


const RouterApp = () => {
    const city = 'Daejeon';

    return(

        <div className = "App">
           <Header city = {city}/>
           <Route exact path="/" component={Weather} />
           <Route path="/info" component={Info} />

        </div>
    );
};

export default RouterApp;

