import React from 'react';
import { useEffect } from 'react';
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals } from '../features/cart/CartSlice';
import { toggle } from '../features/modal/modalSlice';

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  if (amount < 1) {
    return (
      <section className='cart'>
        <header>
          <h2>Your cart</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className='cart'>
      <header>
        <h2>Your cart</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button
          className='btn clear-btn'
          onClick={() => {
            dispatch(toggle());
          }}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
