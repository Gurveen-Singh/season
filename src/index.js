import React from "react";
import ReactDom from "react-dom";
import SeasonDisplay from "./SeasonDisplaty";
import Spinner from "./Spinner";
class App extends React.Component {
  state = { lat: null, errMessage: "" };

  componentDidMount() {
    this.getPosition();
  }

  getPosition() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
        });
      },
      (err) => {
        this.setState({ errMessage: err.message });
      }
    );
  }

  getContent() {
    if (this.state.errMessage && !this.state.lat) {
      return <div>Error: {this.state.errMessage}</div>;
    }

    if (!this.state.errMessage && this.state.lat) {
      return <SeasonDisplay />;
    }

    return <Spinner message="Please! Accept the request" />;
  }

  render() {
    return <div>{this.getContent()}</div>;
  }
}
ReactDom.render(<App />, document.querySelector("#root"));
