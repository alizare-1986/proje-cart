
import './App.css';
import ProductsContextProvider from './context/ProductContextProvider';
import Store from './components/Store';
function App() {
  return (
    <ProductsContextProvider>
      <Store/>
    </ProductsContextProvider>
  );
}

export default App;
