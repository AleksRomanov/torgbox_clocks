import {BrowserRouter, Route, Routes} from 'react-router-dom';

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        {/*<Route path="/" element={<Main/>}/>*/}
        <Route path="/"/>
      </Routes>
    </BrowserRouter>
  );
}

