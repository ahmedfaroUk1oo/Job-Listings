import React from 'react';
import './App.css';
import ContextProvider, { GlobalStorage } from './Context/JobsContext';

import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
   <>
 <HashRouter>
      <GlobalStorage>
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </GlobalStorage>
    </HashRouter>
  </>
  );
}

export default App;
