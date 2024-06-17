import BagSummary from "../components/BagSummary";
import BagContainerItems from "../components/BagContainerItems";
import { useSelector } from "react-redux";
import BagEmpty from "../components/BagEmpty";

const Bag = () => {
  const items = useSelector((store) => store.items);
  const bagItems = useSelector((store) => store.bagItems);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });
  return (
    <>
      <main>
        {finalItems.length > 0 ? (
          <div className="bag-page">
            <div className="bag-items-container">
              {finalItems.map((item) => (
                <BagContainerItems key={item.id} item={item} />
              ))}
            </div>
            <BagSummary />
          </div>
        ) : (
          <BagEmpty />
        )}
      </main>
    </>
  );
};
export default Bag;
