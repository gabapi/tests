import React from 'react';
import Header from './Components/Header';
import Form from './Components/Forms';
import Weather from './Components/Weather';
const API_KEY = "bbdb11a7359e8238b084e4cf0ce219f0";


class App extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: undefined
        }
    }
   
    
    getWeather = async function(e){            
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

        if (city && country) {
            const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
            const data = await api_call.json();

            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: undefined
            });
        } else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please enter the value"
            });
        }
    }

    render() {       
        const { temperature, city, country, humidity, description, error } = this.state;        
        return (
            <div className='container'>
                <div className='row'>
                    <div className='panel panel-primary'>
                        <div className='panel-heading'>
                            <Header />
                        </div>
                        <div className='panel-body'>
                            <div className='col-md-6 col-xs-12'>
                                <Form getWeather={this.getWeather.bind(this)} />
                            </div>
                            <div className='col-md-6 col-xs-12'>
                                 <Weather temperature={temperature} city={city} country={country} humidity={humidity} description={description} error={error} />
                            </div>
                            </div>
                        <div className='panel-footer'>
                            &copy;Gabriel
                        </div>
                        </div>
                    </div>
             </div>
           );
    }
};
export default App;