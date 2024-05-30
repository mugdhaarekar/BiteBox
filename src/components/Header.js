import React, { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import BiteBoxlogo from "../../BiteBoxlogo.png";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const userName = useContext(UserContext);

  //Subscribing to store
  const cartItems = useSelector((state) => state.items);
  //If no dependency array - useEffect called on every component render
  //If dependency array is empty  =[]- useEffect called only on initial render(just once)
  //If dependency array = [buttonName] - useEffect called whenever buttonName updates
  useEffect(() => {}, [buttonName]);
  return (
    <div className="flex justify-between bg-green-100 shadow-lg mb-2 items-center h-28">
      <div className="">
        <img className="w-48" src={BiteBoxlogo} />
      </div>
      <div className="">
        <ul className="flex m-4">
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 font-bold text-lg">
            <Link to="/cart">Cart 🛒 ({cartItems.length} item)</Link>
          </li>
          <button
            className="px-4"
            onClick={() => {
              buttonName === "Login"
                ? setButtonName("Logout")
                : setButtonName("Login");
            }}
          >
            {buttonName}
          </button>
          <li className="px-4 font-bold">{userName.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
