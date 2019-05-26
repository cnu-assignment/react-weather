import React from 'react';

const API_WEATHER = 'http://localhost:8080/weather-crawler/current-weathers/by-city-name';

class NestedInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cityId:this.props.city,weather: null, celsius: null, weatherMain: null, iconId: null}
    }

    async componentDidMount(){
        let cityId = this.props.city;
        const api = `${API_WEATHER}/${cityId}`;

        let weather = await fetch(api)
            .then(res => res.json())
            .then(data => data);
        let celsius = (weather.main.temp - 273.15).toFixed(2);
        let weatherMain = weather.weather[0].main;
        let iconId = weather.weather[0].icon;

        this.setState({
            cityId,
            weather,
            celsius,
            weatherMain,
            iconId
        });

    }

    render(){
        let { weather, cityId, celsius, weatherMain, iconId } = this.state;


        if (!weather) {
            return <div>Loading...</div>;
        }
        console.log(celsius, cityId, iconId);

        if(cityId !== this.props.city) {
            this.componentDidMount();
        }
        return (

            <div className="weather-today">
                <h2 className="weather-city">{cityId}</h2>
                <div className="weather-today-meta">
                    <h3 className="weather-main">{weatherMain}</h3>
                    <div className="weather-temp">{celsius}°</div>
                    <i className="weather-icon">
                        <img src={`http://openweathermap.org/img/w/${iconId}.png`} alt="nothing"/>
                    </i>
                </div>
            </div>
        );
    }
}

export default NestedInfo;
