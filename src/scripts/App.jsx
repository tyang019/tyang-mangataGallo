import '../App.css';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Footer from '../components/Footer';
import { BrowserRouter as Navigate, Route, Routes } from 'react-router-dom';
import Products from '../pages/products';


function App() {
  return (
    <>
      <Header/>
      <Navigation />

      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/category/:category" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <Footer/>
    </>
  );
}
export default App
