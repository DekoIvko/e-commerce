import React from "react";
import { useSelector } from "react-redux";
import { CartProduct } from "../../components";

const Cart = () => {
  const cartProducts = useSelector((state) => state.products.cartProducts);

  const totalPrice = cartProducts?.reduce((acc, curr) => acc + parseInt(curr.total), 0);
  const totalQty = cartProducts?.reduce((acc, curr) => acc + parseInt(curr.qty), 0);

  return (
    <div className='p-2 md:p-4'>
      <h2 className='text-lg md:text-2xl font-bold text-slate-600'>Your cart items</h2>
      {cartProducts.length ? (
        <div className='my-4 flex gap-3'>
          <div className='w-full max-w-3xl'>
            {cartProducts
              ? cartProducts?.map((item, index) => {
                  return <CartProduct key={item._id + index} {...item} />;
                })
              : null}
          </div>

          <div className='w-full max-w-sm bg-slate-400 ml-auto'>
            <h2 className='bg-slate-500 text-white p-2 text-lg'>Summary</h2>
            <div className='flex w-full py-2 text-lg border-b'>
              <p>Total qty:</p>
              <p className='ml-auto w-32 font-bold'>{totalQty}</p>
            </div>
            <div className='flex w-full py-2 text-lg border-b'>
              <p>Total price:</p>
              <p className='ml-auto w-32 font-bold'>
                {totalPrice}
                <span className='text-red-500 '>€</span>
              </p>
            </div>
            <button className='bg-red-500 w-full text-lg font-bold py-2 text-white'>Payment</button>
          </div>
        </div>
      ) : (
        <div className='flex w-full justify-center items-center'>
          <h1 className='text-2xl font-bold text-slate-800'>Your cart is empty</h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
