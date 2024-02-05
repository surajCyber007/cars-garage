import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

const CarsList = () => {
  const dispatch = useDispatch();
  const carList = useSelector(({ cars: { data, searchTerm } }) => {
    return data.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  });

  const searchTerm = useSelector((state) => {
    return state.cars.searchTerm;
  });

  const handleRemove = (car) => {
    dispatch(removeCar(car.id));
  };

  return (
    <div>
      <table className="w-[100vw]">
        <thead className="">
          <tr className="shadow-md">
            <th className="py-2">Car Name</th>
            <th className="py-2">Car Cost</th>
            <th className="py-2">Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {carList.map((car) => {
            return (
              <tr className={`${searchTerm && "font-bold"} shadow-sm`} key={car.id}>
                <td className="py-2">{car.name}</td>
                <td className="py-2">{car.cost}</td>
                <td className="py-2">
                  <button
                    className="bg-blue-500 text-white py-1 px-4 rounded-md"
                    onClick={() => handleRemove(car)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CarsList;
