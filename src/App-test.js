import { Fragment } from "react";
import AvailableMealsTest from "./components/AvailableMealsTest";
import Button from "./UI/Button";
import Logo from "./UI/Logo";

function App() {
  return (
    <Fragment>
      <div>
        header
        <Logo />
        <Button />
      </div>
      <div>
        main
        <AvailableMealsTest />
        <div>cart-modal</div>
        <div>checkout-form</div>
      </div>
      <div>footer</div>
    </Fragment>
  );
}
export default App;
