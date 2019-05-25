import React from 'react';
import { Link } from 'react-router-dom';
import Info from './Info';

const API_CITIES = 'http://localhost:8080/weather-crawler/available-cities'; //weather 할때 썼던 주소

let value = '0';
class Weather extends React.Component {
    state = {
        cities : null,
    };

    async componentDidMount(){

        const city_list = await fetch(API_CITIES)
            .then(res => res.json())
            .then(data => data);


        this.setState({
            cities: city_list
        });
    }

    NumberDescriber({item}) {
        console.log("this");
        if (value === '0') return (<Info city={item}/>);
    }
    handleClick(hell) {
        console.log(hell);
    }
    render(){
        const {cities} = this.state;

        if(!cities){
            return (<div>Loading...</div>);
        }
        return (
            <div>

                <ul>
                    {cities.map(item =>{
                        return <ul key= {item}>
                            <li><button onClick={ this.handleClick.bind("hell") }>
                                {item}
                            </button>
                            </li>
                            <div>
                                {
                                    this.NumberDescriber({item})
                                }
                            </div>
                        </ul>;

                     })}
                </ul>

            </div>
        );

    }
}
class info extends React.Component {

}
export default Weather;
