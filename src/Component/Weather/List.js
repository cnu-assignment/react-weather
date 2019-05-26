import React from 'react';
import { withRouter } from 'react-router';
import NestedInfo from './NestedInfo';

const List = props => {

    const { cities,  city, changeFromChild } = props;

    function hello(item) {
        changeFromChild(item)
    }
    return (
        <div className="weather-list">
            <div><NestedInfo city={city}/></div>
            <p className="weather-choose">Choose your city:</p>

            <span className="weather-cities">
                {cities.map(item => (
                    <span key={item}>
                        <button onClick={(e) => {e.preventDefault(); hello(item)}}>
                            {item}
                        </button>
                    </span>
                ))}
            </span>
        </div>
    );
};

export default withRouter(List);
