import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import "../App.css";
import { BufferingComp } from "./BufferingComp";
import { Check, Loop } from "@mui/icons-material";
const Item = styled(Paper)(({ theme, disabled, loading }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1.3),
  textAlign: "center",
  fontSize: "16px",
  color: theme.palette.text.secondary,
  borderRadius: "5px",
  cursor: !disabled || !loading ? "pointer" : "no-drop",
  height: "30px",
  maxHeight: "30px",
}));

const MenuItems = ({ data, downloadLink }) => {
  const [loading, setLoading] = React.useState(false);
  const [clickCheck, setClickCheck] = React.useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
  });
  const [clickedBtnIndex, setClickedBtnIndex] = React.useState();
  const [showDownload, setShowDownload] = React.useState(false);
  const clicked = (url, index) => {
    window.open(url, "_blank").focus();
    if (index >= 0) {
      setClickedBtnIndex(index);
      setLoading(true);
      setTimeout(() => {
        const linkCheck = { ...clickCheck };
        linkCheck[index] = true;
        setClickCheck({ ...linkCheck });
        setLoading(false);
      }, 10000);
    }
  };
  React.useEffect(() => {
    if (Object.values(clickCheck).indexOf(false) > -1) {
      setShowDownload(false);
    } else {
      setShowDownload(true);
    }
  }, [clickCheck]);
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={1}>
        {data.items.map((e, index) => (
          <Item
            key={index}
            onClick={() =>
              !clickCheck[index] && !loading && clicked(e.url, index)
            }
            style={
              clickCheck[index] === false
                ? e.style
                : { backgroundColor: "black", color: "white" }
            }
            disabled={clickCheck[index]}
            loading={loading}
          >
            {e.icon}
            {"  "}
            <strong>{e.title}</strong>
            {clickCheck[index] && (
              <i>
                <Check
                  style={{ float: "right", marginTop: "5px" }}
                  color="error"
                />
              </i>
            )}
            {!clickCheck[index] && loading && index === clickedBtnIndex && (
              <i>
                <Loop style={{ float: "right", marginTop: "5px" }} />
              </i>
            )}
          </Item>
        ))}
      </Stack>
      {loading && <BufferingComp />}
      {showDownload && (
        <Button
          style={{ width: "100%", margin: "0 auto", marginTop: "20px" }}
          variant="contained"
          color="primary"
          onClick={() => clicked(downloadLink)}
          className="downloadBtn"
        >
          Download
        </Button>
      )}
    </Box>
  );
};
export default React.memo(MenuItems);
