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
        <div className="bag-page">
          {finalItems.length > 0 ? (
            finalItems.map((item) => (
              <BagContainerItems key={item.id} item={item} />
            ))
          ) : (
            <BagEmpty />
          )}
          <BagSummary />
        </div>
      </main>
    </>
  );
};
export default Bag;
