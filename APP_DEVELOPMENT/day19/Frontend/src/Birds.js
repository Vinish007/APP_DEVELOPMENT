import React, { useContext,useState,useEffect} from 'react'
import Footer from './footer';
import Navbar from './NabBar';
// import { Link, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux';
import { addToCart } from './cartActions';
import { SearchContext } from './searchContext';
import axios from 'axios';
function Birds({ addToCart }) {
    // const [cartItems, setCartItems] = useState([]);
    const {searchQuery}=useContext(SearchContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetchProductsByType("shelf"); // Fetch products of type "sofa" when the component mounts
    }, []);
    
    const fetchProductsByType = async (type) => {
      try {
        const response = await axios.get(`http://localhost:8080/products/getproducts/${type}`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    return ( 
        <>
        <Navbar/>
        <div className='bed'>
            <h2 className='sty'>Birds</h2>
        </div>
        <div className='ig'>
            <div class="responsive">
                <div class="gallery">
                    <a target="_blank" href="https://images.pexels.com/photos/12372691/pexels-photo-12372691.jpeg?auto=compress&cs=tinysrgb&w=600">
                        <img src="https://images.pexels.com/photos/12372691/pexels-photo-12372691.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Double beds" width="600" height="300" />
                    </a>
                    <div class="desc">VULTURE</div>
                </div>
            </div>
            <div class="responsive">
                <div class="gallery">
                    <a target="_blank" href="https://images.pexels.com/photos/18316177/pexels-photo-18316177/free-photo-of-portrait-of-an-eagle.jpeg?auto=compress&cs=tinysrgb&w=600">
                        <img src="https://images.pexels.com/photos/18316177/pexels-photo-18316177/free-photo-of-portrait-of-an-eagle.jpeg?auto=compress&cs=tinysrgb&w=600" alt="sofa beds" width="600" height="300" />
                    </a>
                    <div class="desc">Eagle</div>
                </div>
            </div>
            </div>
            <div class="clearfix"></div>
            <div className='about1'>
              <h4>Eagles are large, powerfully-built birds of prey, with heavy heads and beaks. Even the smallest eagles, such as the booted eagle (Aquila pennata), which is comparable in size to a common buzzard (Buteo buteo) or red-tailed hawk (B. jamaicensis), have relatively longer and more evenly broad wings, and more direct, faster flight – despite the reduced size of aerodynamic feathers. Most eagles are larger than any other raptors apart from some vultures. The smallest species of eagle is the South Nicobar serpent eagle (Spilornis klossi), at 450 g (1 lb) and 40 cm (16 in). The largest species are discussed below. Like all birds of prey, eagles have very large hooked beaks for ripping flesh from their prey, strong, muscular legs, and powerful talons.

The beak is typically heavier than that of most other birds of prey. Eagles' eyes are extremely powerful. It is estimated that the wedge-tailed eagle has a visual acuity twice that of a typical human.[2][3][4] This acuity enables eagles to spot potential prey from a very long distance. This keen eyesight is primarily attributed to their extremely large pupils which ensure minimal diffraction (scattering) of the incoming light. The female of all known species of eagles is larger than the male.[5][6]</h4>
            <h5 className='design1'>..........................................................................................................................</h5>
            {/* <p>Our sofa-beds provide a cosy spot for your guests to sleep, especially when you’re short on room in the apartment. Some, like our VALLENTUNA modular sofa-beds, are super-customisable, so you can add or arrange units as you wish. Then there are daybeds like the BRIMNES, which comes with drawers for storing your bedding or your kid’s toys. Want a seating that multitasks? The vibrant FLOTTEBO and elegant NYHAMN look good, have space for storage, and transform from 3-seater sofas to a comfy single bed. </p> */}
            </div>
            <div className='dir'>
                
                {filteredProducts.map((product, index) => (
                  <div key={index} className='card1'>
                    <img src={product.image} class='card-img-top' alt='...' />
                    <div class='card-body'>
                      <h5 class='card-title'>{product.name}</h5>
                      <p className='price'>Rs. {product.price}</p>
                      <p class='card-text'>{product.description}</p>
                      {/* <div className='btn'> */}
                      <button id='btn1'
                        onClick={() => addToCart({ image:product.image,name: product.name, price: product.price })}
                        class='btn btn-primary'
                      >
                        
                      </button>
                      {/* </div> */}
                    </div>
                  </div>
                ))}
                
              </div>
            
        <Footer/>
        </>
     );
}
const mapDispatchToProps = {
    addToCart: addToCart,
  };

  export default connect(null, mapDispatchToProps)(Birds);