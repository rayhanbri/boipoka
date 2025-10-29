import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreBook } from '../../Utility/AddtoDB';
import Book from '../Book/Book';


const ReadList = () => {
  const [readList,setReadList] =useState([])
  const [sort,setSort] = useState('');
  const data = useLoaderData();
  // console.log(data)

  useEffect(()=>{
    const storedBookData = getStoreBook();
    // console.log(storedBookData)
    const convertedData = storedBookData.map(id => parseInt(id))
    // console.log(convertedData);
    const myReadList = data.filter(book => convertedData.includes(book.bookId));
    // console.log(myReadList)
    setReadList(myReadList)
    
    
  },[data])
  // console.log(readList)
  const handleSort = type => {
    setSort(type);
    if(type === 'pages'){
      // boro theke choto hole a.rating er jaigai b.rating  dhibho only rating 
      const sortedByPage = [...readList].sort((a,b) => a.totalPages - b.totalPages);
      setReadList(sortedByPage)
      console.log(sortedByPage)
    }

    if(type === "rating"){
      const  sortedByRating = [...readList].sort((a,b) => a.rating - b.rating)
      setReadList(sortedByRating)
    }
    
  }

  return (
    <div>
      <details className="dropdown">
  <summary className="btn m-1">sort by:{sort?sort:""}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handleSort('pages')}>pages</a></li>
    <li><a onClick={()=>handleSort('rating')}>rating</a></li>
  </ul>
</details>
      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Wishlist</Tab>
        </TabList>

        <TabPanel className="text-center mx-auto">
          <h2>Book I red {readList.length}</h2>
          {
            readList.map(b => <Book key={b.bookId} singleBook={b}></Book>)
          }
        </TabPanel>
        <TabPanel>
          <h2>My Wishlist</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;