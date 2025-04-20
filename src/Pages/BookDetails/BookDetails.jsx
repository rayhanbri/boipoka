
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../Utility/AddtoDB';

const BookDetails = () => {
  const{ id} = useParams();
  // console.log(id)
  const bookId = parseInt(id)
  const data = useLoaderData();
  // console.log(data)
  const singleData =data.find(book => book.bookId === bookId)

  // console.log(singleData);

  const {bookName,image} = singleData || {};

  // ei console home e giye abar click korte hoi 

  // console.log(data)

  const handleMarkAsRed = id => {
   addToStoredDB(id);
  };

  return (
    <div className='w-2/3 mx-auto m-10'>
     <img className="w-36 mx-auto " src={image} alt="" />
     <h1 className='text-4xl font-bold  text-center'>{bookName}</h1>
     <div className="divider divider-warning"></div>
     <div className='text-center gap-5 m-5'>
     <button className="btn btn-warning"> Add to Wishlist</button>
     <button onClick={()=>handleMarkAsRed(id)} className="btn btn-error ml-5">Mark As Read</button>
     </div>
     <div className='divider'></div>
    </div>
  );
};

export default BookDetails;
     