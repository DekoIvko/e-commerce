import React from "react";
import { CiForkAndKnife } from "react-icons/ci";

const FilterProducts = ({ category, handleFilterProducts }) => {
  return (
    <div key={"category_" + category} onClick={() => handleFilterProducts(category)} className='cursor-pointer'>
      <div className='text-3xl p-3 bg-yellow-500 rounded-full'>
        <CiForkAndKnife />
      </div>
      <p className='text-center'>{category}</p>
    </div>
  );
};

export default FilterProducts;
