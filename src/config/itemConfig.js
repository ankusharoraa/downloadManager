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
      url: "https://www.youtube.com/",
    },
    {
      title: "Follow us on Twitter",
      icon: (
        <Twitter style={{ position: "relative", top: "6px", height: "25px" }} />
      ),
      style: { backgroundColor: "#00acee", color: "white" },
    },
    {
      title: "Follow us on Instagram",
      icon: (
        <Instagram
          style={{ position: "relative", top: "6px", height: "25px" }}
        />
      ),
      style: { backgroundColor: "#c13584", color: "white" },
    },
    {
      title: "Subscribe our channel",
      icon: (
        <YouTube style={{ position: "relative", top: "6px", height: "25px" }} />
      ),
      style: { backgroundColor: "#FF0000", color: "white" },
    },
    {
      title: "Comment on video",
      icon: (
        <Comment style={{ position: "relative", top: "6px", height: "23px" }} />
      ),
      style: { backgroundColor: "#FF0000", color: "white" },
    },
  ],
};

export const downloadLinks = [
  {
    blogName: "in-this-video-i-will-provide-you-free.html",
    link: "https://www.mediafire.com/file/m9echinnr5sg6a0/Jett_Alert_by_Rey-Asalto.rar/file",
  },
  {
    blogName: "free-valorant-animated-stream-package.html",
    link: "https://www.mediafire.com/file/gvjbo8ays1zqgzb/Sage_Stream_Pack.rar/file",
  },
];
