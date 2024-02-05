import React from "react";
import {useSelector} from 'react-redux';

const CarsValue = () => {
  const totalCost = useSelector(({cars: {data, searchTerm}})=>{
    const filt = data.filter((car) => car.name.toLowerCase().includes(searchTerm));
    return filt.reduce((acc, car) => acc + car.cost, 0);
  });

  
  return (
    <div>
      <p>Total Cost - ${totalCost}</p>
    </div>
  );
};

export default CarsValue;
