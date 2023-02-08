import "./App.css";
import Navbar from "./layouts/Navbar";
import Typography from "@mui/material/Typography";
import Graphicon from "./assets/Logo.svg";

function App() {
  document.title = "Graphs";
  return (
    <>
      <Navbar />
      <Typography variant="h5" sx={{ textAlign: "center", fontWeight: "bold" }}>
        Welcome to Graphs
      </Typography>
      <Typography sx={{ textAlign: "center", marginTop: "35px" }}>
        <img src={Graphicon} width={200} alt="graphicon" />
      </Typography>
      <Typography sx={{ textAlign: "center", marginTop: "20px" }}>
        Explore <b>Navbar</b> to see types of Graphs
      </Typography>
    </>
  );
}

export default App;
