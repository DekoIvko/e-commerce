import React from "react";
import { CiForkAndKnife } from "react-icons/ci";

const FilterProducts = ({ category, handleFilterProducts, isActive }) => {
  return (
    <div key={"category_" + category} onClick={() => handleFilterProducts(category)} className='cursor-pointer'>
      <div className={`text-3xl p-3 bg-yellow-500 rounded-full ${isActive ? "bg-red-600 text-white" : "bg-yellow-500"}`}>
        <CiForkAndKnife />
      </div>
      <p className='text-center'>{category}</p>
    </div>
  );
};

export default FilterProducts;
