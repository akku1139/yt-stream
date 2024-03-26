import queue from "../queue.ts";
const Player = () => {
  return  <>
    <img src={queue.nowVideo().thumbnailURL} />
    <audio controls src={`https://invidious.jing.rocks/latest_version?id=${queue.nowVideoID()}&itag=139`}></audio>
  </>
};

export default Player;
