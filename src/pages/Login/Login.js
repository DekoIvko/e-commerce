import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { appConfig } from "../../appConfig";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleShowPassword = () => {
    setShowPassword((prevObj) => !prevObj);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prevObj) => {
      return { ...prevObj, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email && password) {
      const fetchData = await fetch(`${appConfig.baseApiURL}/login`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await fetchData.json();
      dispatch(loginUser(res));
      toast(res.message);
      if (res.alert) navigate("/");
    } else {
      toast("Please enter required fields!");
    }
  };

  return (
    <div className='p-3 md:p-4'>
      <div className='w-full max-w-md bg-white m-auto flex flex-col p-4'>
        <div className='overflow-hidden rounded-full drop-shadow-md shadow-md m-auto'>
          <AiOutlineUserAdd className='text-5xl' />
        </div>
        <form className='w-full py-3 flex flex-col'>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            id='email'
            name='email'
            placeholder='Please write you email'
            className='mt-1 mb-2 w-full bg-slate-200 p-1 px-2 py-1 rounded focus-within:outline-blue-300'
            value={data?.email}
            onChange={handleOnChange}
          />
          <label htmlFor='password'>Password</label>
          <div className='flex p-1 px-2 py-1 rounded mt-1 mb-2 bg-slate-200 focus-within:outline focus-within:outline-blue-300'>
            <input
              type={showPassword ? "text" : "password"}
              id='password'
              name='password'
              placeholder='Please write you password'
              className='w-full bg-slate-200 outline-none'
              value={data?.password}
              onChange={handleOnChange}
            />
            <span className='flex text-xl cursor-pointer' onClick={handleShowPassword}>
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>
          <button
            type='submit'
            className='w-full max-w-[150px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center rounded-full py-1 mt-1'
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
        <p className='text-left text-sm mt-3'>
          Don't have account ?{" "}
          <Link className='text-red-600 underline' to={"/signup"}>
            Signup
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
