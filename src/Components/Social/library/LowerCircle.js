import React from "react";
import LowerCircleStyle from "./LowerCircleStyle";
const LowerCircle = () => {
  return (
    <LowerCircleStyle>
      <svg width="1085" height="673" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            x1="100%"
            y1="69.237%"
            x2="9.399%"
            y2="32.159%"
            id="a"
          >
            <stop stopColor="#8A4389" stopOpacity="0" offset="0%" />
            <stop stopColor="#512051" offset="100%" />
            <stop stopColor="#512051" offset="100%" />
            <stop stopColor="#512051" offset="100%" />
          </linearGradient>
        </defs>
        <path
          d="M355 800c74.356-153.934 215.022-251.268 422-292 310.466-61.099 192.94-122.724 345.47-245.025C1224.157 181.442 1330 136.116 1440 127v673H355z"
          transform="translate(-355 -127)"
          fill="url(#a)"
          fillRule="evenodd"
          opacity=".05"
        />
      </svg>
    </LowerCircleStyle>
  );
};

export default LowerCircle;
