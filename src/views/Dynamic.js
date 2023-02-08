import React from "react";
import Navbar from "../layouts/Navbar";
import CssGraph from "../components/CssGraph";
import HighchartGraph from "../components/HighChartGraph";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const Dynamic = () => {
  document.title = "Graphs | Dynamic";

  const [values, setValues] = React.useState({
    X1: "mon",
    X2: "tues",
    X3: "wednes",
    X4: "thurs",
    X5: "fri",
    Y1: 0,
    Y2: 0,
    Y3: 0,
    Y4: 0,
    Y5: 0,
  });
  console.log({ values });
  let xValues = [];
  let yValues = [];

  const textFieldData1 = [
    { label: "X1", defaultValue: "mon" },
    { label: "X2", defaultValue: "tues" },
    { label: "X3", defaultValue: "wednes" },
    { label: "X4", defaultValue: "thrus" },
    { label: "X5", defaultValue: "frid" },
  ];
  const textFieldData2 = [
    { label: "Y1" },
    { label: "Y2" },
    { label: "Y3" },
    { label: "Y4" },
    { label: "Y5" },
  ];

  const handleChange = (e) => {
    if (e.target.value) {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
  };
  xValues = Object.values(values).slice(0, 5);
  yValues = Object.values(values).slice(5);

  if (
    !Array.isArray(xValues) ||
    !Array.isArray(yValues) ||
    xValues.length !== yValues.length
  ) {
    xValues = [];
    yValues = [];
  }
  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Grid container direction="column" width={"200px"}>
          {textFieldData1?.map((data) => {
            return (
              <Grid item key={data?.label}>
                <TextField
                  sx={{ width: "100px", marginTop: "5px" }}
                  label={data?.label}
                  name={data?.label}
                  variant="standard"
                  defaultValue={data?.defaultValue}
                  onChange={handleChange}
                />
              </Grid>
            );
          })}
        </Grid>
        <Grid container direction="column" width={"200px"}>
          {textFieldData2?.map((data) => {
            return (
              <Grid item key={data?.label}>
                <TextField
                  sx={{ width: "100px", marginTop: "5px" }}
                  label={data?.label}
                  name={data?.label}
                  variant="standard"
                  type={"number"}
                  onChange={handleChange}
                  defaultValue={0}
                />
              </Grid>
            );
          })}
        </Grid>
        <CssGraph xValues={xValues} yValues={yValues} />
        <HighchartGraph xValues={xValues} yValues={yValues} />
      </div>
    </>
  );
};

export default Dynamic;
