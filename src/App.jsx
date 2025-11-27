import { useSelector, useDispatch } from 'react-redux';

import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import Modal from './components/Modal';

function App() {
  const { toggle } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(calculateTotals());
  // }, [cartItems]);

  return (
    <main>
      <Navbar />
      <CartContainer />
      {toggle && <Modal />}
    </main>
  );
}

export default App;
