import React from 'react';
import './App.css';
import ContextProvider, { GlobalStorage } from './Context/JobsContext';

import { BrowserRouter, HashRouter, Route, RouterProvider, Routes, createHashRouter } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "*",
      element: <Home />
    }

  ])
  return (
   <>

      <GlobalStorage>
        {/* <Routes>
          <Route path="*" element={<Home />} />
          <Route index element={<Home />}></Route>
        </Routes> */}
        <RouterProvider router={router} />
      </GlobalStorage>
   
  </>
  );
}

export default App;
