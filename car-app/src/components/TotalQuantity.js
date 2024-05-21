import React, { Component } from "react";

export default class TotalQuantity extends Component {
    render() {
        const { totalQuantity } = this.props;
        return <div>TotalQuantity: {totalQuantity}</div>;
    }
}
