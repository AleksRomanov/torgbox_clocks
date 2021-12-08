import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        {/*<Route path="/" element={<Main/>}/>*/}
        <Route path="/"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

