import CartContext from "../store/cart-context";
import { useContext } from "react";

const Header = (props) => {
  const cartCtx = useContext(CartContext);

  const totalMeals = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (
    <div>
      <h2>Foody</h2>
      <button onClick={props.onShow}>
        <div>Your Cart</div>
        <span>{totalMeals}</span>
      </button>
    </div>
  );
};
export default Header;
