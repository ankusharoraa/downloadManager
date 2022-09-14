import { LinearProgress } from "@mui/material";
import * as React from "react";

export function BufferingComp() {
  return (
    <>
      <sub
        style={{
          display: "block",
          textAlign: "center",
          padding: "20px",
          color: "wheat",
        }}
      >
        Waiting for you to complete this step
      </sub>
      <LinearProgress color="warning" />
    </>
  );
}
