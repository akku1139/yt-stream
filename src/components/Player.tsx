import { apiURL } from "../lib/youtube.ts";
import queue from "../queue.ts";

const Player = () => {
  return  <>
    <img src={queue.nowVideo().thumbnailURL} />
    <div>{queue.nowVideo().title}</div>
    <div>
      <div onClick={queue.next()}>{"next ->"}</div>
      <button onClick={(e: Event) => { queue.setVideoID("4gql9o4oiwU") }}>別の</button>
    </div>
    <audio autoplay controls
      src={apiURL(`latest_version?id=${queue.nowVideoID()}&itag=139`)}
      onEnded={(e) => {queue.next()}}
    ></audio>
  </>
};

export default Player;
