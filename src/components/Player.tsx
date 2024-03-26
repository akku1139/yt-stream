import { nowVideoID } from "../queue.ts";

const Player = () => {
  return <audio controls src={`https://invidious.jing.rocks/latest_version?id=${nowVideoID()}&itag=139`}></audio>
};

export default Player;
