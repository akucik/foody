import { useRef, useState } from "react";

//Create a generic custom hook that takes the validation function as argument
//Return inputIsValid, inputRef
const CheckoutForm = (props) => {
  // const nameRef = useRef(null);
  // const {
  //   inputIsValid: nameIsValid,
  //   inputValueIsValid: inputNameIsValid,
  // } = useInput(
  //   nameRef,
  //   (currentInput) => currentInput                                                                                                 ''.value.trim().length !== 0
  // );

  const nameRef = useRef();
  const surnameRef = useRef();
  const addressRef = useRef();
  const [nameIsValid, setNameIsValid] = useState(true);
  const [surnameIsValid, setSurnameIsValid] = useState(true);
  const [addressIsValid, setAddressIsValid] = useState(true);

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredSurname = surnameRef.current.value;
    const enteredAddress = addressRef.current.value;

    const inputNameIsValid = enteredName.trim().length !== 0;
    const inputSurnameIsValid = enteredSurname.trim().length !== 0;
    const inputAddressIsValid = enteredAddress.trim().length === 6;

    setNameIsValid(inputNameIsValid);
    setSurnameIsValid(inputSurnameIsValid);
    setAddressIsValid(inputAddressIsValid);

    const formIsValid =
      inputNameIsValid && inputSurnameIsValid && inputAddressIsValid;

    if (!formIsValid) {
      console.log("form validity: form is not valid");
      return;
    } else {
      console.log("enteredName", enteredSurname, enteredAddress);
    }
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div>
        <label htmlFor="name">Name</label>
        <input ref={nameRef} type="text" id="name"></input>
        {!nameIsValid && <p>A field cannot me empty</p>}
      </div>
      <div>
        <label htmlFor="surname">Surname</label>
        <input ref={surnameRef} type="text" id="surname"></input>
        {!surnameIsValid && <p>A field cannot me empty</p>}
      </div>
      <div>
        <label htmlFor="">Postcode</label>
        <input ref={addressRef} type="text" id="address"></input>
        {!addressIsValid && <p>must be 6 characters long!</p>}
      </div>
      <button>Submit</button>
      <button type="button" onClick={props.onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default CheckoutForm;
