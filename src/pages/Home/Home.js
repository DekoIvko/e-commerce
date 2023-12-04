import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProductsThunk } from "../../store/productsSlice";
import { HomeCart, CartFeature, AllProducts } from "../../components";
import { GrPrevious, GrNext } from "react-icons/gr";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const loadingArray = new Array(4).fill(null);
  const slideProductsRef = useRef();

  useEffect(() => {
    dispatch(GetProductsThunk());
  }, [dispatch]);

  const slideButtons = (type) => {
    if (type === "next") {
      slideProductsRef.current.scrollLeft += 200;
    } else {
      slideProductsRef.current.scrollLeft -= 200;
    }
  };

  return (
    <div className='p-2 md:p-4'>
      <div className='md:flex gap-4 py-2'>
        <div className='md:w-1/2'>
          <div className='flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full'>
            <p className='text-sm font-medium text-slate-900'>Bike Delivery</p>
            <img className='w-7 h-7' src='https://cdn-icons-png.flaticon.com/512/2972/2972185.png' alt='' />
          </div>
          <h2 className='text-4xl md:text-7xl font-bold py-3'>
            The fasted delivery in <span className='text-red-600 '>your home</span>
          </h2>
          <p className='py-3 text-base'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <button className='font-bold bg-red-700 text-slate-200 px-4 py-2 rounded-md'>Order now</button>
        </div>

        <div className='md:w-1/2 flex flex-wrap gap-4 p-4 justify-center'>
          {products?.products[0]
            ? products?.products?.slice(0, 4).map((product) => {
                return <HomeCart key={product._id} {...product} />;
              })
            : loadingArray.map((item, index) => {
                return <HomeCart key={index} />;
              })}
        </div>
      </div>
      <div className=''>
        <div className='flex w-full items-center'>
          <h2 className='font-bold text-2xl text-slate-800 mb-4'>Fresh Vegetables</h2>
          <div className='ml-auto flex gap-4'>
            <button className='bg-slate-200 hover:bg-slate-400 text-lg p-1 rounded' onClick={() => slideButtons("previous")}>
              <GrPrevious />
            </button>
            <button className='bg-slate-200 hover:bg-slate-400 text-lg p-1 rounded' onClick={() => slideButtons("next")}>
              <GrNext />
            </button>
          </div>
        </div>
        <div ref={slideProductsRef} className='flex gap-4 overflow-scroll scrollbar-none scroll-smooth transition-all'>
          {products?.products[0]
            ? products?.products
                ?.filter((item) => item.category === "Vegetable")
                .map((product, index) => {
                  return <CartFeature key={product._id + index} {...product} />;
                })
            : loadingArray.map((item, index) => {
                return <CartFeature key={"_id_" + index} />;
              })}
        </div>
      </div>
      <AllProducts heading='Your Products' />
    </div>
  );
};

export default Home;
