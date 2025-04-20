import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
  const {id}  = useParams();
   
  const data = useLoaderData() || []
 const [bookData,setBookData] = useState(data || []);
  const singleBook = bookData.find(book => book.bookId == id)
  console.log(singleBook)

  // ei console home e giye abar click korte hoi 

  // console.log(data)

  return (
    <div>
      <h1>Book details</h1>
    </div>
  );
};

export default BookDetails;