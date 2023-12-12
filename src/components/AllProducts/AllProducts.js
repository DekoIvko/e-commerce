import React, { useState } from "react";
import FilterProducts from "../FilterProducts/FilterProducts";
import CartFeature from "../CartFeature/CartFeature";
import { useSelector } from "react-redux";

const AllProducts = ({ heading }) => {
  const products = useSelector((state) => state.products);
  const [dataFilter, setDataFilter] = useState([]);
  const [filterBy, setFilterBy] = useState();

  const handleFilterProducts = (category) => {
    setFilterBy(category);
    const filter = products?.products?.filter((item) => item.category.toLowerCase() === category.toLocaleLowerCase());
    setDataFilter(() => {
      return [...filter];
    });
  };

  return (
    <div className='my-5'>
      <h2 className='font-bold text-2xl text-slate-800 mb-4'>{heading}</h2>
      <div className='flex gap-4 justify-center overflow-scroll scrollbar-none  '>
        {products?.products[0] ? (
          [...new Set(products?.products?.map((item) => item?.category))]?.map((category, index) => {
            return (
              <FilterProducts
                key={category + index}
                isActive={category === filterBy}
                category={category}
                handleFilterProducts={handleFilterProducts}
              />
            );
          })
        ) : (
          <div className='flex justify-center items-center h-full'>
            <p>Loading...</p>
          </div>
        )}
      </div>
      <div className='flex flex-wrap justify-center gap-4 my-6'>
        {dataFilter ? (
          dataFilter?.map((item, index) => {
            return <CartFeature key={item + index} {...item} />;
          })
        ) : (
          <div className='flex justify-center items-center h-full'>
            <p>Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
