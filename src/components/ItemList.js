import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div className="flex justify-between my-4" key={item.card.info.id}>
          <div className="text-left p-2 m-2 border-b-2 border-gray-200">
            <div className="flex flex-col  w-9/12">
              <span className="font-semibold">{item.card.info.name}</span>
              <span className="text-sm font-semibold">
                ₹
                {item.card.info.defaultPrice / 100 ||
                  item.card.info.price / 100}
              </span>
            </div>
            <p className="text-xs font-light">{item.card.info.description}</p>
          </div>
          {item.card.info.imageId ? (
            <div className="w-3/12 p-4">
              <div className="absolute mx-12 mt-[-15px]">
                <button
                  className="p-2 bg-black shadow-lg border border-black text-green-400 font-bold rounded-lg"
                  onClick={() => handleAddItem(item)}
                >
                  ADD+
                </button>
              </div>
              <img
                src={CDN_URL + item.card.info?.imageId}
                className="rounded-lg w-full min-w-[170px]"
              />
            </div>
          ) : (
            <div></div>
          )}
        </div>
      ))}
    </div>
  );
};
export default ItemList;
