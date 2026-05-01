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
            <div className="d-flex flex-column min-vh-100">

                <MyNav />

            <div className="flex-grow-1">
            <div className="App">
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/products" element={<ProductPage/>}/>
                    <Route path="/cart" element={<ShoppingCart/>}/>
                    <Route path="/checkout" element={<CheckoutPage/>}/>
                </Routes>
                </div>

                </div>
                <Footer />
            </div>

        </Router>
    );
}
export default App;