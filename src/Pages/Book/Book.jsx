import React, { use } from 'react';

const Book = ({booksPromise}) => {
 
  const  data = use(booksPromise)

  console.log(data)


  return (
    <div>
      
    </div>
  );
};

export default Book;