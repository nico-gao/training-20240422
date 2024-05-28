import { createContext, useContext, useReducer, useState } from "react";

// FLUX - architecture/pattern to build your React app
// action, dispatcher, store, view
// create an action -> dispatch the action -> run reducer logic -> store update -> view update
const CarContext = createContext();

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

const carsReducer = (state, { type, payload }) => {
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

const CarProvider = ({ children }) => {
  // const [cars, setCars] = useState(carsInitialValue);
  const [cars, dispatch] = useReducer(carsReducer, carsInitialValue);

  const handleSellCar = (id) => {
    dispatch({ type: "SELL", payload: id });
  };

  return (
    <CarContext.Provider value={{ cars, handleSellCar }}>
      {children}
    </CarContext.Provider>
  );
};

const useCars = () => {
  return useContext(CarContext);
};

export default CarProvider;
export { useCars };
