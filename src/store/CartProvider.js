// import { useState } from "react";
import { useReducer } from "react";
import CartContext from "./cart-context";

// - find the index of the item with the name of the item we are adding
// - fetch the item by index and change the amount
// - return an updated array with the updated item

const CartProvider = (props) => {
  const defaultCartState = {
    items: [],
    totalAmount: 0,
  };

  const cartReducer = (state, action) => {
    if (action.identifier === "ADD") {
      const existingItemIndex = state.items.findIndex(
        (item) => item.name === action.item.name
      );

      const existingItem = state.items[existingItemIndex];
      let updatedItems;
      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];

        updatedItems[existingItemIndex] = updatedItem;

        console.log(
          "current array" + state.items.map((item) => item.name + item.amount)
        );
        console.log(
          "updated array" + updatedItems.map((item) => item.name + item.amount)
        );
      } else {
        updatedItems = state.items.concat(action.item);
      }

      return {
        items: updatedItems,
        totalAmount: state.totalAmount + 1,
      };
    }
    if (action.identifier === "REMOVE") {
      const itemToRemoveIndex = state.items.findIndex(
        (item) => item.id === action.id
      );

      const existingItemToRemove = state.items[itemToRemoveIndex];

      let updatedItems;
      if (existingItemToRemove) {
        const updatedItem = {
          ...existingItemToRemove,
          amount: existingItemToRemove.amount - 1,
        };
        if (updatedItem.amount < 1) {
          updatedItems = state.items.filter((item) => item.id !== action.id);
        } else {
          updatedItems = [...state.items];
          updatedItems[itemToRemoveIndex] = updatedItem;
        }
      }
      return {
        items: updatedItems,
        totalAmount: state.totalAmount - 1,
      };
      // fetch the item by index
      // change the amount of that item
      //return updated items array
    }
    return defaultCartState;
  };

  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({ identifier: "ADD", item: item });
  };
  const removeItemHandler = (id) => {
    dispatchCartAction({ identifier: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  // const [cartState, setCartState] = useState({
  //   items: [],
  //   totalAmount: 0,
  // });
  // const addItemHandler = (item) => {
  //   console.log("calling add item");
  //   setCartState({
  //     items: cartState.items.concat(item),
  //     totalAmount: cartState.totalAmount + 1,
  //   });
  // };
  // const cartContext = {
  //   items: cartState.items,
  //   totalAmount: cartState.totalAmount,
  //   addItem: addItemHandler,
  // };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
