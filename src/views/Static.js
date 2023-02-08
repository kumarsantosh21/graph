import React from "react";
import Navbar from "../layouts/Navbar";
import CssGraph from "../components/CssGraph";
import HighchartGraph from "../components/HighChartGraph";

const Static = () => {
  document.title = "Graphs | Static";

  let xValues = ["monday", "tuesday", "wednesday", "thursday", "friday"];
  let yValues = [25, 60, 45, 50, 40];
  if (!Array.isArray(xValues) || !Array.isArray(yValues)) {
    xValues = [];
    yValues = [];
  }

  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <CssGraph xValues={xValues} yValues={yValues} />
        <HighchartGraph xValues={xValues} yValues={yValues} />
      </div>
    </>
  );
};

export default Static;
