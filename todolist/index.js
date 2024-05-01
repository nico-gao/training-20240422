// MVC - Model, View, Controller
// Model - manage the data
// View - manage the UI, what users will see
// Controller - handle events, interact with Model and View

const APIs = (() => {
  const baseURL = "http://localhost:3000/todos";
  const getTodos = () => {
    return fetch(baseURL).then((res) => res.json());
  };
  const createTodo = (newTodo) => {
    return fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    }).then((res) => res.json());
  };

  const deleteTodo = (id) => {
    console.log("id", id);
    return fetch(`${baseURL}/${id}`, { method: "DELETE" }).then((res) =>
      res.json()
    );
  };

  return { getTodos, createTodo, deleteTodo };
})();

const Model = (() => {
  class State {
    #todos; // []
    #onChange;
    constructor() {
      this.#todos = [];
    }

    get todos() {
      return this.#todos;
    }

    set todos(newTodos) {
      this.#todos = newTodos;
      this.#onChange();
    }

    subscribe(cb) {
      this.#onChange = cb;
    }
  }
  const { getTodos, createTodo, deleteTodo } = APIs;
  return {
    State,
    getTodos,
    createTodo,
    deleteTodo,
  };
})();

const View = (() => {
  const todolistEl = document.querySelector(".todolist");
  const addBtnEl = document.querySelector(".todo__add-btn");
  const inputEl = document.querySelector(".todo__input");

  const getInputValue = () => {
    return inputEl.value;
  };

  const clearInput = () => {
    inputEl.value = "";
  };

  const renderTodos = (todos) => {
    let todosTemp = "";

    todos.forEach((todo) => {
      const content = todo.content;
      const liTemp = `<li id=${todo.id}>
   <span>${content}</span>
   <button class="todo__delete-btn">delete</button>
    <button class="todo__edit-btn">edit</button>
    </li>`;
      todosTemp += liTemp;
    });
    todolistEl.innerHTML = todosTemp;
  };

  return { renderTodos, addBtnEl, todolistEl, getInputValue, clearInput };
})();

const Controller = ((view, model) => {
  const state = new model.State();

  const setUpAddHandler = () => {
    view.addBtnEl.addEventListener("click", (event) => {
      event.preventDefault();
      const inputValue = view.getInputValue();
      console.log(inputValue);
      const newTodo = {
        content: inputValue,
      };
      model.createTodo(newTodo).then((data) => {
        state.todos = [...state.todos, data];
        view.clearInput();
      });
    });
  };

  // event delegation
  // event bubbling
  const setUpDeleteHandler = () => {
    view.todolistEl.addEventListener("click", (event) => {
      const element = event.target;
      console.log(element.className);
      if (element.className === "todo__delete-btn") {
        const id = element.parentElement.getAttribute("id");
        model.deleteTodo(id).then((data) => {
          state.todos = state.todos.filter((item) => item.id !== id);
        });
      }
    });
  };

  const init = () => {
    model.getTodos().then((data) => {
      state.todos = data;
      // view.renderTodos(data);
    });
  };
  const bootstrap = () => {
    init();
    state.subscribe(() => {
      view.renderTodos(state.todos);
    });
    setUpAddHandler();
    setUpDeleteHandler();
  };

  return {
    bootstrap,
  };
})(View, Model);

Controller.bootstrap();

// requirement: use MVC pattern to write an app with html, js, css, 3 hours
// submit a repo link before 5:30pm est
// make sure to commit before the deadline, you can make improvements later on that we might consider
// use json server, live server
