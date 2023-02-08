import React from "react";
import { useNavigate } from "react-router-dom";
import Graphicon from "../assets/Logo.svg";
import Button from "@mui/material/Button";

const Navbar = () => {
  const navigate = useNavigate();

  const buttonStyle = {
    textTransform: "none",
    borderRadius: "8px",
    color: "black",
  };

  return (
    <>
      <div
        style={{
          paddingBottom: "140px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            background: "white",
            boxShadow: "rgb(3 23 111 / 20%) 4px 4px 10px",
            height: "80px",
            borderRadius: "10px",
            width: "96%",
            marginTop: "2%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "20px",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/");
              }}
            >
              <img src={Graphicon} width={50} alt="graphicon" style={{}} />
            </div>

            <Button
              onClick={() => {
                navigate("/");
              }}
              variant="text"
              sx={{
                ...buttonStyle,
                fontWeight: window.location.pathname === "/" ? "bold" : "",
                marginLeft: "15px",
              }}
            >
              Home
            </Button>
            <Button
              onClick={() => {
                navigate("/static");
              }}
              variant="text"
              sx={{
                ...buttonStyle,
                fontWeight: window.location.pathname.includes("/static")
                  ? "bold"
                  : "",
                marginLeft: "15px",
              }}
            >
              Static
            </Button>
            <Button
              onClick={() => {
                navigate("/dynamic");
              }}
              variant="text"
              sx={{
                ...buttonStyle,
                fontWeight: window.location.pathname.includes("/dynamic")
                  ? "bold"
                  : "",
                marginLeft: "15px",
              }}
            >
              Dynamic
            </Button>
            <Button
              onClick={() => {
                navigate("/network");
              }}
              variant="text"
              sx={{
                ...buttonStyle,
                fontWeight: window.location.pathname.includes("/network")
                  ? "bold"
                  : "",
                marginLeft: "15px",
              }}
            >
              Network
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
