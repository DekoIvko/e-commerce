import React, { useState } from "react";
import { BiSolidCloudUpload } from "react-icons/bi";
import { imageToBase64 } from "../../utils/utils";
import { appConfig } from "../../appConfig";
import toast from "react-hot-toast";

const NewProduct = () => {
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    description: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prevObj) => {
      return { ...prevObj, [name]: value };
    });
  };

  const handleUploadImage = async (e) => {
    const imageBase = await imageToBase64(e.target.files[0]);
    setData((prevObj) => {
      return { ...prevObj, image: imageBase };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { name, category, image } = data;
      if (name && category && image) {
        const fetchData = await fetch(`${appConfig.baseApiURL}/upload-product`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const res = await fetchData.json();
        if (res.alert) toast(res.message);
        setData(() => {
          return {
            name: "",
            category: "Fruits",
            image: "",
            price: "",
            description: "",
          };
        });
      } else {
        toast("Please add name, category and image ");
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className='p-4'>
      <form action='' className='m-auto w-full max-w-md shadow flex flex-col p-3 bg-white' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' id='name' value={data.name} className='bg-slate-100 p-1 my-1' onChange={handleOnChange} />

        <label htmlFor='category' className='my-1'>
          Category
        </label>
        <select name='category' id='category' className='bg-slate-200 p-1' onChange={handleOnChange} placeholder='Please choice category'>
          <option value=''>Select category</option>
          <option value='Fruits'>Fruits</option>
          <option value='Vegetable'>Vegetable</option>
          <option value='IceCream'>IceCream</option>
          <option value='Dosa'>Dosa</option>
          <option value='Pizza'>Pizza</option>
        </select>

        <label htmlFor='image' className='my-1'>
          Image
          <div className='h-40 w-full bg-slate-300 my-3 rounded flex items-center justify-center cursor-pointer'>
            {data?.image ? (
              <img src={data?.image} alt='product' className='h-full' />
            ) : (
              <span className='text-5xl'>
                <BiSolidCloudUpload />
              </span>
            )}
            <input type='file' id='image' accept='image/*' onChange={handleUploadImage} className='hidden' />
          </div>
        </label>

        <label htmlFor='price' className='my-1'>
          Price
        </label>
        <input type='text' name='price' value={data.price} className='bg-slate-200 p-1 my-1' onChange={handleOnChange} />

        <label htmlFor='description' className='my-1'>
          Description
        </label>
        <textarea rows={3} name='description' value={data.description} className='bg-slate-200 p-1 my-1 resize-none' onChange={handleOnChange} />

        <button className='bg-red-500 hover:bg-red-600 text-white text-lg font-medium drop-shadow'>Save</button>
      </form>
    </div>
  );
};

export default NewProduct;
