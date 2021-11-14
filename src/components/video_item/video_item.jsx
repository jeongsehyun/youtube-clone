import React from "react";
import styles from "./video_item.module.css";

function VideoItem({ video, video: { snippet } }) {
  return (
    <li>
      <p>{snippet.title}</p>
    </li>
  );
}

export default VideoItem;
