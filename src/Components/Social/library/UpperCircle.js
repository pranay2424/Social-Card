import React from "react";
import UpperCircleStyle from "./UpperCircleStyle";
const UpperCircle = () => {
  return (
    <UpperCircleStyle>
      <svg width="584" height="362">
        <defs>
          <linearGradient
            x1="100%"
            y1="69.212%"
            x2="9.399%"
            y2="32.183%"
            id="a"
          >
            <stop stopColor="#8A4389" stopOpacity="0" offset="0%" />
            <stop stopColor="#512051" offset="100%" />
            <stop stopColor="#512051" offset="100%" />
            <stop stopColor="#512051" offset="100%" />
          </linearGradient>
        </defs>
        <path
          transform="rotate(180 292 181)"
          fill="url(#a)"
          fillRule="evenodd"
          opacity=".05"
          d="M0 362c40.022-82.8 115.736-135.154 227.141-157.064 167.108-32.864 
    103.85-66.012 185.949-131.796C467.823 29.284 524.793 4.904 584 0v362H0z"
        />
      </svg>
    </UpperCircleStyle>
  );
};

export default UpperCircle;
