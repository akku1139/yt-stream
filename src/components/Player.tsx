import { apiURL } from "../lib/youtube.ts";
import queue from "../queue.ts";

const Player = () => {
  return  <>
    <img src={queue.nowVideo().thumbnailURL} />
    <div>{queue.nowVideo().title}</div>
    <div>
      <div onClick={queue.next()}>{"next ->"}</div>
    </div>
    <audio autoplay controls
      src={apiURL(`latest_version?id=${queue.nowVideo().id}&itag=139`)}
      onEnded={(e) => {queue.next()}}
    ></audio>
  </>
};

export default Player;
