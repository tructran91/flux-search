import React, { Component } from 'react';
import SearchForm from './SearchForm';
import DataItem from "./DataItem";
import DataStore from './stores/DataStore';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.getAppState();
  }

  getAppState() {
    return {
      data: DataStore.getDataResults()
    }
  }

  componentDidMount() {
    DataStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    DataStore.removeChangeListener(this.onChange);
  }

  onChange = () => {
    this.setState(this.getAppState);
  }

  render() {
    var dataResults = '';
    if (this.state.data == '') {
      dataResults = '';
    } else {
      dataResults = <DataItem data={this.state.data} />;
    }
    return (
      <div className="album py-5 bg-light">
        <div className="container">
          <SearchForm />
        </div>
        <div className="container">
          {dataResults}
        </div>
      </div>
    );
  }
}

export default App;