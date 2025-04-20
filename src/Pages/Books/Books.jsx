// import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
  // const [allbooks,setAllBooks] =useState();

  // useEffect(()=>{
  //   fetch('booksData.json')
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  // },[])

//  const booksPromise=fetch('booksData.json').then(res => res.json());
// console.log(data)

  return (
    <div>
      <h1 className='text-5xl text-center font-bold  p-6'>Books</h1>
      {/* <Suspense>
        <Book booksPromise={booksPromise} ></Book>
      </Suspense> */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
      {
        data.map(singleBook => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
      }
     
      </div>
    </div>
  );
};

export default Books;