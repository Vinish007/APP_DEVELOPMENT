import React from 'react';
import Navbar from './NabBar';
import { Link } from 'react-router-dom';
import Footer from './footer';
import '../src/Cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from './cartActions';
import { addToCart } from './cartActions';

function Donate() {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleIncrementQuantity = (itemId) => {
    dispatch(incrementQuantity(itemId));
  };
  
  const handleDecrementQuantity = (itemId) => {
    dispatch(decrementQuantity(itemId));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const products = [
    {
      name: 'FRIHETEN',
      price: 56990,
      image: 'https://www.ikea.com/in/en/images/products/friheten-corner-sofa-bed-with-storage-hyllie-dark-grey__0690261_pe723182_s5.jpg?f=s',
      description: 'Corner sofa-bed with storage, Hyllie dark grey',
    },
    {
      name: 'LAGKAPTEN / ALEX',
      price: 10890,
      image: 'https://www.ikea.com/in/en/images/products/lagkapten-alex-desk-white-anthracite-white__1184966_pe898187_s5.jpg?f=s',
      description: 'Desk, white anthracite/white, 140x60 cm (55 1/8x23 5/8 ")',
    },
    {
      name: 'SONGESAND',
      price: 24990,
      image: 'https://www.ikea.com/in/en/images/products/songesand-bed-frame-with-4-storage-boxes-brown-luroey__1101593_pe866767_s5.jpg?f=xxs',
      description: 'Bed frame with 4 storage boxes, brown/Luröy, 160x200 cm (63x78 3/4 ")',
    },
    // Add other products here
  ];

  return (
    <>
      <Navbar />

      <div className='stycart'>
        <h2 className='word'>Be Wild and free</h2>
      </div>

      <div className='cont1'>
        <div className='bord'>
          <div className='inside'>
            <h5><b>Have an account?</b></h5>
            <Link to="/signin">Join or log in </Link><p>for a smoother checkout.</p>
          </div>
          <div className='insidelogo'>
            <img src="https://images.pexels.com/photos/1145513/pexels-photo-1145513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width="25" height="25" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
           {/*   <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />*/}
            </img >
          </div>
        </div>
      </div>

      <div className='cart-main'>
        <div className="cart-container">
          <h4>Selected Animals</h4>
          <ul>
            {cartItems.map((item, index) => (
              <li className="cart-item" key={index}>
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <span className="cart-item-name">{item.name}</span> -{' '}
                <span className="cart-item-price">{item.price}</span>
                <button className="remove-button" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                <button className="increment-button" onClick={() => handleIncrementQuantity(item.id)}>+</button>
                <span>{item.quantity}</span>
                <button className="decrement-button" onClick={() => handleDecrementQuantity(item.id)}>-</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="total-price">
          <p>Total Price: {totalPrice}</p>
        </div>
      </div>

      <div className='rec'>
        <h4 className='recdesign'><b>HELP</b></h4>
      </div>
      <div className='dir'>
        {products.map((product, index) => (
          <div key={index} className='card1'>
            <img src="https://images.pexels.com/photos/1145513/pexels-photo-1145513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='card-img-top' alt='...' />
            <div className='card-body'>
              <h5 className='card-title'>{product.name}</h5>
              <p className='price'> </p>
              
              <button
                id='btn1'
                className='btn btn-primary'
                onClick={() => addToCart(product)}
              >
                DONATE
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Donate;
