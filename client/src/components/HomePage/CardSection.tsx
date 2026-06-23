import HighlightedBtn from "./HighlightedBtn";
import HighlightedText from "./HighlightedText";
import Tab from "./Tab";

const CardSection = () => {
  return (
    <div className="w-[80%] mx-auto flex justify-center mt-36">
      <div className="flex flex-col gap-3">
        {/* heading */}
        <div className="flex flex-col gap-2">
          <h1 className="text-[#F1F2FF] font-semibold text-4xl text-center">
            Unlock the <HighlightedText text="Power of Code" />
          </h1>
          <p className="text-[#838894] font-medium text-center">
            Learn to Build Anything You Can Imagine
          </p>
        </div>

        {/* tab */}
        <Tab />

        {/* buttons */}
        <div className="w-full flex justify-center mt-8">
          <div className="flex items-center gap-6">
            <HighlightedBtn btnText="Explore Full Catalog" path="/catalog" isPrimaryBtn={true} />
            <HighlightedBtn btnText="Learn More" path="/login" isPrimaryBtn={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
