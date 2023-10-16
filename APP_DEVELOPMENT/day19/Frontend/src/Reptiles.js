import React, {useContext,useState,useEffect} from 'react'
import Footer from './footer';
import Navbar from './NabBar';
// import { Link, useNavigate } from 'react-router-dom'
import { SearchContext } from './searchContext';
import { connect } from 'react-redux';
import { addToCart } from './cartActions';
import axios from 'axios';
function Reptiles({ addToCart }) {
    // const [cartItems, setCartItems] = useState([]);
    const {searchQuery}=useContext(SearchContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetchProductsByType("table"); // Fetch products of type "sofa" when the component mounts
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
                <h2 className='sty'>Snake</h2>
            </div>
            <div className='ig'>
            <div class="responsive">
                <div class="gallery">
                    <a target="_blank" href="https://images.pexels.com/photos/53140/snake-ball-python-python-regius-beauty-53140.jpeg?auto=compress&cs=tinysrgb&w=600">
                        <img src="https://images.pexels.com/photos/53140/snake-ball-python-python-regius-beauty-53140.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Double beds" width="600" height="300" />
                    </a>
                    <div class="desc">Python</div>
                </div>
            </div>
            <div class="responsive">
                <div class="gallery">
                    <a target="_blank" href="https://images.pexels.com/photos/10472231/pexels-photo-10472231.jpeg?auto=compress&cs=tinysrgb&w=600">
                        <img src="https://images.pexels.com/photos/10472231/pexels-photo-10472231.jpeg?auto=compress&cs=tinysrgb&w=600" alt="sofa beds" width="600" height="300" />
                    </a>
                    <div class="desc">Cobra</div>
                </div>
            </div>
            </div>
            <div class="clearfix"></div>

            <div className='about1'>
              <h4>Snakes are elongated, limbless, carnivorous reptiles of the suborder Serpentes (/sɜːrˈpɛntiːz/).[2] Like all other squamates, snakes are ectothermic, amniote vertebrates covered in overlapping scales. Many species of snakes have skulls with several more joints than their lizard ancestors, enabling them to swallow prey much larger than their heads (cranial kinesis). To accommodate their narrow bodies, snakes' paired organs (such as kidneys) appear one in front of the other instead of side by side, and most have only one functional lung. Some species retain a pelvic girdle with a pair of vestigial claws on either side of the cloaca. Lizards have independently evolved elongate bodies without limbs or with greatly reduced limbs at least twenty-five times via convergent evolution, leading to many lineages of legless lizards.[3] These resemble snakes, but several common groups of legless lizards have eyelids and external ears, which snakes lack, although this rule is not universal (see Amphisbaenia, Dibamidae, and Pygopodidae).</h4>
            <h4 className='design1'>............................................................................................................................</h4>
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
// export default TablePage;
export default connect(null, mapDispatchToProps)(Reptiles);