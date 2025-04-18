import React from 'react';
import bookimg from "../../assets/books.jpg"
const Banner = () => {
  return (

    <div className='flex mx-auto justify-between items-center flex-end'>
      <div  className='flex-1/2'>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <button className='btn btn-primary'>test</button>
      </div>
      <div className='w-6/12'>
        <img  className='w-6/12' src={bookimg} alt="" />
      </div>
    </div>
  );
};

export default Banner;