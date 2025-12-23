
import './App.css';
import Navbar from './components/Nabbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/Footer/Footer';
import banner1 from './components/Assets/banner1.jpg'
import banner2 from './components/Assets/banner2.png'
import banner3 from './components/Assets/banner3.jpg'


function App() {
  return (
    <div >
     <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/threePiches' element={<ShopCategory banner={banner1} category="threePiches"/>}/>
        <Route path='/saree' element={<ShopCategory banner={banner2} category="saree"/>}/>
        <Route path='/cosmetics' element={<ShopCategory banner={banner3} category="cosmetics"/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/product/:productId" element={<Product/>}>
        </Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<LoginSignup/>}/>
      </Routes>
       <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
