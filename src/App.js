
import './App.css';
import ProductContextProvider from './context/ProductContextProvider';
function App() {
  return (
    <ProductContextProvider>
      app
    </ProductContextProvider>
  );
}

export default App;
