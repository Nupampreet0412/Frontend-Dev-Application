import logo from './logo.svg';
import React from "react";
import './App.css';
class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        items: [],
        DataisLoaded: false
    };
}

componentDidMount() {
    fetch(
"https://raw.githubusercontent.com/akshita151199/APIs/main/data")
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items: json,
                DataisLoaded: true
            });
        })
}
render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
        <h1> Pleses wait some time.... </h1> </div> ;

    return (
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
);
}
}

export default App;
