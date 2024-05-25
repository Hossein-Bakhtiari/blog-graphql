import React from "react";
import { RotatingLines } from "react-loader-spinner";

function Loader() {
  return (
    <div
      style={{
        width: "100%",
        height: "1000px",
        display: "flex ",
        justifyContent: "center",
        paddingTop: "20px",
      }}
    >
      <RotatingLines
        visible={true}
        height="100"
        width="100"
        color="#1976d2"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;
