import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button
        className="p-2 bg-black shadow-lg border border-black text-green-400 font-bold rounded-lg"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && <h1>Cart is empty.</h1>}
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
