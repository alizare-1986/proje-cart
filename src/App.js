
import './App.css';
import ProductsContextProvider from './context/ProductContextProvider';
import Store from './components/Store';
import {Routes,Route,Navigate} from "react-router-dom"
import ProductDetails from './components/ProductDetails';
import CartContextProvider from './context/CartContextProvider';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';
function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Navbar/>
     <Routes>
      <Route path="/products/:id" element={<ProductDetails/>}/>
      <Route path="/products" element={<Store/>}/>
      <Route path="/cart" element= {<ShopCart/>}/>
      <Route path='/*' element={<Navigate to="/products"/>}/>
     </Routes>
     </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
