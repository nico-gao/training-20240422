import React from "react";
import { store } from "../../redux";
import { useDispatch, useSelector } from "react-redux";

const ReduxCarApp = () => {
  // const cars = store.getState();
  // console.log(cars);
  // const handleSell = () => {
  //   store.dispatch({ type: "SELL", payload: 1 });
  //   console.log(store.getState());
  // };
  // const todosSelector = (state) => state.todos;
  // const todos = useSelector(todosSelector);
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars);
  const handleSell = () => {
    dispatch({ type: "SELL", payload: 1 });
  };
  console.log(store.getState());

  return (
    <div>
      {cars.map((car) => (
        <Car car={car} key={car.id} />
      ))}
      <button onClick={handleSell}>sell toyota</button>
    </div>
  );
};

const Car = ({ car }) => {
  // console.log(car);
  return (
    <div>
      <CarInfo car={car} />
      {/* <SellButton id={car.id} /> */}
    </div>
  );
};

const CarInfo = ({ car }) => {
  return (
    <div>
      <div>{car.brand}</div>
      <div>{car.number}</div>
    </div>
  );
};

// const SellButton = ({ id }) => {
//   const { handleSellCar } = useCars();

//   return <button onClick={() => handleSellCar(id)}>Sell</button>;
// };

export default ReduxCarApp;
