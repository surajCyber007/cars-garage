import React from "react";
import { useDispatch } from "react-redux";
import { changeSearchTerm } from "../store/slices/carsSlice";

const CarSearch = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(changeSearchTerm(e.target.value));
  };

  return (
    <div className="flex space-x-4 items-center">
      <p className="">Search Car: </p>
      <input type="text" className="border outline-blue-500 ps-2 rounded-md py-1" placeholder="Search" onChange={handleSearchChange} />
    </div>
  );
};

export default CarSearch;
