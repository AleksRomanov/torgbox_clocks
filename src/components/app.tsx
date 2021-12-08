import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Main from './main';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
