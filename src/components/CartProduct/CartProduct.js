import React from "react";
import { TbPlus, TbMinus } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { decreaseQty, increaseQty, removeCartProduct } from "../../store/productsSlice";

const CartProduct = ({ _id, name, category, image, price, description, qty, total }) => {
  const dispatch = useDispatch();

  const onRemove = () => {
    dispatch(removeCartProduct(_id));
  };

  const onIncreaseQty = () => {
    dispatch(increaseQty(_id));
  };

  const onDecreaseQty = () => {
    dispatch(decreaseQty(_id));
  };

  return (
    <div key={_id + "_cart-product"} className='bg-slate-200 p-2 flex gap-4 rounded border border-slate-200'>
      <div className='p-3 bg-white rounded overflow-hidden'>
        <img src={image} alt='' className='h-28 w-36 object-cover' />
      </div>
      <div className='flex flex-col gap-1 w-full'>
        <div className='flex justify-between'>
          <h3 className='font-semibold text-slate-600  capitalize text-lg md:text-xl'>{name}</h3>
          <div className='cursor-pointer text-slate-700 hover:text-red-500 text-xl' onClick={onRemove}>
            <AiFillDelete />
          </div>
        </div>
        <p className='text-slate-500 font-medium'>{category}</p>
        <p className='font-bold text-base'>
          <span>{price}</span>
          <span className='text-red-500 '>€</span>
        </p>
        <div className='flex justify-between'>
          <div className='flex gap-3 items-center'>
            <button onClick={onDecreaseQty} className='bg-slate-400 p-1 mt-2 rounded hover:bg-slate-600'>
              <TbMinus />
            </button>
            <p className='font-semibold'>{qty}</p>
            <button onClick={onIncreaseQty} className='bg-slate-400 p-1 mt-2 rounded hover:bg-slate-600'>
              <TbPlus />
            </button>
          </div>
          <div className='flex items-center gap-2 font-bold text-slate-700'>
            <p>Total:</p>
            <p>
              {total}
              <span className='text-red-500 '>€</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
