import React, { useState } from "react";
import logo from "../../imgs/e-commerce-logo.avif";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/userSlice";
import toast from "react-hot-toast";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const user = useSelector((state) => state.user.user);
  const cartProducts = useSelector((state) => state.products.cartProducts);
  const dispatch = useDispatch();
  console.log(user);
  const handleShowMenu = () => {
    setShowMenu((prevObj) => !prevObj);
  };

  const onLogOut = () => {
    dispatch(logoutUser());
    toast("Logout successfully");
  };

  return (
    <header className='fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white'>
      <div className='flex items-center h-full justify-between'>
        <Link to={"/"}>
          <div className='h-16'>
            <img src={logo} alt='logo' className='h-full' />
          </div>
        </Link>
        <div className='flex items-center gap-4 md:gap-7'>
          <nav className='gap-4 md:gap-6 text-base md:text-lg hidden md:flex'>
            <Link to={""}>Home</Link>
            <Link to={"menu"}>Menu</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>
          <div className='text-2xl text-slate-600 relative'>
            <Link to='/cart'>
              {" "}
              <BsFillCartFill />{" "}
              <div className='absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center'>
                {cartProducts?.length}
              </div>
            </Link>
          </div>
          <div className='text-slate-600' onClick={handleShowMenu}>
            <div className='text-3xl cursor-pointer overflow-hidden drop-shadow-md'>
              {user?.image ? <img src={user.image} alt='profile' className='w-12 h-12 rounded-full' /> : <FaUserAlt />}
            </div>

            {showMenu && (
              <div className='absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col '>
                {process.env.REACT_APP_HTML_ADMIN === user.email ? (
                  <Link to={"newProduct"} className='whitespace-nowrap cursor-pointer px-2'>
                    New product
                  </Link>
                ) : null}
                {!user?.email ? (
                  <Link to={"login"} className='whitespace-nowrap cursor-pointer px-2'>
                    LogIn
                  </Link>
                ) : (
                  <p className='whitespace-nowrap cursor-pointer' onClick={onLogOut}>
                    Log Out
                  </p>
                )}
                <nav className='text-base md:text-lg flex flex-col md:hidden'>
                  <Link className='px-2 py-1' to={""}>
                    Home
                  </Link>
                  <Link className='px-2 py-1' to={"menu"}>
                    Menu
                  </Link>
                  <Link className='px-2 py-1' to={"about"}>
                    About
                  </Link>
                  <Link className='px-2 py-1' to={"contact"}>
                    Contact
                  </Link>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
