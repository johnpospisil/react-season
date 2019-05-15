import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  // This sort of statement can be a good alternative to a constructor
  // if few variables need to be set.
  state = {lat: null, errorMessage: null};

  componentDidMount() {
    // console.log('My component was rendered to the screen.');
    window.navigator.geolocation.getCurrentPosition(
      // call 'setState' to update the state of the latitude
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
    
  }

  componentDidUpdate() {
    console.log('My component was just updated. It re-rendered!');
  }

  renderContent() {
    // If there is an error and no latitude, return the errorMessage
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    // If there is no error and there is latitude, show the latitude
    if (!this.state.errorMessage && this.state.lat) {
      // return <div>Latitude: {this.state.lat}</div>
      return <SeasonDisplay lat={this.state.lat} />
    }

    // Otherwise, show 'Loading...'
    return <Spinner message="If a pop-up appears, please ALLOW our location request..."/>; 
    
  }

  render() {
    return (
      <div style={{border: 'red solid 5px'}}>
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);