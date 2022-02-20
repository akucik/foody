import React, { Fragment, useContext } from "react";
import Button from "../UI/Button";
import CartContext from "../store/cart-context";

const MealsData = [
  {
    id: "m1",
    name: "sushi",
    price: "13.99",
  },
  {
    id: "m2",
    name: "miso soup",
    price: "2.99",
  },
  {
    id: "m3",
    name: "bao bao",
    price: "8.99",
  },
];

const AvailableMeals = () => {
  const cartCtx = useContext(CartContext);

  const meals = MealsData.map((meal) => (
    <li key={meal.id}>
      {meal.name}
      {meal.price}
      <Button
        onClick={cartCtx.addItem}
        {...meal}

        // name={meal.name}
        // price={meal.price}
        // key={meal.id}
      />
    </li>
  ));

  return (
    <Fragment>
      <ul>{meals}</ul>
    </Fragment>
  );
};
export default AvailableMeals;
