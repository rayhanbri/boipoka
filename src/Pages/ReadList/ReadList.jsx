import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreBook } from '../../Utility/AddtoDB';
import Book from '../Book/Book';


const ReadList = () => {
  const [readList,setReadList] =useState([])
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
    
    
  },[])
  // console.log(readList)

  return (
    <div>
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