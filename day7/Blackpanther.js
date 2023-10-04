import React, {useContext,useState,useEffect} from 'react'
import Navbar from './NabBar';
import Footer from './footer';
// import { Link, useNavigate } from 'react-router-dom'
import { SearchContext } from './searchContext';
import { connect } from 'react-redux';
import { addToCart } from './cartActions';
import axios from 'axios';
function Blackpanther({ addToCart }) {
    // const [cartItems, setCartItems] = useState([]);
    const {searchQuery}=useContext(SearchContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetchProductsByType("chair"); // Fetch products of type "sofa" when the component mounts
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
            <h2 className='sty'></h2>
        </div>
        <div className='ig'>
            <div class="responsive">
                <div class="gallery">
                    <a target="_blank" href="https://images.pexels.com/photos/7867206/pexels-photo-7867206.jpeg?auto=compress&cs=tinysrgb&w=600">
                        <img src="https://images.pexels.com/photos/7867206/pexels-photo-7867206.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Double beds" width="600" height="300" />
                    </a>
                    <div class="desc">Panther</div>
                </div>
            </div>
          {/*  <div class="responsive">
                <div class="gallery">
                    <a target="_blank" href="https://www.ikea.com/in/en/images/products/langfjaell-conference-chair-with-armrests-gunnared-blue-white__0853611_pe671477_s5.jpg?f=xxs">
                        <img src="https://www.ikea.com/in/en/images/products/langfjaell-conference-chair-with-armrests-gunnared-blue-white__0853611_pe671477_s5.jpg?f=xxs" alt="sofa beds" width="600" height="300" />
                    </a>
                    <div class="desc">Office Chair</div>
                </div>
    </div>
            <div class="responsive">
                <div class="gallery">
                    <a target="_blank" href="https://www.ikea.com/in/en/images/products/matchspel-gaming-chair-bomstad-black__0997853_pe822829_s5.jpg?f=xxs">
                        <img src="https://www.ikea.com/in/en/images/products/matchspel-gaming-chair-bomstad-black__0997853_pe822829_s5.jpg?f=xxs" alt="sofa beds" width="600" height="300" />
                    </a>
                    <div class="desc">Gaming chair</div>
                </div>
    </div>*/}
            </div>
            <div class="clearfix"></div>
            <div className='about1'>
              <h4>In 1788, Jean-Claude Delamétherie described a black leopard that was kept in the Tower of London and had been brought from Bengal.[1] In 1794, Friedrich Albrecht Anton Meyer proposed the scientific name Felis fusca for this cat, the Indian leopard (P. p. fusca).[2][3] In 1809, Georges Cuvier described a black leopard kept in the Ménagerie du Jardin des plantes that had been brought from Java. Cuvier proposed the name Felis melas, the Javan leopard (P. p. melas).[4][3] By the late 19th century, the occurrence of black and spotted leopard cubs in the same litter had been repeatedly recorded in India. Black leopards were thought to be more common in Travancore and in the hills of southern India than in other parts of the country.[5] Black leopards were also frequently encountered in southern Myanmar.[6] By 1929, the Natural History Museum, London had skins of black leopards collected in South Africa, Nepal, Assam and Kanara in India.[7] Black leopards were thought to be common on the Malay Peninsula and on Java.[8]

A black African leopard (P. p. pardus) was sighted in the alpine zone of Mount Kenya in the winter of 1989–1990.[9] In Kenya's Laikipia County, a black leopard was photographed by a camera trap in 2007; in 2018, a female subadult black leopard was repeatedly recorded together with a spotted leopard about 50 km (31 mi) farther east in a grassland.[10]

In India's Western Ghats, black leopards were sighted and photographed in 2010 and 2012 in the Kas Plateau Reserved Forest, and in Bhadra Wildlife Sanctuary in 2012.[11] In 2015, a dead black leopard was found on a highway near Satara in Maharashtra.[12] In May 2012, a black leopard was photographed at an elevation of 4,300 m (14,100 ft) in Nepal's Kanchenjunga Conservation Area.[13]

At least one black leopard was photographed in mixed deciduous forest in Thailand's Kaeng Krachan National Park during a one-year-long camera trapping survey from 2003 to 2004.[14] In 2009, black leopards were photographed more often than spotted leopards in Kui Buri National Park.[15] Most leopards recorded at 16 sites south of the Kra Isthmus between 1996 and 2009 were black, indicating a near-fixation of melanism in Peninsular Malaysia.[16] In 2019, a black individual was photographed outside a protected area in Jeli District.[17] Both black and spotted leopards were recorded in Gunung Gede Pangrango National Park in West Java between 2005 and 2017</h4>
            <h5 className='design1'>...........................................................................................................................</h5>
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
                        Donate
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

// export default ChairPage;
export default connect(null, mapDispatchToProps)(Blackpanther);