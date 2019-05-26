import React from 'react';
import {Route} from 'react-router-dom';
import Header from './Header';
import Weather from './Component/Weather';
import Home from './Component/Home'


const RouterApp = () => {
    // const city = 'Daejeon';

    return(

        <div className = "App">
           {/*<Header city = {city}/>*/}
           <Header/>
           <Route exact path="/" component={Home} />
           <Route path="/weather" component={Weather} />

        </div>
    );
};

export default RouterApp;

