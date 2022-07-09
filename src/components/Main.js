import { addToCart, emptyCart, removeFromCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux";
function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  console.warn("Data In main Component ", data);
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
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
      <br />
      <div>
        <button onClick={() => dispatch(productList())}>
          Get Product List
        </button>
      </div>
    </div>
  );
}

export default Main;
