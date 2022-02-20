const Button = (props) => {
  const addItemHandler = () => {
    props.onClick({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: 1,
    });
  };
  return (
    <div>
      <button onClick={addItemHandler}>Add</button>
    </div>
  );
};
export default Button;
