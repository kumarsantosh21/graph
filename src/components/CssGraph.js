import React from "react";
import "../App.css";

const CssGraph = ({ xValues, yValues }) => {
  yValues = yValues.map(Number);
  const leftPosition = 200 / yValues?.length;
  let left = 0;
  let bottom = 0;
  let graphComponent = yValues?.map((data, i) => {
    left = left + leftPosition;
    bottom = (yValues?.[i] / Math.max(...yValues)) * 200;
    if (!bottom) {
      bottom = 0;
    }
    const bottomNext = (yValues?.[i + 1] / Math.max(...yValues)) * 200;
    const firstArg = bottom - bottomNext;
    let lengthOfLine = Math.sqrt(
      Math.pow(firstArg, 2) + Math.pow(leftPosition, 2)
    );
    if (!lengthOfLine) {
      lengthOfLine = 0;
    }
    let degree = Math.asin(firstArg / lengthOfLine) * (180 / Math.PI);
    return (
      <li key={i}>
        <div
          className="data-point"
          style={{
            bottom: bottom === 0 ? "0px" : Math.abs(bottom - 6.5) + "px",
            left: Math.abs(left - 6) + "px",
            zIndex: 1,
          }}
        ></div>
        <div
          className="line-segment"
          style={{
            bottom: bottom + "px",
            left: left + "px",
            width: lengthOfLine + "px",
            transform: `rotate(${degree}deg)`,
            transformOrigin: "left bottom",
          }}
        ></div>
      </li>
    );
  });

  return (
    <>
      <figure className="css-chart" style={{ height: "300px", width: "300px" }}>
        <ul className="line-chart">{graphComponent}</ul>
        <figcaption>series</figcaption>
      </figure>
    </>
  );
};

export default CssGraph;
