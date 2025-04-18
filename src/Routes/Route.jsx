import React from 'react';

// eita copy kore anbho
import {
  createBrowserRouter,
} from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import BookDetails from '../Pages/BookDetails/BookDetails';
  

// router ta k export kore dhibho


 export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement: <ErrorPage></ErrorPage>,
    children : [
      {
        index: true,
        loader:() => fetch('booksData.json'),
        path:'/',
        Component:Home
      },
      {
        path:'/about',
        Component:About
      },
      {
        path:"/bookdetails/:id",
        Component:BookDetails
      }
    ]
  },
]);