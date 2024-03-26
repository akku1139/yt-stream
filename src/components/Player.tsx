import queue from "../queue.ts";
const Player = () => {
  return  <>
    <img src={queue.nowVideo().thumbnailURL} />
    <div>
      <div>{"next ->"}</div>
    </div>
    <audio autoplay controls
      src={`https://invidious.jing.rocks/latest_version?id=${queue.nowVideoID()}&itag=139`}
      onEnded={(e) => {queue.next()}}
    ></audio>
  </>
};

export default Player;
