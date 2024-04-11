import { CDN_URL } from "../utils/constants";

const RestoCard = (props) => {
  //   const { resImg, resName, cuisine, rating, delTime } = props;
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData; //Optional Chaining
  return (
    <div className="res-card">
      <img src={CDN_URL + cloudinaryImageId} height="200rem" />
      <h3>{name}</h3>
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
