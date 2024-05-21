import React, { Component, PureComponent } from "react";
import SellButton from "./SellButton";
import CarInfo from "./CarInfo";

export default class Car extends Component {
    /* shouldComponentUpdate(nextProps, nextState) {
        console.log(
            "SCU",
            this.props.item.brand,
            this.props.item.number,
            nextProps.item.number
        );
        if (this.props.item.number === nextProps.item.number) {
            return false;
        }

        return true;
    } */
    render() {
        const {
            item: { brand, number },
            handleSellCar,
        } = this.props;

        return (
            <div className="car">
                <CarInfo brand={brand} number={number} />
                <SellButton handleSellCar={handleSellCar} />
            </div>
        );
    }
}
