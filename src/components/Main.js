import { addToCart } from "../redux/action";
import { useDispatch } from "react-redux";

function Main() {
  const dispatch = useDispatch();
  const product = {
    name: "I phone",
    type: " mobile",
    price: 1000,
    color: "red",
  };
  return (
    <div>
      <button onClick={() => dispatch(addToCart(product))}> Add TO Cart</button>
    </div>
  );
}

export default Main;
