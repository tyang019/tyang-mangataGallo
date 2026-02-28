import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Men from './components/Men';
import Footer from './components/Footer';
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <>
    {/* {Global Variables} */}
      <Header/>
      <Navigation />

    {/* {Routes} */}
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path='/men' element={<Men />} />
      </Routes>

    {/* {Footer} */}
      <Footer/>
    </>
  )
}
export default App
