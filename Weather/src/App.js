import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

//API Key from Open Weather Map
const API_KEY = "bc5756bb80c24f7913a18e786eb8c661";

//initialise component
class WeatherApp extends React.Component {
	//initialise a state to equal an object
	state = {
		temperature: undefined, 
		city: undefined,
		country: undefined,
		humidity: undefined,
		description: undefined,
		pressure: undefined,
		minTemp: undefined,
		maxTemp: undefined,
		error: undefined
	}

	//create own method
	getWeatherData = async (event) => {
		//this prevents submit button from submitting the form & reloading the page
		event.preventDefault();

		//targets the city property from API data
		const city = event.target.elements.city.value;
		//targets the country property from API data
		const country = event.target.elements.country.value;
		//create function that makes a call to fetch data
		const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country},uk&appid=${API_KEY}&units=metric`);
		//Converts data from API to json format that any programming language can understand
		const data = await api_call.json();
		
		if (city && country) {
			console.log(data);
			//set values of the states above
			this.setState({
			temperature: data.main.temp,
			city: data.name,
			country: data.sys.country,
			humidity: data.main.humidity,
			description: data.weather[0].description,
			pressure: data.main.pressure,
			temp_min: data.main.temp_min,
			temp_max: data.main.temp_max,
			error: ""
			});
		} else {
			//set values of the states above
			this.setState({
			temperature: undefined,
			city: undefined,
			country: undefined,
			humidity: undefined,
			description: undefined,
			pressure: undefined,
			temp_min: undefined,
			temp_max: undefined,
			error: "Please Enter a Value"
			});
		}
	}

	//render method will return jsx
	render() {
		return (
			<div>
				<div className="wrapper">
					<div className="main">
						<div className="container">
							<div className="row">
								<div className="col-xs-5 title-container">
									<Titles />
									</div>
										<div className="col-xs-7 form-container">
										<Form getWeatherData={this.getWeatherData}/>
										<Weather 
											temperature={this.state.temperature}
											city={this.state.city}
											country={this.state.country}
											humidity={this.state.humidity}
											description={this.state.description}
											pressure={this.state.pressure}
											temp_min={this.state.temp_min}
											temp_max={this.state.temp_max}
											error={this.state.error}
										/>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default WeatherApp;



