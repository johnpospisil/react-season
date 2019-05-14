import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props); // needed for every constructor
    this.state = { lat: null }; // initially set latitude to 'null'. Can only use '=' to initially 
                                // set state in constructors.
  }

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

  // Conditional Rendering - return different JSX depending on the state or props of our components.
  render() {
    // If there is an error and no latitude, return the errorMessage
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    // If there is no error and there is latitude, show the latitude
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>
    }

    // Otherwise, show 'Loading...'
    return <div>Loading...</div>
    
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);