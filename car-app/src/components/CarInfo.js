import React, { Component, PureComponent } from "react";

const a = { name: "adam", cars: ["toyota", "ford"] };
const b = { name: "adam", cars: ["toyota", "ford"] };

/* const a = { name: "adam", age: 18 };
const b = { name: "adam", age: 18 }; */

export default class CarInfo extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        //PureComponent: shallow comparison of old/new state, old/new props
        //new nextState, old this.state
        nextState ??= {};
        this.state ??= {};
        nextProps ??= {};
        this.props ??= {};
        /*         const a = {toyota:1, honda:2};
        const b = {toyota:1, honda:2, ford:3}; */
        const isStateEqual = Object.keys(nextState).every(
            (key) => nextState[key] === this.state[key]
        );
        const isPropsEqual = Object.keys(nextProps).every(
            (key) => nextProps[key] === this.props[key]
        );
        if (isPropsEqual && isStateEqual) return false;
        return true;
    }
    render() {
        const { brand, number } = this.props;
        console.log(brand, "rendered");
        return (
            <div>
                <div>{brand}</div>
                <div>{number}</div>
            </div>
        );
    }
}
