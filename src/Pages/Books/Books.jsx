import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
  const [allbooks,setAllBooks] =useState();

  // useEffect(()=>{
  //   fetch('booksData.json')
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  // },[])

 const booksPromise=fetch('booksData.json').then(res => res.json());

  return (
    <div>
      <h1 className='text-5xl text-center font-bold  p-6'>Books</h1>
      <Suspense>
        <Book booksPromise={booksPromise} ></Book>
      </Suspense>
    </div>
  );
};

export default Books;