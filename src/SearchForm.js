import React, { Component } from "react";
import DataAction from './actions/DataAction';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = { textSearch: '' }
    }

    onSubmitHandle = (e) => {
        e.preventDefault();
        DataAction.searchData(this.state.textSearch);
    }

    onChangeHandle = (e) => {
        this.setState({ textSearch: e.target.value });
    }

    render() {
        return (
            <div className="search-form">
                <h2 className="text-center">Demo - Search data via API</h2>
                <form onSubmit={this.onSubmitHandle}>
                    <div className="form-group">
                        <input type="number" onChange={this.onChangeHandle} className="form-control" placeholder="input number: 1, 2, 3,..." />
                    </div>
                    <button className="btn btn-primary">search</button>
                </form>
            </div>
        );
    }
}

export default SearchForm;