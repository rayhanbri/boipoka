// import React, { use } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";
const Book = ({singleBook}) => {
  console.log(singleBook)
 
  // const  data = use(booksPromise)

  // console.log(data)
   const {bookName,author,image,rating,category,totalPages,tags,bookId} =singleBook;

  return (
    <Link to={`/bookdetails/${bookId}`}>
    <div className="card bg-base-100 w-96 shadow-sm border border-lg p-6">
  <figure className="p-8 bg-gray-100 w-[90%] mx-auto border-lg">
    <img
      className="h-[200px]"
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body ">
    <div className="flex justify-start gap:20px ">
       {
         tags.map(tag =><p className="text-green-400 "><small className="bg-gray-200 w-9 p-2 rounded-full">{tag}</small></p>)
       }
    </div>
    <h2 className="card-title">
     {bookName}
      <div className="badge badge-secondary">{totalPages}</div>
    </h2>
    <p className="font-semibold text-sm">Book By:{author}</p>
    <div className="border-1 border-dashed border-gray-300 "></div>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{rating}<FaStarHalfAlt /></div>
    </div>
  </div>
</div>
    </Link>
  );
};

export default Book;