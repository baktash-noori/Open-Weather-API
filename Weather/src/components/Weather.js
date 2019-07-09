import React from "react";

const Weather = props => (

	<div className="weather__info">
		{ 
		props.city && props.country && <p className ="weather__key"> Location: 
			<span className ="weather__value"> { props.city }, { props.country } </span>
		</p> 
		}

		{ 
		props.temperature && <p className ="weather__key"> Temperature:
			<span className ="weather__value"> {props.temperature} </span>
			<span className ="weather__suffix"> °C </span>
		</p> 
		}

		{ 
		props.humidity && <p className ="weather__key"> Humidity:
			<span className ="weather__value"> {props.humidity} </span> 
			<span className ="weather__suffix">% </span>
		</p> 
		}	

		{ 
		props.description && <p className ="weather__key"> Conditions:	
			<span className ="weather__value"> {props.description} </span>
		</p> 
		}

		{
		props.pressure && <p className ="weather__key"> Pressure: 
			<span className ="weather__value"> {props.pressure} </span>
		</p> 
		}

		{
		props.temp_min && <p className ="weather__key"> Min. Temperature:
			<span className ="weather__value"> {props.temp_min} </span> 
			<span className ="weather__suffix">°C </span>
		</p> 
		}

		{
		props.temp_max && <p className ="weather__key"> Max. Temperature:
			<span className ="weather__value"> {props.temp_max} </span>
			<span className ="weather__suffix">°C </span>
		</p> 
		}

		{ 
		props.error && <p className="weather__error"> {props.error} </p> 
		}
	</div>
);

export default Weather;