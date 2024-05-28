import { CDN_URL } from "../utils/constants";

const RestoCard = (props) => {
  //   const { resImg, resName, cuisine, rating, delTime } = props;
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData; //Optional Chaining
  return (
    <div className="my-4 mx-6 p-4 w-64 h-[30rem] shadow-xl rounded-lg bg-blue-100 hover:border border-solid border-green-500  ">
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
export default RestoCard;
