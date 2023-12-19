import React from "react";
import ReactLoading from "react-loading";

export default function Loading({ type, color }) {
  return (
    <div>
      <h2>Loading fraté</h2>
      <ReactLoading type={"spokes"} color={"#000000"} height={100} width={100} />
    </div>
  );
}