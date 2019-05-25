import React from 'react';



//const API_CITIES ='http://api.openweathermap.org/data/2.5/weather?q={cityName}&APPID={apiKey}';

const API_WEATHER = 'http://localhost:8080/weather-crawler/current-weathers/by-city-name';


//const API_CITIES = '';

class Info extends React.Component {
    state = {
        weather : null
    };

    async componentDidMount(){
        let cityId = this.props.city;
        const api = `${API_WEATHER}/${cityId}`;
        console.log(api);

        const weather = await fetch(api)
            .then(res => res.json())
            .then(data => data);

        this.setState({
            weather
        });

    }

    render(){
        const { cityId } = this.props.city;
        const { weather } = this.state;

        if (!weather) {
            return <div>Loading...</div>;
        }

        const celsius = (weather.main.temp - 273.15).toFixed(2); // kelvin to celsius
        const weatherMain = weather.weather[0].main;

        return (
            <div className="weather-today">
                <h2 className="weather-city">{cityId}</h2>
                <div className="weather-today-meta">
                    <h3 className="weather-main">{weatherMain}</h3>
                    <div className="weather-temp">{celsius}°</div>
                </div>
                </div>

        );


    }
}

export default Info;
