import React, { useContext } from "react";
import CarProvider, { useCars } from "./CarContext";

const CarApp = () => {
  const { cars } = useCars();

  return (
    <div>
      <div>CarApp</div>
      {cars.map((car) => (
        <Car car={car} key={car.id} />
      ))}
      <TotalQuantity />
    </div>
  );
};

const TotalQuantity = () => {
  const { cars } = useCars();
  const totalQuantity = cars.reduce((acc, cur) => {
    return acc + cur.number;
  }, 0);
  return <div>Total Quantity: {totalQuantity}</div>;
};

const Car = ({ car }) => {
  // console.log(car);
  return (
    <div>
      <CarInfo car={car} />
      <SellButton id={car.id} />
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

const SellButton = ({ id }) => {
  const { handleSellCar } = useCars();

  return <button onClick={() => handleSellCar(id)}>Sell</button>;
};

export default CarApp;
