function BagContainerItems() {
  const item = {
    company: "Zara",
    item_name: "T-shirt",
    current_price: "2314",
    original_price: "5246",
    discount_percentage: "40",
    return_period: "7",
    delivery_date: "13/5/2024",
  };
  return (
    <>
      <div className="bag-items-container">
        <div className="bag-item-container">
          <div className="item-left-part">
            <img className="bag-item-img" src="./images/5.jpg" />
          </div>
          <div className="item-right-part">
            <div className="company">{item.company}</div>
            <div className="item-name">{item.item_name}</div>
            <div className="price-container">
              <span className="current-price">Rs {item.current_price}</span>
              <span className="original-price">Rs {item.original_price}</span>
              <span className="discount-percentage">
                ({item.discount_percentage}% OFF)
              </span>
            </div>
            <div className="return-period">
              <span className="return-period-days">
                {item.return_period} days
              </span>{" "}
              return available
            </div>
            <div className="delivery-details">
              Delivery by
              <span className="delivery-details-days">
                {item.delivery_date}
              </span>
            </div>
          </div>

          <div className="remove-from-cart" onclick="removeFromBag(${item.id})">
            X
          </div>
        </div>
      </div>
    </>
  );
}
export default BagContainerItems;
