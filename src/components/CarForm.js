import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCar, changeCost, changeName } from "../store";

const CarForm = () => {
  const dispatch = useDispatch();

  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });

  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value));
  };

  const handleCostChange = (e) => {
    dispatch(changeCost(parseInt(e.target.value)) || 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCar({ name, cost }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-around my-4 shadow-md pb-4">
          <div className="flex space-x-4 items-center">
            <p>Car Name:</p>
            <input
              type="text"
              className="border ps-2 rounded-md outline-blue-500 py-1"
              onChange={handleNameChange}
              value={name}
            />
          </div>
          <div className="flex space-x-4 items-center">
            <p>Car Cost:</p>
            <input
              type="number"
              onChange={handleCostChange}
              value={cost || ""}
              className="border ps-2 rounded-md outline-blue-500 py-1"
            />
          </div>
          <button className="py-1 px-4 bg-blue-500 rounded-md hover:text-white hover:bg-blue-400">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
