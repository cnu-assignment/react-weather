import React from 'react';


//const API_CITIES ='http://api.openweathermap.org/data/2.5/weather?q={cityName}&APPID={apiKey}';

const API_CITIES = 'http://localhost:8080/weather-crawler/available-cities'; //weather 할때 썼던 주소
//const API_CITIES = '';

class Weather extends React.Component {
    state = {
        cities : null
    };

    async componentDidMount(){

        const city_list = await fetch(API_CITIES)
            .then(res => res.json())
            .then(data => data);

        console.log(city_list);

        this.setState({
            cities: city_list
        });
//        console.log('CDM!! ');
//
//        console.log(this.state.foo);
//
//        this.setState({
//            foo: 'HELLO WORLD'
//        });
//
//        console.log(this.state.foo);
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
                        return <li key= {item}>{item}</li>;
                     })}
                </ul>
            </div>
        );

    }
}

export default Weather;
