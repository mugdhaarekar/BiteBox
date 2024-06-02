import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Body = () => {
  //Local State variable - super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]); //same as let listofres =[]
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  //is called after the component is completely rendered
  useEffect(() => {
    fetchData();
  }, []);

  const RestaurantCardOpen = withOpenLabel(RestaurantCard);
  const fetchData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.11610&lng=79.07060&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    ); //fetch() is given to us by browsers which returns a promise
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants //Optional chaining '?'
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline. Please check your internet connection.
      </h1>
    );
  // let listOfRestaurants = [];
  //Normal JS vAariable scope- inside Body
  const { setUserName, loggedInUser } = useContext(UserContext);
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="search-box border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              //Filter resto cards and update ui
              //Searchtext
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
          <button
            className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurants(filteredList);
              //Filter logic here
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-between">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant?.info?.id}
          >
            {restaurant?.info?.isOpen === false ? (
              <RestaurantCardOpen resData={restaurant.info} />
            ) : (
              <RestaurantCard
                key={restaurant.info.id}
                resData={restaurant.info}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
