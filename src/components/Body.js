import RestoCard from "./RestoCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {
  //Local State variable - super powerful variable
  const [listOfRestaurants, setlistOfRestaurants] = useState([]); //same as let listofres =[]

  //is called after the component is completely rendered
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    ); //fetch() is given to us by browsers which returns a promise

    const json = await data.json();
    setlistOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants //Optional chaining '?'
    );
  };
  // let listOfRestaurants = [];
  //Normal JS vAariable scope- inside Body

  /*
  let listOfRestaurantsJS = [
    {
      data: {
        id: "334475",
        name: "KFC",
        cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 36,
        avgRating: "3.8",
      },
    },
    {
      data: {
        id: "334476",
        name: "Dominos",
        cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 36,
        avgRating: "4.2",
      },
    },
    {
      data: {
        id: "334477",
        name: "McD",
        cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 36,
        avgRating: "4.1",
      },
    },
  ];
*/

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setlistOfRestaurants(filteredList);
            //Filter logic here
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <>
            <RestoCard key={restaurant?.info?.id} resData={restaurant.info} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Body;
