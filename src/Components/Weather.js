import React from 'react';

class Weather extends React.Component {
    render() {      
        return (
            <div className='col-md-8 col-xs-12 table-responsive'>
                <table className='table table-striped table-hover table-bordered'>
                    <thead>
                        {this.props.city && <tr><th>Forecast for city</th><th>{this.props.city}</th></tr>}
                   </thead>
                    <tbody>
                        {this.props.city && <tr><td>City</td><td>{this.props.city}</td></tr>}
                        {this.props.country && <tr><td>Country</td><td>{this.props.country}</td></tr>}
                        {this.props.temperature && <tr><td>Temperature</td><td>{this.props.temperature}</td></tr>}
                        {this.props.humidity && <tr><td>Humidity</td><td>{this.props.humidity}</td></tr>}
                        {this.props.description && <tr><td>Description</td><td>{this.props.description}</td></tr>}
                        {this.props.error && <tr><td>Error</td><td>{this.props.error}</td></tr>}
                        </tbody>
                    </table>
            </div>
        );

    }
}
export default Weather;