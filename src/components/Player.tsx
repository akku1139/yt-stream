import { YouTubeVideo } from "../lib/youtube.ts";
import { nowVideoID } from "../queue.ts";

const Player = () => {


  return  <>
    <img src={new YouTubeVideo(nowVideoID()).thumbnailURL} />
    <audio controls src={`https://invidious.jing.rocks/latest_version?id=${nowVideoID()}&itag=139`}></audio>
  </>
};

export default Player;
