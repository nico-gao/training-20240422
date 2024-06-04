import { combineReducers, createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import CountAPI from "../API/mockCountAPI";

const carsInitialValue = [
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
];

const carsReducer = (state = carsInitialValue, { type, payload }) => {
  switch (type) {
    case "SELL":
      return state.map((item) => {
        if (item.id === payload) {
          return {
            ...item,
            number: item.number - 1,
          };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};

const countReducer = (state = 0, { type }) => {
  switch (type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  count: countReducer,
  cars: carsReducer,
});

export async function Add(dispatch, getState) {
  await CountAPI.addCount();
  dispatch({ type: "ADD" });
}
export async function Minus(dispatch, getState) {
  await CountAPI.minusCount();
  dispatch({ type: "MINUS" });
}

// homework: write your own createStore()
export const store = createStore(rootReducer, applyMiddleware(thunk));
// initilize store
// returns a store object -> dispatch, getState, subscribe, replaceReducer(optional)
