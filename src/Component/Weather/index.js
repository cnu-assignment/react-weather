import React from 'react';
import { Switch, Route, withRouter } from 'react-router';
import List from './List';
import NestedInfo from './NestedInfo'
import './weather.css';


const API_CITIES = 'http://localhost:8080/weather-crawler/available-cities';

class Weather extends React.Component {

    constructor(props) {
        super(props);
        this.state = {cities: [], city:"Daejeon"}

    }

    async componentDidMount(e) {

        const cities = await fetch(API_CITIES)
            .then(res => res.json())
            .then(data => data);

        this.setState({
            cities
        });
    }


    changeFromChild(item) {
        console.log("this");
        this.setState(
            {city: item}
        )
    };

    render() {
        const { match } = this.props;
        const { cities } = this.state;
        const { city } = this.state;

        return (
            <div className="weather">
                <Switch>
                    <Route exact path={match.path} render={() => <List cities={cities} city={city} changeFromChild={this.changeFromChild.bind(this)}/>} />
                    <Route path={`${match.path}/:cityId`} component={NestedInfo} />
                </Switch>
            </div>
        );
    };
}

export default withRouter(Weather);
