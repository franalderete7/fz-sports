import { React, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem, getPlaylists } from "../actions/cartAction";
import './Cart.css'


const Cart = () => {

const dispatch = useDispatch();
const counter = useSelector((state) => state.numOfItems)
const state = useSelector((state) => state.playlists);
  
  console.log(state)

    useEffect(() => {
         dispatch(getPlaylists())
      }, [dispatch]);
  
      if (!state) {
        return <div>Loading...</div>;
      }

  return (
    <div id="cart">
      <h2>Number of items in Cart: {counter}</h2>
      <button
        onClick={() => {
          dispatch(addItem());
        }}
      >
        Add Item to Cart
      </button>
      <button
        disabled={counter > 0 ? false : true}
        onClick={() => {
          dispatch(deleteItem());
        }}
      >
        Remove Item to Cart
      </button>
      <div>
        {state.map((item, key) =>
        <div id="container" key={key}>
        <img id="image" src='./river.png' alt='river' />
        <h3 id="text-image">{item.title.original}</h3>
        <p id="text-image">{item.description.plain.original}</p>
        </div>
        )}
      </div>
    </div>
  );
}

export default Cart;