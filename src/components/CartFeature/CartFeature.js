import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCartProduct } from "../../store/productsSlice";

const CartFeature = ({ _id, name, category, image, price, description }) => {
  const dispatch = useDispatch();

  const onAddCartProduct = (e) => {
    e.stopPropagation();
    dispatch(addCartProduct({ _id, name, category, image, price, description }));
  };

  return (
    <div key={_id} className='w-full min-w-[220px] max-w-[220px] bg-white drop-shadow hover:shadow-lg pt-4 px-4 cursor-pointer '>
      {_id ? (
        <>
          <Link to={`/menu/${_id}`} onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}>
            <div className='h-28 flex flex-col justify-center items-center'>
              <img className='h-full' src={image} alt='product' />
            </div>
            <h3 className='font-semibold text-slate-600 capitalize text-lg'>{name}</h3>
            <p className='text-slate-500 font-medium'>{category}</p>
            <p className='font-bold flex'>
              {price}
              <span className='text-slate-800'>€</span>
            </p>{" "}
          </Link>
          <button className='bg-yellow-500 py-1 mt-2 rounded w-full' onClick={onAddCartProduct}>
            Add Cart
          </button>
        </>
      ) : (
        <div className='flex justify-center items-center h-full'>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default CartFeature;
