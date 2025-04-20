
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
  const{ id} = useParams();
  // console.log(id)
  const bookId = parseInt(id)
  const data = useLoaderData();
  // console.log(data)
  const singleData =data.find(book => book.bookId === bookId)

  // console.log(singleData);

  const {bookName,image} = singleData;

  // ei console home e giye abar click korte hoi 

  // console.log(data)

  return (
    <div className='w-2/3 mx-auto m-10'>
     <img className="w-36 mx-auto " src={image} alt="" />
     <h1 className='text-4xl font-bold  text-center'>{bookName}</h1>
     <div className='text-center gap-5 m-5'>
     <button className="btn btn-warning">Wishlist</button>
     <button className="btn btn-error ml-5">Read</button>
     </div>
     <div className='divider'></div>
    </div>
  );
};

export default BookDetails;