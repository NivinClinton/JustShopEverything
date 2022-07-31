import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Cart';
import Home from './Home/Home';
import Login from './Login/Login';
import ProductInfo from './ProductInfo/ProductInfo';
import Products from './Products/Products';
import Register from './Register/Register';


function App() {
  return (
    <div>
     <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/register' element={<Register/>} />
       <Route path='/login' element={<Login/>} />  
       <Route path='/products' element={<Products/>} /> 
       <Route path='/cart' element={<Cart/>} />
       <Route path='/products/:id' element={<ProductInfo/>} />
       
     </Routes>
    </div>
  );
}

export default App;
