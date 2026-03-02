import { Link } from 'react-router-dom';
import banner1 from '/src/assets/banner1.jpg';
import featured from '/src/assets/featured.jpg';
import christmas from '/src/assets/christmas.jpg';
import off from '/src/assets/off.jpg';

export default function Home(){
  return(
    <>
    <h2 id="search-result"></h2>
      <h1 class="banner"></h1>
      <section>
        <article>
          <div className="image-container">
            <img className="banner" src={banner1} alt="banner" />
            <div className="overlay-text">Exquisite Jewelry & Clothing Collection</div>
          </div>
        </article>
         <Link to="/products">
          <button type="button" className="order">Order</button>
        </Link>
      </section>

      <section>
        <div>
          <h1>Our Collections</h1>
           <Link to="/products">
            <button type="button">Shop Now</button>
          </Link>
        </div>
        <article>
        <div className="container_description">
            <img className="three_images" src={featured} alt="featured collection" />
            <img className="three_images" src={christmas} alt="holiday collection" />
            <img className="three_images" src={off} alt="promotional collection" />
          </div>
        </article>
      </section>
    </>
  )
}