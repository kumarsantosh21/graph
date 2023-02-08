import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const HighchartGraph = ({ xValues, yValues }) => {
  let sample = [];
  yValues?.map((yData, i) => {
    sample = [...sample, parseInt(yData)];
    return sample;
  });
  const options = {
    chart: {
      backgroundColor: "white",
      type: "area",
      height: "350px",
    },
    xAxis: {
      categories: xValues,
    },
    title: {
      text: '<h1 id="chart-title">Linear Graph  </h1>',
      align: "left",
    },
    plotOptions: {
      series: {
        fillColor: {
          linearGradient: [0, 0, 0, 0],
          stops: [
            [0, "#7cb5ec"],
            [1, "rgba(124,181,236,0)"],
          ],
        },
      },
    },
    series: [
      {
        name: ["Attendance"],
        data: sample,
        tooltip: {
          valuePrefix: "",
          valueSuffix: "%",
          useHTML: true,
          enabled: true,
          backgroundColor: null,
          borderWidth: 1,
        },
      },
    ],
  };

  return (
    <>
      <div style={{ width: "350px" }}>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </>
  );
};

export default HighchartGraph;
