import { useState } from "react";
import useInput from "../hooks/use-input";

//Create a generic custom hook that takes the validation function as argument
//Return inputIsValid, inputRef
const CheckoutFormWithState = (props) => {
  const {
    // value: nameInput,
    isValid: nameInputIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
  } = useInput();
  // const [nameInput, setNameInput] = useState("");

  const [surnameInput, setSurnameInput] = useState("");
  const [addressInput, setAddressInput] = useState("");

  // const [nameInputIsValid, setNameInputIsValid] = useState(true);
  // const [surnameInputIsValid, setSurnameInputIsValid] = useState(false);
  // const [addressInputIsValid, setAddressInputIsValid] = useState(false);

  const surnameChangeHandler = (event) => {
    setSurnameInput(event.target.value);
    console.log(surnameInput);
  };
  const addressChangeHandler = (event) => {
    setAddressInput(event.target.value);
    console.log(addressInput);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const userIsValid = nameInputIsValid && surnameInput.trim() !== "";
    const addressIsValid = addressInput.length >= 4;

    if (userIsValid && addressIsValid) {
      console.log("form is valid");
    } else {
      console.log("form is invalid");
      return;
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={nameChangeHandler}></input>
        {nameInputHasError && <p>Name invalid</p>}
      </div>
      <div>
        <label htmlFor="surname">Surname</label>
        <input type="text" id="surname" onChange={surnameChangeHandler}></input>
      </div>
      <div>
        <label htmlFor="">Postcode</label>
        <input type="text" id="address" onChange={addressChangeHandler}></input>
      </div>
      <button>Submit</button>
      <button type="button" onClick={props.onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default CheckoutFormWithState;
