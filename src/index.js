import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props); // needed for every constructor
    this.state = { lat: null }; // initially set latitude to 'null'
  }

  // react says that we have to define render!!!
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );
    return <div>Latitude: </div>;
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);