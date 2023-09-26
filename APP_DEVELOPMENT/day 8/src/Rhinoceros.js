import React, { useContext,useState,useEffect} from 'react'
import Footer from './footer';
import Navbar from './NabBar';
// import { Link, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux';
import { addToCart } from './cartActions';
import { SearchContext } from './searchContext';
import axios from 'axios';
function Rhinoceros({ addToCart }) {
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
            <h2 className='sty'>Rhinocerous</h2>
        </div>
        <div className='ig'>
            <div class="responsive">
                <div class="gallery">
                    <a target="_blank" href="https://images.pexels.com/photos/1145513/pexels-photo-1145513.jpeg?auto=compress&cs=tinysrgb&w=600">
                        <img src="https://images.pexels.com/photos/1145513/pexels-photo-1145513.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Double beds" width="600" height="300" />
                    </a>
                    <div class="desc">Rhinocerous</div>
                </div>
            </div>
            <div class="responsive">
                <div class="gallery">
                    <a target="_blank" href="https://images.pexels.com/photos/6477226/pexels-photo-6477226.jpeg?auto=compress&cs=tinysrgb&w=600">
                        <img src="https://images.pexels.com/photos/6477226/pexels-photo-6477226.jpeg?auto=compress&cs=tinysrgb&w=600" alt="sofa beds" width="600" height="300" />
                    </a>
                    <div class="desc">White rhinocerous</div>
                </div>
            </div>
            </div>
            <div class="clearfix"></div>
            <div className='about1'>
              <h4>There are two subspecies of white rhinoceros: the southern white rhinoceros (Ceratotherium simum simum) and the northern white rhinoceros (Ceratotherium simum cottoni). As of 2013, the southern subspecies has a wild population of 20,405—making them the most abundant rhino subspecies in the world. The northern subspecies is critically endangered, with all that is known to remain being two captive females. There is no conclusive explanation of the name "white rhinoceros". A popular idea that "white" is a distortion of either the Afrikaans word wyd or the Dutch word wijd (or its other possible spellings whyde, weit, etc.,), meaning "wide" and referring to the rhino's square lips, is not supported by linguistic studies.

The white rhino has an immense body and large head, a short neck and broad chest. Females weigh 1,600 kg (3,500 lb) and males 2,400 kg (5,300 lb). The head-and-body length is 3.5–4.6 m (11–15 ft) and the shoulder height is 1.8–2 m (5.9–6.6 ft). On its snout it has two horns. The front horn is larger than the other horn and averages 90 cm (35 in) in length and can reach 150 cm (59 in). The white rhinoceros also has a prominent muscular hump that supports its relatively large head. The colour of this animal can range from yellowish brown to slate grey. Most of its body hair is found on the ear fringes and tail bristles, with the rest distributed rather sparsely over the rest of the body. White rhinos have the distinctive flat broad mouth that is used for grazing.</h4>
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
                        Add to cart
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

  export default connect(null, mapDispatchToProps)(Rhinoceros);