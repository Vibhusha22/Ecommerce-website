import BagSummary from "./BagSummary";
import BagContainerItems from "./BagContainerItems";

const Bag = () => {
  return (
    <>
      <main>
        <div class="bag-page">
          <BagContainerItems></BagContainerItems>
          <BagSummary />
        </div>
      </main>
    </>
  );
};
export default Bag;
