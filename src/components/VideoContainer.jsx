import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import { useState, useEffect } from "react";
import VideCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideo();
  }, []);

  async function getVideo() {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json);
    setVideos(json.items);
  }

  return (
    <div className="flex flex-wrap gap-4">
      {/* <VideCard info={videos[0]} /> */}
      {videos.map((e) => (
        <VideCard info={e} />
      ))}
    </div>
  );
};

export default VideoContainer;
