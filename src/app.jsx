import { useEffect, useState } from "react";
import styles from "./app.module.css";
import VideoList from "./components/video_list/video_list";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    youtube.mostPopular().then((videos) => setVideos(videos));
  }, []);

  return (
    <div className={styles.app}>
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
