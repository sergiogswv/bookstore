import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NewBook from '../pages/NewBook';
import Home from '../pages/Home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route element={<Home />} index/>
          <Route element={<NewBook />} path='/addbook'/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
