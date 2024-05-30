import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  const handleShowHide = (index) => {
    setShowIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  if (resInfo == null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="my-6 font-bold text-2xl">{name}</h1>
      <p className="my-2 font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      {categories.map((category, index) => {
        return (
          <RestaurantCategory
            data={category?.card?.card}
            key={category?.card?.card?.title}
            showItems={index === showIndex}
            setShowIndex={() => handleShowHide(index)}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
