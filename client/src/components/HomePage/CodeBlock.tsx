import type React from "react";
import HighlightedBtn from "./HighlightedBtn";

interface CodeBlockProps {
  heading: React.ReactNode;
  para: string;
  btnText1: string;
  btnText2: string;
  isReverse: boolean;
}

const data: string[] = [
  "<!DOCTYPE html>",
  "<html>",
  "head><title>Example</title><linkrel='stylesheet'href='styles.css'>",
  "/head>",
  "body>",
  "h1><ahref='/'>Header</a>",
  "/h1>",
  "nav><ahref='one/'>One</a><ahref='two/'>Two</a><ahref='three/'>Three</a>",
  "/nav>",
];

const CodeBlock = ({
  heading,
  para,
  btnText1,
  btnText2,
  isReverse,
}: CodeBlockProps) => {
  return (
    <div className={`flex flex-row items-center justify-between ${isReverse ? "flex-row-reverse" : ""}`}>
      {/* left part */}
      <div className={`flex flex-col gap-1 w-[40%]`}>
        <h1>{heading}</h1>
        <p className="wrap-break-word text-left text-[#838894] font-semibold text-[16px] leading-6">
          {para}
        </p>
        <div className="mt-6">
          <div className="flex items-center gap-4">
            <HighlightedBtn
              btnText={btnText1}
              path="signup"
              isPrimaryBtn={true}
            />
            <HighlightedBtn
              btnText={btnText2}
              path="login"
              isPrimaryBtn={false}
            />
          </div>
        </div>
      </div>

      {/* right part */}
      <div className="shadow-xs shadow-amber-300 px-2 py-4 w-[40%]">
        {data.map((line: string, index: number) => (
          <div className="flex items-center gap-4 break-all">
            <p className="text-white/80 font-semibold">{index + 1}</p>
            <p
              className={`${index === 0 ? "text-[#E7BC5B]" : ""} ${
                index === 3 ? "text-[#eb483c]" : ""
              } ${index === 5 ? "text-[#eb483c]" : ""} ${
                index === 8 ? "text-[#eb483c]" : ""
              } ${index === 1 ? "text-white/80" : ""} font-medium wrap-break-word text-wrap text-left `}
            >
              {line}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodeBlock;
