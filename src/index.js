import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from './pages/MainPage';
import ItemsPage from './pages/ItemsPage';
import NaturePage from './pages/NaturePage';
import QwizPage from './pages/QwizPage';
import PeoplePage from './pages/PeoplePage';
import ManufacturePage from './pages/ManufacturePage';
import SimplePage from './pages/SimplePage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {  
    path: "/",
    element: <MainPage/>,
  },
  {
    path: "/nature", 
    element: <NaturePage/>,
  },
{
    path: "/manufacture",
    element: <ManufacturePage/>,
  },
  {
    path: "/peole",
    element: <PeoplePage/>,
},
 {  
    path: "/items",
    element: <ItemsPage/>,
  },
  {  
    path: "/qwiz",
    element: <QwizPage/>,
  },
  {  
    path: "/simple",
    element: <SimplePage/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

