import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/userContext";

const RestoCard = (props) => {
  //   const { resImg, resName, cuisine, rating, delTime } = props;
  const { resData } = props;
  const userName = useContext(UserContext);
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData; //Optional Chaining
  return (
    <div className="my-4 mx-6 p-4 w-[16rem] h-[32rem] shadow-xl rounded-lg bg-blue-100 hover:border border-solid border-green-500 ">
      <img src={CDN_URL + cloudinaryImageId} height="200rem" />
      <h3 className="font-bold">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <span className="res-card-detail">
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.slaString} </h4>
      </span>
    </div>
  );
};
export const withOpenLabel = (RestoCard) => {
  return (props) => {
    return (
      <div>
        <label className="bg-red-600 absolute text-white m-2 p-2 rounded-lg">
          Closed
        </label>
        <RestoCard {...props} />
      </div>
    );
  };
};
// HOC
//input == RestoCard o/p === RestoCardOpen
export default RestoCard;
