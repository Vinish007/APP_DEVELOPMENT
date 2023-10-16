import React, { useContext ,useState,useEffect} from 'react'
import Navbar from './NabBar';
import Footer from './footer';
// import { Link, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux';
import { addToCart } from './cartActions';
import { SearchContext } from './searchContext';
import axios from 'axios';
import '../src/SofaPage.css';
function Termsa({ addToCart }) {
    // const [cartItems, setCartItems] = useState([]);
    const {searchQuery}=useContext(SearchContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetchProductsByType("sofa"); // Fetch products of type "sofa" when the component mounts
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
   {/*       <div className='bed'>
                <h2 className='sty'>Types of Lions</h2>
            </div>
            <div className='ig'>
            <div class="responsive">
                <div class="gallery">
                    <a target="_blank" href="https://images.pexels.com/photos/730536/pexels-photo-730536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                        <img src="https://images.pexels.com/photos/730536/pexels-photo-730536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Double beds" width="600" height="300" />
                    </a>
                    <div class="desc">Lion</div>
                </div>
            </div>
            <div class="responsive">
                <div class="gallery">
                    <a target="_blank" href="https://images.pexels.com/photos/11265077/pexels-photo-11265077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                        <img src="https://images.pexels.com/photos/11265077/pexels-photo-11265077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="sofa beds" width="600" height="300" />
                    </a>
                    <div class="desc">White Lion</div>
                </div>
            </div>
            </div>
            <div class="clearfix"></div>
*/}
            <div className='about1'>
            <h4 className='design1'>Zoo Welfare Terms and Services

Effective Date: 

1. Introduction

Welcome to vas, a place dedicated to the welfare and conservation of animals from around the world. Before visiting our zoo, please take a moment to review and understand our terms and services. By entering our premises, you agree to abide by these terms and contribute to the well-being of both the animals and fellow visitors.

2. Animal Welfare

a. Respect for Animals: Visitors must respect the animals' natural behaviors and habitats. Do not harass, tease, or attempt to feed the animals unless explicitly allowed.

b. No Littering: Littering inside animal enclosures is strictly prohibited. Please use designated waste disposal bins.

c. No Unauthorized Touching: Do not touch, feed, or attempt to pet animals without zookeeper supervision and explicit permission.

d. Photography and Filming: Flash photography and loud noises are often distressing to animals. Please follow guidelines provided by zoo staff.

3. Visitor Conduct

a. Respectful Behavior: Visitors are expected to behave respectfully towards fellow visitors, staff, and animals. Any disruptive or abusive behavior will not be tolerated.

b. Children Supervision: Adults must supervise children at all times to ensure their safety and the safety of the animals.

c. No Climbing or Crossing Barriers: Climbing fences or barriers is strictly prohibited. Follow designated paths and viewing areas.

4. Safety Measures

a. Emergency Procedures: Familiarize yourself with emergency exits and follow staff instructions in the event of an emergency.

b. First Aid: First aid stations are available throughout the zoo. In case of injury or illness, seek assistance from zoo staff.

5. Prohibited Items

a. Weapons: Possession of weapons, including firearms, knives, or any other dangerous objects, is strictly prohibited.

b. Pets: Bringing pets into the zoo is not allowed for the safety and comfort of both animals and visitors.

6. Tickets and Admission

a. Ticket Purchases: Tickets are non-refundable and non-transferable. Please retain your ticket for the duration of your visit.

b. Admission Rules: Adherence to age and height restrictions may apply to certain attractions. Please refer to posted signs for details.

7. Zoo Closure and Refunds

a. Closure: The zoo reserves the right to close or restrict access to certain areas for maintenance, safety, or other reasons.

b. Refunds: In the event of unforeseen closures, we will make reasonable efforts to provide refunds or exchange tickets.

8. Privacy Policy

a. Personal Information: We may collect and use your personal information in accordance with our privacy policy, available on our website.

9. Lost and Found

a. Lost Items: The zoo is not responsible for lost or stolen items. If you lose something, please contact our Lost and Found department.

10. Agreement Modification

a. Changes: The zoo reserves the right to modify these terms and services at any time without notice..</h4>
            
            </div>

            <div className='about1'>
            <h4 className='design1'>...........................................................................................................................................</h4>
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
                Donation
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

// export default SofaPage;
export default connect(null, mapDispatchToProps)(Termsa);
