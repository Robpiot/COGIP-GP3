import React from "react";
import ReactLoading from "react-loading";

export default function LoadingDashboard({}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "30vh",
      }}
    >
      <ReactLoading
        type={"spinningBubbles"}
        // color="#4C00B4"
        color="#F00"
        height={"5%"}
        width={"5%"}
        className="loading-home loading-dashboard"
      />
    </div>
  );
}
