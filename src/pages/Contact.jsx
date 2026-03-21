import { useEffect, useState } from "react";
import LoadingState from "../components/states/LoadingState";
import ErrorState from "../components/states/ErrorState";

export default function Contact() {
    
   const [photos, setPhotos] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);

useEffect( () => {
   const fetchPhotos = async () => {
    try {
      setLoading(true)
      const response = await fetch("https://picsum.photos/v2/list?page=1&limit=1")
        
      const data = await response.json();
      setPhotos(data);

    } catch (error) {
      setError(error);
      console.log("Fetched photo fail");
    }finally{
      setLoading(false)
    }
   }
   fetchPhotos();
}, [])
  
if(loading) return <LoadingState />
if(error) return <ErrorState />
    
  return (
    <main className="status-card" style={{
      marginTop: '2rem' 
      }}
      >
      <h1>Our Story</h1>
      <div style={{
        display: "flex"
      }}>

      {photos.map ((photo) => (
        <img 
          style={{
            height: "auto",
            width: "100%", 
            maxWidth: "380px",
            margin: "10px", 
            display: "flex"
          }}
          key={photo.id} 
          src={photo.download_url} 
          alt="About us photo" 
          />
      ))}
      <div style={{
        display: "block",
      }}>
        <p>Mangata & Gallo is a modern luxury brand dedicated to timeless design and refined craftsmanship. Founded with the vision of bringing together elegance and everyday wearability, our store offers a carefully curated selection of jewelry and clothing that celebrates both sophistication and individuality.</p>
        <p>At Mangata & Gallo, we believe that style should feel effortless yet meaningful. Every piece we offer is chosen to help our customers express confidence, beauty, and personal identity through fashion.</p>
      </div>
  </div>
  <div>
        <h1>Our Philosophy</h1>
      <p>True luxury lies in the harmony between artistry and simplicity. Our collections are inspired by the idea that jewelry and clothing should complement one another, creating a complete expression of style.</p>
      <p>From delicate necklaces and statement rings to finely crafted garments, Mangata & Gallo blends modern fashion with timeless elegance. Each item is designed to elevate everyday moments into something memorable.</p>
      </div>

      <h1>Contact Mangata & Gallo</h1>
      <p>Email: support@mangatagallo.com</p>
      <p>Phone: +1 (555) 101-2020</p>

    </main>
  );
}