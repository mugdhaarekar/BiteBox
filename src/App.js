import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import { appStore } from "./utils/appStore";
import Cart from "./components/Cart";

const inlineStyle = {
  backgroundColor: "#f0f0f0",
};

// restocard method using individual prop not feasible for large data

const AppLayout = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const data = {
      name: "Mugdha Arekar",
    };
    setUserName(data.name);
  });
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <div>
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/cart", element: <Cart /> },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
