import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props); // needed for every constructor
    this.state = { lat: null }; // initially set latitude to 'null'. Can only use '=' to initially 
    // set state in constructors.

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // call 'setState' to update the state of the latitude
        this.setState({ lat: position.coords.latitude });
      },
      (err) => console.log(err)
    );
  }

  // react says that we have to define render!!!
  render() {
    
    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);