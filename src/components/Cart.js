import { useContext, useState } from "react";
import CartContext from "../store/cart-context";
import Modal from "../UI/Modal";
import CheckoutForm from "./CheckoutForm";

const AddButton = (props) => {
  const addItemsButtonHandler = () => {
    props.onAdd({
      name: props.name,
      amount: 1,
      price: props.price,
      id: props.id,
    });
  };
  const removeItemsButtonHandler = () => {
    props.onRemove(props.id);
  };

  return (
    <div>
      <button onClick={addItemsButtonHandler}>+</button>
      <button onClick={removeItemsButtonHandler}>-</button>
    </div>
  );
};

const Cart = (props) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const cartCtx = useContext(CartContext);

  const checkoutHandler = () => {
    setShowCheckout(true);
  };

  const hideCheckoutHandler = () => {
    setShowCheckout(false);
  };

  const updatedMeals = cartCtx.items.map((item) => (
    <li key={item.id}>
      {item.amount} {item.name} {item.price}
      <AddButton
        onAdd={cartCtx.addItem}
        onRemove={cartCtx.removeItem}
        name={item.name}
        price={item.price}
        id={item.id}
      />
    </li>
  ));

  const buttonAction = (
    <div>
      <button onClick={props.onHide}>Close</button>
      <button onClick={checkoutHandler}>Order</button>
    </div>
  );

  return (
    <Modal onClick={props.onHide}>
      <ul>{updatedMeals}</ul>
      {showCheckout && <CheckoutForm onCancel={hideCheckoutHandler} />}

      {!showCheckout && buttonAction}
    </Modal>
  );
};
export default Cart;
