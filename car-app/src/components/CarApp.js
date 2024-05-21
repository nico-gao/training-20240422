import React, { Component } from "react";
import TotalQuantity from "./TotalQuantity";
import Car from "./Car";

/* 
            A
       B         C
   D     E    F
        G

  D B E G: B,A   

  D B E G C: A


  
  
        CarApp
    Car        TotalQuantity
   SellButton        

   reduce unnecessary re-rendering: dom

    one way data flow: prop from parent to child
        props drilling(draw back): 
            in order pass prop/data to a descendent component, you have to pass it by all the descendent component between them
            cause: manage state in least common parent component
        state lifting: 
    from child to parent: callback

    shouldComponentUpdate:
        what: lifecycle method of react class component
        why: to decide whether to proceed/interrupt the render process
        how: by comparing old state/props with new state/props, conditionally returning boolean
    
    PureComponent:


    by default parent rendering will trigger child rendering


    toyota: dom render, render method: called
    ford: dom not render, render method: called
    mercedes: dom not render, render method: called
*/

export default class CarApp extends Component {
    /*   constructor(props) {
        super(props);
        this.state = {
            cars: [
                {
                    brand: "toyota",
                    number: 10,
                    id: 1,
                },
                {
                    brand: "ford",
                    number: 20,
                    id: 2,
                },
                {
                    brand: "mercedes",
                    number: 30,
                    id: 3,
                },
            ],
        };
    }
 */

    state = {
        cars: [
            {
                brand: "toyota",
                number: 10,
                id: 1,
            },
            {
                brand: "ford",
                number: 20,
                id: 2,
            },
            {
                brand: "mercedes",
                number: 30,
                id: 3,
            },
        ],
    };
    handleSellCar = (id) => {
        this.setState({
            cars: this.state.cars.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        number: item.number - 1,
                    };
                } else {
                    return item;
                }
            }),
        });

        console.log("state", this.state);
    };
    /* 
    shouldComponentUpdate(nextProps, nextState) {
        console.log("SCU", nextState, this.state);
        return true;
    } */

    render() {
        const totalQuantity = this.state.cars.reduce((acc, cur) => {
            return acc + cur.number;
        }, 0);

        return (
            <div className="car-app">
                <TotalQuantity totalQuantity={totalQuantity} />
                <div className="cars-container">
                    {this.state.cars.map((item) => (
                        <Car
                            key={item.id}
                            item={item}
                            handleSellCar={() => this.handleSellCar(item.id)}
                        />
                    ))}
                </div>
            </div>
        );
    }
    //create virtual dom(newer version) based the jsx
    //diffing (old)
    //reconciliation
    //componentDidUpdate
}
