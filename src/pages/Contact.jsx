import { useEffect, useState } from "react";
import LoadingState from "../components/states/LoadingState";
import ErrorState from "../components/states/ErrorState";

const API_KEY = "Ad4REsxepmVq5eUcROadraBPgxjCXcquX2JxzZuHbVZbNgBBijjrQ7ib"; 

export default function Contact() {
    
   const [photos, setPhotos] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const paragraphs = [
    "Mangata & Gallo is a modern luxury brand dedicated to timeless design and refined craftsmanship. Founded with the vision of bringing together elegance and everyday wearability, our store offers a carefully curated selection of jewelery and clothing that celebrates both sophistication and individuality.",
    "At Mangata & Gallo, we believe that style should feel effortless yet meaningful. Every piece we offer is chosen to help our customers express confidence, beauty, and personal identity through fashion."
   ]
   const paragraphs2 = [
    "True luxury lies in the harmony between artistry and simplicity. Our collections are inspired by the idea that jewelery and clothing should complement one another, creating a complete expression of style.",
    "From delicate necklaces and statement rings to finely crafted floral garments, Mangata & Gallo blends modern fashion with timeless elegance. Each item is designed to elevate everyday moments into something memorable."
   ]
   const title = [
    "Our Story",  
    "Our Philosophy"
   ]

useEffect( () => {
   const fetchPhotos = async () => {
    try {
      setLoading(true)
      const response = await fetch("https://api.pexels.com/v1/search?query=jewelry&per_page=2", {
        headers: {
          "Authorization": API_KEY
        }
      })
      
      const data = await response.json();
      setPhotos([...data.photos]);
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
    <main className="status-card" 
      style={{
        marginTop: '1rem' 
        }}
      >
      {/* <h1>Our Story</h1> */}
      <div className="about_section">
      {photos.map ((photo, index) => ( 
        <div key={photo.id}
        style={{
          display: "flex",
          flexDirection: index % 2 === 0 ? "row" : "row-reverse" //if index === 0, 2, 4... then row, else row-reverse
        }}>
          <div>
            <h2>{title[index]}</h2>
            <p>{paragraphs[index]}</p>
            <p>{paragraphs2[index]}</p>
          </div>
        <img 
          style={{
            height: "auto",
            width: "100%", 
            maxHeight: "480px",
            maxWidth: "380px",
            margin: "10px", 
            display: "block",             
          }}
          src={photo.src.medium} 
          alt={photo.photographer}
          />
        </div>
      ))}
      </div>

      <h1>Contact Mangata & Gallo</h1>
      <p>Email: support@mangatagallo.com</p>
      <p>Phone: +1 (555) 101-2020</p>

    </main>
  );
}