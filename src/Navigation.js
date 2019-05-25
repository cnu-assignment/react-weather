import React from "react";
import { Link,NavLink } from 'react-router-dom';

const Navigation = () =>{
    return(
     <div>
        <NavLink to="/">Home</NavLink>

        <Link to="/info" >Info</Link>
      </div>
    );
};

export default Navigation;
