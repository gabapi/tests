import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <div className='col-md-6 col-xs-6'>
                <form onSubmit={this.props.getWeather}>
                    <div className='form-group'>
                        <input type="text" className='form-control' name="city" placeholder="Enter city name" />
                    </div> 
                    <div className='form-group'>
                        <input type="text" className='form-control' name="country" placeholder="Enter country name" />
                    </div>
                    <button className='btn btn-primary pull-right'><span className="glyphicon glyphicon-search" aria-hidden="true"></span>&nbsp;Get Weather</button>
                    </form>
            </div>
            );

    }
}
export default Form;
