import '../App.css';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Home from '../pages/Home';
import { accessoryItems } from '../components/Accessory';
import Footer from '../components/Footer';
import { Navigate, Route, Routes } from 'react-router-dom';
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
        <Route path='/accessories' element={<Products items={accessoryItems}/>}/>
      </Routes>
      <Footer/>
    </>
  );
}
export default App
