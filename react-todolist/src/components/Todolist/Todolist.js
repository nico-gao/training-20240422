import React, { Component } from "react";
import "./todolist.css";
import {
    createTodo,
    deleteTodo,
    getTodos,
    updateTodo,
} from "../../APIs/todoAPIs";
/* 
    1. input(two way data binding, controlled component) submit
    2. list of todo items


    two way data binding: value, event

    list rendering: 
        Array.map, return jsx for each item in the callback
        each returned jsx should have key props(unique)


    dom(document object model): tree object, data structure of how browser represent the view


    virtual dom: tree object, simplified data structure of how react represent dom
        what: tree object, simplified representation of actual dom by react
        how: generated by jsx
        why: updating actual dom is computational costly, only updating the necessary part of it using vd, diffing, reconciliation
    diffing algorithm
        what: algorithm by react
        how: compare previous and current virtual and tell the difference from them
        why: updating actual dom is computational costly, only updating the necessary part of it using vd, diffing, reconciliation
: 

    mounting
        constructor
        render
            1. return jsx: represent virtual dom(tree object)
            2. create a new virtual dom with most recent state(counter: 2);
            3. react has the old copy of virtual dom, compare the two tree objects(new and old virtual dom) using diffing algorithm, 
                figure out the difference
            4. reconciliation: react apply the changes from diffing algorithm comparison to the actual dom(efficient)

        componentDidMount
    updating
        shouldComponentUpdate
        render
        componentDidUpdate



    unmounting:
        componentWillUnmount

*/

/* 
    const dom = {
        type:"div",
        children: [
            {
                type:"span",
                children:[
                    {
                        type:"text",
                        content:"adam"
                }
            ]
            },
            {}
        ]
    }

        div
    span  ... ...
  text:adam 
  
<div>
    <span>adam</span>
</div>

html: represents dom in prettier way

jsx: represents virtual dom in prettier way


*/

/* 
crud
    save:
    get:
    delete:
    create:

*/
export default class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            todolist: [],
            editId: null,
            editInput: null,
        };
    }

    async componentDidMount() {
        const data = await getTodos();
        console.log("data", data);
        this.setState({ todolist: data.reverse() });
    }

    handleSubmit = async () => {
        //1. create todo item object
        const newItem = {
            content: this.state.input,
        };
        //2. push to the todolist state
        try {
            const todoWithId = await createTodo(newItem);
            //this.state.todolist.push(newItem);//no mutation
            this.setState({
                todolist: [todoWithId, ...this.state.todolist],
            });
        } catch (err) {
            alert("failed to create todo!");
        }
    };

    handleDelete = async (indexToDelete) => {
        //splice
        //this.state.todolist.splice(index, 1); //
        try {
            const id = this.state.todolist[indexToDelete].id;
            await deleteTodo(id);
            this.setState({
                todolist: this.state.todolist.filter((item, index) => {
                    return index !== indexToDelete;
                }),
            });
        } catch (err) {
            alert("failed to delete todo!");
        }
    };

    handleEdit = async (id) => {
        if (this.state.editId === null) {
            this.setState({
                editId: id,
                editInput: this.state.todolist.find((item) => item.id === id)
                    .content,
            });
        } else {
            //save
            //this.state.todolist.find(item=>item.id === id).content = this.state.editInput; //wrong, mutating
            /* const newState = { ...this.state }; //shallow copy
            newState.todolist.find((item) => item.id === id).content =
                this.state.editInput; */ //wrong: mutating nested object/array
            //object(data structure) => json(string)
            //const newState = JSON.parse(JSON.stringify(this.state)); //not recommended, JSON.stringify,
            //manual copy: create new reference for all nested non-primitive data
            //Array.map create new array

            /* 
            //correct:
            const newState = {
                ...this.state,
                todolist: this.todolist.map((item) => {
                    return { ...item };
                }),
            };
            newState.todolist.find((item) => item.id === id).content =
                this.state.editInput;
            this.setState(newState); */

            //break down component and state into smaller one
            try {
                await updateTodo(id, { content: this.state.editInput });
                this.setState({
                    ...this.state,
                    editId: null,
                    editInput: null,
                    todolist: this.state.todolist.map((item) => {
                        if (item.id === id) {
                            return { ...item, content: this.state.editInput };
                        } else {
                            //return { ...item };//non primitive
                            return item;
                        }
                    }),
                });
            } catch (err) {
                alert("failed to update todo!");
            }
        }
    };
    //nested flexbox
    //flex: 1d layout system,
    render() {
        console.log("hello world!!");
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
                            const isEdit = item.id === this.state.editId;
                            return (
                                <li key={item.id}>
                                    {/* conditional rendering */}
                                    {isEdit ? (
                                        <input
                                            value={this.state.editInput}
                                            onChange={(e) =>
                                                this.setState({
                                                    editInput: e.target.value,
                                                })
                                            }
                                        />
                                    ) : (
                                        <span>{item.content}</span>
                                    )}

                                    {/* replace span */}
                                    <div className="todo-action">
                                        <button
                                            onClick={() =>
                                                this.handleEdit(item.id)
                                            }
                                        >
                                            {this.state.editId === item.id
                                                ? "save"
                                                : "edit"}
                                            {/* save */}
                                        </button>
                                        <button
                                            onClick={() => {
                                                this.handleDelete(index);
                                            }}
                                        >
                                            delete
                                        </button>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

const person = { name: "adam", cars: ["toyota", "bmw"] };
const newPerson = { ...person, cars: [...person.cars, "mercedez"] };
//mutating
//shallow copy, deep copy
/*c onst personCopy = { ...person }; // wrapper object reference
personCopy.cars.push("mercedez");

console.log("test", personCopy, person);

const a = [1,2,3];
const b = [...a];//O(n) */
