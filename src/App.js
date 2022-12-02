
import './App.css';
import ProductsContextProvider from './context/ProductContextProvider';
import Store from './components/Store';
import {Switch,Route,Redirect} from "react-router-dom"
import ProductDetails from './components/ProductDetails';
function App() {
  return (
    <ProductsContextProvider>
     <Switch>
      <Route path="/products/:id" component={ProductDetails}/>
      <Route path="/products" component={Store}/>
      <Redirect to="/products"/>
     </Switch>
    </ProductsContextProvider>
  );
}

export default App;
