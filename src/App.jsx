import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import Modal from './components/Modal';
import { calculateTotals, getCartItems } from './features/cart/cartSlice';

function App() {
  const { toggle } = useSelector((state) => state.modal);
  const { cartItems, fetching } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (fetching) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      <Navbar />
      <CartContainer />
      {toggle && <Modal />}
    </main>
  );
}

export default App;
