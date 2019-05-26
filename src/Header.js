import React from 'react';
import logo from './weather.png';
import Navigation from './Navigation';


const Header = props => {
    // const {city} = props;
    return (
        <div>
         <Navigation/>
        <header className="App-header">

                <img src={logo} className="App-logo" alt="logo" />


        </header>
        </div>
    );

};
export default Header;
