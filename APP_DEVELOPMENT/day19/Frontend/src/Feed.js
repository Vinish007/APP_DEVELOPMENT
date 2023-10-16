import React from 'react';
import Navbar from './NabBar';
import { Link } from 'react-router-dom';
import Footer from './footer';
import '../src/Cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from './cartActions';
import { addToCart } from './cartActions';

function Cart() {
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
      name: 'BANANA',
      price: 20,
      image: 'https://th.bing.com/th/id/OIP.vfl3BlPYbVJ-ih9A57dWqwHaEa?w=288&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      description: 'CAGE NUMBER-170',
    },
    {
      name: 'PELLETS',
      price: 10,
      image: 'https://th.bing.com/th/id/OIP.MvrvK1XRqI4ksLES9pdvfgHaE8?pid=ImgDet&w=191&h=127.37994143484626&c=7&dpr=1,3',
      description: 'TANK NUMBER-240',
    },
    {
      name: 'MEAT',
      price: 500,
      image: 'https://th.bing.com/th/id/OIP.rotvEJywOqq1_05xxPDu3gHaEK?w=286&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      description: 'CAGE NUMBER-300',
    },
    // Add other products here
  ];

  return (
    <>
      <Navbar />

      <div className='stycart'>
        <h2 className='word'>SAVE SPECIES</h2>
      </div>

      <div className='cont1'>
        <div className='bord'>
          <div className='inside'>
            <h5><b>Have an account?</b></h5>
            <Link to="/signin">Join or log in </Link><p>for a smoother checkout.</p>
          </div>
          <div className='insidelogo'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            </svg>
          </div>
        </div>
      </div>

      <div className='cart-main'>
        <div className="cart-container">
          <h4>Cart Items</h4>
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
        <h4 className='recdesign'><b>To see</b></h4>
      </div>
      <div className='dir'>
        {products.map((product, index) => (
          <div key={index} className='card1'>
            <img src={product.image} className='card-img-top' alt='...' />
            <div className='card-body'>
              <h5 className='card-title'>{product.name}</h5>
              <p className='price'>Kg. {product.price}</p>
              <p className='card-text'>{product.description}</p>
              <button
                id='btn1'
                className='btn btn-primary'
                onClick={() => addToCart(product)}
              >
                FEED
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Cart;