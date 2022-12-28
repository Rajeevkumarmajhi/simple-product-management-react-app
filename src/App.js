import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Add from './Add';
import UpdateProduct from './UpdateProduct';
import Home from './Home';
import SearchProduct from './SearchProduct';
import Protected from './Protected';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Protected Cmp={Home}></Protected>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add" element={ <Protected Cmp={Add}></Protected> } />
        <Route path="/update/:id" element={ <Protected Cmp={UpdateProduct}> </Protected> }  />
        <Route path="/search" element={ <Protected Cmp={SearchProduct}> </Protected> }  />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;