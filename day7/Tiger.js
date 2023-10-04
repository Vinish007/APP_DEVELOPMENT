import React, { useContext, useState,useEffect } from 'react'
import '../src/BedPage.css'
import Navbar from './NabBar';
import Footer from './footer';
import { SearchContext } from './searchContext';
import { connect } from 'react-redux';
import { addToCart } from './cartActions';
import axios from 'axios';
function Tiger({ addToCart }) {

const {searchQuery}=useContext(SearchContext);
const [products, setProducts] = useState([]);

useEffect(() => {
  fetchProductsByType("bed"); // Fetch products of type "sofa" when the component mounts
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
            <Navbar />
            <div className='bed'>
                <h2 className='sty'>Types of tiger</h2>
            </div>
            <div className='ig'>
                <div class="responsive">
                    <div class="gallery">
                        <a target="_blank" href="https://www.bing.com/th?id=OIP.Oqr-yvUfGGtBMPw2o6U4JwHaEo&w=167&h=108&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2">
                            <img src="https://www.bing.com/th?id=OIP.Oqr-yvUfGGtBMPw2o6U4JwHaEo&w=167&h=108&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Double beds" width="600" height="400" />
                        </a>
                        <div class="desc">White tiger</div>
                    </div>
                </div>
                <div class="responsive">
                    <div class="gallery">
                        <a target="_blank" href="https://www.bing.com/th?id=OIP.rUqDTUMzNsIwYSQKCupY9QHaEK&w=185&h=104&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2">
                            <img src="https://www.bing.com/th?id=OIP.rUqDTUMzNsIwYSQKCupY9QHaEK&w=185&h=104&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="sofa beds" width="600" height="400" />
                        </a>
                        <div class="desc">cub</div>
                    </div>
                </div>
                <div class="responsive">
                    <div class="gallery">
                        <a target="_blank" href="https://images.pexels.com/photos/5838715/pexels-photo-5838715.jpeg?auto=compress&cs=tinysrgb&w=600">
                            <img src="https://images.pexels.com/photos/5838715/pexels-photo-5838715.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Storage beds" width="600" height="400" />
                        </a>
                        <div class="desc">Siberian Tiger</div>
                    </div>
                </div>
                <div class="responsive">
                    <div class="gallery">
                        <a target="_blank" href="https://www.bing.com/th?id=OIP.InP8kHZhEX4ormvUQQQNiQHaFj&w=200&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2">
                            <img src="https://www.bing.com/th?id=OIP.InP8kHZhEX4ormvUQQQNiQHaFj&w=200&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Single beds" width="600" height="400" />
                        </a>
                        <div class="desc">Bengal tiger</div>
                    </div>
                </div>
            </div>

            <div class="clearfix"></div>

            <div className='about1'>    
                <h4 className='design1'>The term West Asia is used pragmatically and has no "correct" or generally agreed-upon definition. Its typical definitions overlap substantially, but not entirely, with definitions of the terms Middle East, Eastern Mediterranean, and Near East (which is historically familiar but is widely deprecated today). The National Geographic Style Manual as well as Maddison's The World Economy: Historical Statistics (2003) by the Organisation for Economic Co-operation and Development (OECD) only includes Bahrain, Iran, Iraq, Israel, Jordan, Kuwait, Lebanon, Oman, Qatar, Palestine (called West Bank and Gaza in the latter), Saudi Arabia, Syria, Turkey, UAE, and Yemen as West Asian countries.[6][7] In contrast to this definition, the United Nations Industrial Development Organization (UNIDO) in its 2015 yearbook also includes Armenia and Azerbaijan, and excludes Israel (as Other) and Turkey (as Europe).[8]

Unlike the UNIDO, the United Nations Statistics Division (UNSD) excludes Iran from West Asia and includes Turkey, Georgia, and Cyprus in the region.[9] In the United Nations geopolitical Eastern European Group, Armenia and Georgia are included in Eastern Europe, whereas Cyprus and East Thracian Turkey are in Southern Europe. These three nations are listed in the European category of the United Nations Educational, Scientific, and Cultural Organisation (UNESCO).

National members of West Asian sports governing bodies are limited to Bahrain, Iran, Iraq, Jordan, Kuwait, Lebanon, Syria, Oman, Palestine, Qatar, Saudi Arabia, United Arab Emirates, and Yemen.[10][11][12] The Olympic Council of Asia's multi-sport event West Asian Games are contested by athletes representing these thirteen countries. Among the region's sports organisations are the West Asia Basketball Association, West Asian Billiards and Snooker Federation, West Asian Football Federation, and the West Asian Tennis Federation.</h4>
            </div>
            <div className='about1'>
                <h4 className='design1'>.................................................................................................................</h4>
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
            
            <Footer />
        </>
    );
}

const mapDispatchToProps = {
    addToCart: addToCart,
  };
// export default Bedpage;
export default connect(null, mapDispatchToProps)(Tiger);