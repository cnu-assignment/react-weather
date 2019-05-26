import React from "react";
import { Link,NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () =>{
    return(
     <div className="nav-header">
         <span>
             <NavLink to="/">Home</NavLink>
         </span>
         <span>
            <Link to="/weather">Weather</Link>
         </span>
      </div>
    );
};

export default Navigation;
