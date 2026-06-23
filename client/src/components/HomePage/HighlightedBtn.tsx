import { Link } from "react-router-dom";

const HighlightedBtn = ({btnText, path, isPrimaryBtn}: {btnText: string, path: string, isPrimaryBtn: boolean}) => {
  return (
    <Link className={`border border-[#161D29] rounded-lg px-6 py-3 ${isPrimaryBtn ? "bg-[#FFD60A] text-[#000814]" : "bg-[#161D29] text-[#F1F2FF]"} font-medium text-center cursor-pointer`} to={path}>
        {btnText}
    </Link>
  )
};

export default HighlightedBtn;
