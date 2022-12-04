
import './App.css';
import ProductsContextProvider from './context/ProductContextProvider';
import Store from './components/Store';
import {Switch,Route,Redirect} from "react-router-dom"
import ProductDetails from './components/ProductDetails';
import CartContextProvider from './context/CartContextProvider';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';
function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Navbar/>
     <Switch>
      <Route path="/products/:id" component={ProductDetails}/>
      <Route path="/products" component={Store}/>
      <Route path="/cart" component= {ShopCart}/>
      <Redirect to="/products"/>
     </Switch>
     </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
