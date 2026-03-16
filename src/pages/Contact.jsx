import { useEffect, useState } from "react";
// import featured from "/src/assets/featured (2).jpg";
// import { data } from "react-router-dom";
import LoadingState from "../components/states/LoadingState";

export default function Contact() {
    
   const [photos, setPhotos] = useState([]);
   const [loading, setLoading] = useState(false);

useEffect( () => {
   const fetchPhotos = async () => {
    try {
      setLoading(true)
      const response = await fetch("https://picsum.photos/v2/list?page=1&limit=2")
        
      const data = await response.json();
      setPhotos(data);

    } catch (error) {
      console.log("Fetched fail");
    }finally{
      setLoading(false)
    }
   }
   fetchPhotos();
}, [])
  
if(loading) return <LoadingState />
    
  return (
    <main className="status-card" style={{ marginTop: '2rem' }}>
      {photos.map ((photo) => (
        <img key={photo.id} src={photo.download_url} alt="" />
      ))}
      <h1>Contact Mangata & Gallo</h1>
      <p>Email: support@mangatagallo.com</p>
      <p>Phone: +1 (555) 101-2020</p>

    </main>
  );
}