import { addToCart, emptyCart, removeFromCart } from "../redux/action";
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
      <div>
        <button onClick={() => dispatch(addToCart(product))}>
          Add TO Cart
        </button>
      </div>
      <br />
      <div>
        <button onClick={() => dispatch(removeFromCart(product.name))}>
          Remove from Cart
        </button>
      </div>
      <br />
      <div>
        <button onClick={() => dispatch(emptyCart(product))}>Empty Cart</button>
      </div>
    </div>
  );
}

export default Main;
