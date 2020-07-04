import React, { Component } from "react";

class DataItem extends Component {
    render() {
        return (
            <div>
                <h4>Results:</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <p>{this.props.data.id} - {this.props.data.title}</p>
                    </li>
                </ul>
            </div>
        );
    }
}

export default DataItem;