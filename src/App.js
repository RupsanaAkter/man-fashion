
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Products from './components/Products/Products';
import Header from './components/Header/Header';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/friend/:friendId" element={<ProductDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
