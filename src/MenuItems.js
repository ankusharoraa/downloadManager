import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Button, LinearProgress } from "@mui/material";
import "./App.css";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1.3),
  textAlign: "center",
  fontSize: "16px",
  color: theme.palette.text.secondary,
  borderRadius: "5px",
  cursor: "pointer",
  height: "30px",
  maxHeight: "30px",
}));
const MenuItems = ({ data, streamPackLink }) => {
  const clicked = (url) => {
    window.open(url, "_blank").focus();
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={1}>
        {data.items.map((e) => (
          <Item onClick={() => clicked(e.url)} style={e.style}>
            {e.icon}
            {"  "}
            <strong>{e.title}</strong>
          </Item>
        ))}
      </Stack>
      <sub
        style={{
          display: "block",
          textAlign: "center",
          padding: "20px",
          color: "wheat",
        }}
      >
        Unlock Progress 1/5
      </sub>
      <LinearProgress color="warning" />
      <Button
        style={{ width: "100%", margin: "0 auto", marginTop: "20px" }}
        variant="outlined"
        color="info"
        onClick={() => clicked(streamPackLink)}
        className="downloadBtn"
      >
        Download
      </Button>
    </Box>
  );
};
export default React.memo(MenuItems);
