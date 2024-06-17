import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/BagSlice";

function HomeItems({ item }) {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bagItems);
  const elementFound = bagItems.indexOf(item.id) >= 0;

  const handleAddClick = () => {
    dispatch(bagActions.addToBag(item.id));
  };
  const handleRemoveClick = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  return (
    <>
      {" "}
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>

        <div class="d-grid gap-2 col-15 mx-auto" style={{ marginTop: "8px" }}>
          {elementFound ? (
            <button
              type="button"
              class="btn btn-danger"
              onClick={handleRemoveClick}
            >
              Remove from Bag
            </button>
          ) : (
            <button
              type="button"
              class="btn btn-success"
              onClick={handleAddClick}
            >
              Add to Bag
            </button>
          )}
        </div>
      </div>
    </>
  );
}
export default HomeItems;
