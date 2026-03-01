import '../App.css';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Home from '../pages/Home';
import { menItems } from '../components/menItems';
import { womenItems } from '../components/womenItems';
import Footer from '../components/Footer';
import { Route, Routes, Link } from 'react-router-dom';
import Products from '../pages/products';

function App() {
  return (
    <>
    {/* {Global Variables} */}
      <Header/>
      <Navigation />

    {/* {Routes} */}
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path='/men' element={<Products items={menItems} />} />
        <Route path='/women' element={<Products items={womenItems} />} />
        <Route path='/product' element={<Products/>}/>
      </Routes>

    {/* {Footer} */}
      <Footer/>
    </>
  )
}
export default App
