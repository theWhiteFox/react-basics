// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
class App extends React.Component {
  constructor(props) {
    super(props);

    // only direct assignment to state
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // to update object called setstate
        this.setState({ lat: position.coords.latitude });
      },
      (err) => console.log(err)
    );
  }

  // React says we have to define render !!
  render() {
    return <div>Latitude: {this.state.lat} </div>;
  }
}

// Take the react component and display it
ReactDOM.render(<App />, document.querySelector('#root'));
