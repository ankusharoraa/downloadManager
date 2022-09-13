import * as React from "react";
import "./App.css";
import { config, downloadLinks } from "./config/itemConfig";
import MenuItems from "./MenuItems";

export default function BasicStack() {
  const data = config;
  const links = downloadLinks;
  const [streamPackLink, setStreamPackLink] = React.useState("");
  const [streamPackName, setStreamPackName] = React.useState("");

  const getParams = React.useCallback(() => {
    const location = new URL(window.location.href);
    const querryParams = new URLSearchParams(location.searchParams);
    const blogParam = querryParams.get("blog");
    const blogWords = blogParam.split(".");
    const heading = blogWords[0].split("-").join(" ").toUpperCase();
    setStreamPackName(heading);
    const downloadLink = links
      .filter((e) => e.blogName === blogParam)
      .map((e) => e.link);
    setStreamPackLink(downloadLink[0]);
  }, [links]);

  React.useEffect(() => {
    getParams();
  }, [getParams]);

  return (
    <div className="App">
      <div className="mainSection">
        <div className="header">
          <h2 style={{ margin: "0", fontWeight: "bolder" }}>
            {streamPackName}
          </h2>
          <small className="sub">Complete below 5 steps to unlock</small>
        </div>

        <div className="items">
          <MenuItems data={data} streamPackLink={streamPackLink} />
        </div>
      </div>
    </div>
  );
}
