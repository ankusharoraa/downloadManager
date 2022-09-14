import {
  Comment,
  Instagram,
  ThumbUpSharp,
  Twitter,
  YouTube,
} from "@mui/icons-material";

export const config = {
  name: "Pack Name",
  items: [
    {
      title: "Like Video",
      icon: (
        <ThumbUpSharp
          style={{ position: "relative", top: "6px", height: "20px" }}
        />
      ),
      style: { backgroundColor: "#FF0000", color: "white" },
      url: "https://youtu.be/soySGrpf598",
    },
    {
      title: "Follow us on Twitter",
      icon: (
        <Twitter style={{ position: "relative", top: "6px", height: "25px" }} />
      ),
      style: { backgroundColor: "#00acee", color: "white" },
      url: "twitter.com/reyasaltoyt",
    },
    {
      title: "Follow us on Instagram",
      icon: (
        <Instagram
          style={{ position: "relative", top: "6px", height: "25px" }}
        />
      ),
      style: { backgroundColor: "#c13584", color: "white" },
      url: "https://www.instagram.com/rey_asalto_yt/",
    },
    {
      title: "Subscribe our channel",
      icon: (
        <YouTube style={{ position: "relative", top: "6px", height: "25px" }} />
      ),
      style: { backgroundColor: "#FF0000", color: "white" },
      url: "https://www.youtube.com/channel/UC87m1Fk0SsrQ8Esk9XnsIuA?sub_confirmation=1",
    },
    {
      title: "Comment on video",
      icon: (
        <Comment style={{ position: "relative", top: "6px", height: "23px" }} />
      ),
      style: { backgroundColor: "#FF0000", color: "white" },
      url: "https://youtu.be/soySGrpf598",
    },
  ],
};
