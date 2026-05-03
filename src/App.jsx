import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/navbar';
import Footer from './components/footer';
import LandingPage from './pages/landingpage';
import ProductPage from './pages/productpage';
import ShoppingCart from './pages/shoppingcart';
import CheckoutPage from './pages/checkoutpage';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: [],
            totalPrice: 0
        };
    }
    addToCart = (product) => {
        const existingItem = this.state.cartItems.find(item => item.id === product.id);

        if (existingItem) {
            this.updateQuantity(product.id, 1);
        } else {
            const newItem = { ...product, quantity: 1 };
            this.setState({
                cartItems: [...this.state.cartItems, newItem],
                totalPrice: this.state.totalPrice + product.price
            });
        }
    }
    updateQuantity = (id, amount) => {
        const updatedCart = this.state.cartItems.map(item => {
            if (item.id === id) {
                return { ...item, quantity: Math.max(1, item.quantity + amount) };
            }
            return item;
        });
        const newTotal = updatedCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        this.setState({ cartItems: updatedCart, totalPrice: newTotal });
    }
    removeFromCart = (id) => {
        const filteredCart = this.state.cartItems.filter(item => item.id !== id);
        const newTotal = filteredCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        this.setState({ cartItems: filteredCart, totalPrice: newTotal });
    }
    render() {
        return (
            <>
                <MyNav
                    cartCount={this.state.cartItems.length}
                    totalPrice={this.state.totalPrice}
                />
                <main style={{ minHeight: '80vh' }}>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/products" element={<ProductPage addToCart={this.addToCart} />} />
                        <Route path="/cart" element={
                            <ShoppingCart
                                cartItems={this.state.cartItems}
                                updateQuantity={this.updateQuantity}
                                removeFromCart={this.removeFromCart}
                                totalPrice={this.state.totalPrice}
                            />
                        } />
                        <Route path="/checkout" element={<CheckoutPage totalPrice={this.state.totalPrice} />} />
                    </Routes>
                </main>
                <Footer />
            </>
        );
    }
}