import { useState } from "react";
import Header from "./components/Header";
import AvailableMeals from "./components/AvailableMeals";
import CartWithState from "./components/CartWithState";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [cartVisible, setCartVisible] = useState(false);

  const hideCartHandler = () => {
    setCartVisible(false);
  };

  const showCartHandler = () => {
    setCartVisible(true);
  };
  return (
    <CartProvider>
      <Header onShow={showCartHandler} />
      <AvailableMeals />
      {cartVisible && <CartWithState onHide={hideCartHandler} />}
    </CartProvider>
  );
};

export default App;
