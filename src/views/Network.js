import React from "react";
import Navbar from "../layouts/Navbar";
import CssGraph from "../components/CssGraph";
import HighchartGraph from "../components/HighChartGraph";
import { GET_GRAPH_DATA } from "../graphql/GET_GRAPH_DATA";
import { useLazyQuery } from "@apollo/client";

const Network = () => {
  document.title = "Graphs | Network";
  const [values, setValues] = React.useState({ X: [], Y: [] });

  const [GET_DATA, { loading, error }] = useLazyQuery(GET_GRAPH_DATA, {
    onCompleted: (data) => {
      setValues({
        ...values,
        X: data?.graphdata?.[0]?.x,
        Y: data?.graphdata?.[0]?.y,
      });
    },
    onError: (e) => {
      console.log(e);
    },
  });
  if (!Array.isArray(values.X) || !Array.isArray(values.Y)) {
    setValues({ ...values, X: [], Y: [] });
  }

  React.useEffect(() => {
    GET_DATA();
  }, []);

  if (loading) {
    return <>loading...</>;
  }

  if (error) {
    console.log(error);
    return <>error</>;
  }

  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <CssGraph xValues={values.X} yValues={values.Y} />
        <HighchartGraph xValues={values.X} yValues={values.Y} />
      </div>
    </>
  );
};

export default Network;
