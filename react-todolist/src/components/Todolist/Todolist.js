import React, { Component } from "react";
import "./todolist.css";
/* 
    1. input(two way data binding, controlled component) submit
    2. list of todo items


    two way data binding: value, event

    list rendering: 
        Array.map, return jsx for each item in the callback
        each returned jsx should have key props(unique)


    dom(document object model): data structure of how browser represent the view
    virtual dom: data structure of how react represent dom
    diffing algorithm

*/

let counter = 2;
export default class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            todolist: [
                { id: 1, content: "eat breakfast" },
                { id: 2, content: "eat lunch" },
            ],
        };
    }

    handleSubmit = () => {
        //1. create todo item object
        const newItem = {
            content: this.state.input,
            id: ++counter, //assignment, increment
        };
        //2. push to the todolist state

        //this.state.todolist.push(newItem);//no mutation
        this.setState({
            todolist: [newItem, ...this.state.todolist],
        });
    };

    handleDelete = (indexToDelete) => {
        //splice
        //this.state.todolist.splice(index, 1); //
        this.setState({
            todolist: this.state.todolist.filter((item, index) => {
                return index !== indexToDelete;
            }),
        });
    };

    render() {
        return (
            <div className="todo-container">
                <div className="form-container">
                    <input
                        value={this.state.input}
                        onChange={(event) => {
                            this.setState({ input: event.target.value });
                        }}
                    />
                    <button onClick={this.handleSubmit}>submit</button>
                </div>

                <div className="list-container">
                    <ul>
                        {this.state.todolist.map((item, index) => {
                            return (
                                <li key={item.id}>
                                    <span>{item.content}</span>
                                    <button
                                        onClick={() => {
                                            this.handleDelete(index);
                                        }}
                                    >
                                        delete
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}
