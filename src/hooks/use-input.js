import { useState } from "react";

const useInput = () => {
  const [valueInput, setValueInput] = useState("");
  const [valueTouched, setValueTouched] = useState(false);

  const valueIsValid = valueInput.trim() !== "";
  const hasError = !valueIsValid && valueTouched;

  const valueChangeHandler = (event) => {
    setValueInput(event.target.value);
    setValueTouched(true);
  };

  return {
    value: valueInput,
    isValid: valueIsValid,
    isTouched: valueTouched,
    hasError,
    valueChangeHandler,
  };
};
export default useInput;
