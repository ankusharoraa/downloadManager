import * as React from "react";
import "./App.css";
import { config } from "./config/itemConfig";
import MenuItems from "./components/MenuItems";

export default function BasicStack() {
  const data = config;
  const [downloadLink, setDownloadLink] = React.useState("");
  const getParams = React.useCallback(() => {
    const location = new URL(window.location.href);
    const querryParams = new URLSearchParams(location.searchParams);
    const link = window.atob(querryParams.get("link"));
    setDownloadLink(link);
  }, []);

  React.useEffect(() => {
    getParams();
  }, [getParams]);

  return (
    <div className="App">
      <div className="mainSection">
        <div className="header">
          <h2 style={{ margin: "0", fontWeight: "bolder" }}>
            Rey Asalto Download Manager
          </h2>
          <small className="sub">Complete below 5 steps to unlock</small>
        </div>

        <div className="items">
          <MenuItems data={data} downloadLink={downloadLink} />
        </div>
      </div>
    </div>
  );
}
