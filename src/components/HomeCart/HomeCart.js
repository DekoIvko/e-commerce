import React from "react";
import { Link } from "react-router-dom";

const HomeCart = ({ _id, name, category, image, price, description }) => {
  console.log(name);
  return (
    <div key={_id} className='bg-white shadow-md p-2 rounded'>
      {_id ? (
        <Link to={`/menu/${_id}`} onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}>
          <div className='w-40 min-h-[150px]'>
            <img className='h-full w-full' src={image} alt='' />
          </div>
          <h3 className='font-semibold text-slate-600 text-center capitalize text-lg'>{name}</h3>
          <p className='text-center text-slate-500 font-medium'>{category}</p>
          <p className='text-center font-bold'>
            {price}
            <span className='text-slate-800'>€</span>
          </p>{" "}
        </Link>
      ) : (
        <div className='flex justify-center items-center h-full'>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default HomeCart;
