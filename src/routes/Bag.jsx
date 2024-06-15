import BagSummary from "../components/BagSummary";
import BagContainerItems from "../components/BagContainerItems";

const Bag = () => {
  return (
    <>
      <main>
        <div className="bag-page">
          <BagContainerItems />
          <BagSummary />
        </div>
      </main>
    </>
  );
};
export default Bag;
