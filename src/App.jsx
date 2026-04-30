import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/navbar';
import Footer from './components/footer';
import LandingPage from './pages/landingpage';
import ProductPage from './pages/productpage';
import ShoppingCart from './pages/shoppingcart';
import CheckoutPage from './pages/checkoutpage';

function App() {
    return (
        <Router>
            <div className="App">
                <MyNav />
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/products" element={<ProductPage/>}/>
                    <Route path="/cart" element={<ShoppingCart/>}/>
                    <Route path="/checkout" element={<CheckoutPage/>}/>
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}
export default App;