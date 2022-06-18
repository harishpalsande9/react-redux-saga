import logo from "./logo.svg";
import "./App.css";
import { addToCart } from "./redux/action";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const product = {
    name: "I phone",
    type: " mobile",
    price: 1000,
    color: "red",
  };
  return (
    <div className="App">
      <button onClick={() => dispatch(addToCart(product))}> Add TO Cart</button>
    </div>
  );
}

export default App;
