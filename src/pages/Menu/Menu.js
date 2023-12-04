import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetProductsThunk, addCartProduct } from "../../store/productsSlice";
import { AllProducts } from "../../components";

const Menu = () => {
  const { filterBy } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const product = products?.products?.filter((item) => item._id === filterBy)[0];

  useEffect(() => {
    dispatch(GetProductsThunk());
  }, [dispatch]);

  const handleAddCartProduct = (e) => {
    dispatch(addCartProduct(product));
  };

  const handleBuy = () => {
    // navigate("/cart")
  };

  console.log(product);
  return (
    <div className='p-2 md:p-4'>
      <div className='w-full max-w-4xl m-auto md:flex bg-white'>
        <div className='max-w-sm  overflow-hidden w-full p-5'>
          <img src={product?.image} alt='product?' className='hover:scale-105 transition-all h-full' />
        </div>
        <div className='flex flex-col gap-1'>
          <h3 className='font-semibold text-slate-600  capitalize text-2xl md:text-4xl'>{product?.name}</h3>
          <p className='text-slate-500 font-medium text-2xl'>{product?.category}</p>
          <p className='font-bold md:text-2xl'>
            <span className='text-red-500 '>€</span>
            <span>{product?.price}</span>
          </p>
          <div className='flex gap-3'>
            <button onClick={handleBuy} className='bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]'>
              Buy
            </button>
            <button onClick={handleAddCartProduct} className='bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]'>
              Add Cart
            </button>
          </div>
          <div>
            <p className='text-slate-600 font-medium'>Description : </p>
            <p>{product?.description}</p>
          </div>
        </div>
      </div>
      <AllProducts heading='Related Product' />
    </div>
  );
};

export default Menu;
