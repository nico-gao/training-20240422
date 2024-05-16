import { Component } from "react";

/* 
react syntax
class component
    traditional:
    deprecated(almost), still supported
    lifecycle method:


functional component 
    Feb 2019, v16.8, hooks(state lifecycle)
    popular: simpler code


class is blueprint of instance

state is immutable: every time you need to update the state, you create a new reference

Cannot read properties of undefined (reading 'setState'):
    cannot read something(property) from something that is undefined


mutate: update value for the same reference
assignment

this:
    function: refer to the object that invokes it
    arrow function: be the same reference as the 'this' from its outer function scope
*/

/* let a = {b:1};
//a.b = 2;

const b = {...a, b:2};
console.log(a.b);


lifecycle component:
    mounting: first render cycle
        constructor: 
            no dom rendered, 
            state initialize
        render: 
            no dom rendered, 
            state initialize
        componentDidMount: 
            dom rendered, 
            state initialize
    updating: render triggered by something(state, props, ....)
        shouldComponentUpdate: 
            dom not updated, 
            state not updated
        render: 
            dom not updated, 
            state updated
        componentDidUpdate: 
            dom updated, 
            state updated
    unmounting: component is removed/destroyed 
        componentWillUnmount
 */

class Counter extends Component {
    //state = { counter: 1 };//syntatic sugar

    counter = 1;
    constructor(props) {
        super(props);
        this.state = {
            counter: 1,
        };

        const counterEl = document.querySelector("#counter");
        console.log("from constructor!", counterEl, this.state);
        // this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const counterEl = document.querySelector("#counter");

        console.log("from componentDidMount!", counterEl, this.state);
    }

    componentDidUpdate() {
        const counterValue =
            document.querySelector("#counter-value").textContent;

        console.log("from componentDidUpdate!", counterValue, this.state);
    }
    shouldComponentUpdate() {
        const counterValue =
            document.querySelector("#counter-value").textContent;
        console.log("shouldComponentUpdate", counterValue, this.state);
        return true;
    }

    componentWillUnmount() {
        console.log("from componentWillUnmount!");
    }

    handleClick = () => {
        //this.state.counter += 1 //mutation, not allowed
        //async
        this.setState({ counter: this.state.counter + 1 });
        //console.log(this.state.counter); //
    };

    render() {
        const counterValue =
            document.querySelector("#counter-value")?.textContent;
        console.log("from render", counterValue, this.state);
        return (
            <div style={{ margin: "50px" }} id="counter">
                <div id="counter-value">{this.state.counter}</div>
                <div>
                    <button onClick={this.handleClick}>increment</button>
                </div>
            </div>
        );
    }
}

export default Counter;

//scope: function, block

/* console.log(this)

const a = {
    b: 1,
    c: () => {
        console.log("Test1", this);
    },
};

const d = { b: 2 };
d.c = a.c;
console.log(a.c());
//console.log(b.c()); */

/* this
const a = {
    b: 1,
    c: () => {
     this
        const d = () => {
            console.log(this.b)
        }
        d()
    },
}

console.log("test1", a.c()) */

class b {
    constructor() {
        this.d = 1;

        //this.c = this.c.bind(this);
    }
    c = () => {
        console.log("test1", this.d);
    };
}

const bb = new b();

//console.log(bb.c());
