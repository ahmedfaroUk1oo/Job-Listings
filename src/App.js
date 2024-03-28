import React from 'react';
import './App.css';
import ContextProvider, { GlobalStorage } from './Context/JobsContext';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
   <>
 <BrowserRouter>
      <GlobalStorage>
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </GlobalStorage>
    </BrowserRouter>
  </>
  );
}

export default App;
