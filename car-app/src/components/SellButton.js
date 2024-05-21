import React, { Component } from "react";

export default class SellButton extends Component {
    render() {
        const { handleSellCar } = this.props;
        return <button onClick={handleSellCar}>Sell</button>;
    }
}
