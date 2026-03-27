import '../App.css';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Footer from '../components/Footer';
import {Navigate, Route, Routes } from 'react-router-dom';
import Products from '../pages/products';
import User from '../pages/User';
import Bag from '../pages/Bag';


function App() {
  return (
    <>
      <Header/>
      <Navigation />

      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home  replace/>} />
        <Route path="/products" element={<Products  replace/>} />
        <Route path="/category/:category" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/user' element={<User />} />
        <Route path='/bag' element={<Bag />} />
      </Routes>
      
      <Footer/>
    </>
  );
}
export default App
