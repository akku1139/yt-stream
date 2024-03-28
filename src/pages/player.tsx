import queue from "../queue";
import { Show } from "solid-js";

const PlayerPage = () => {
  return <Show
    when={queue.nowVideo()}
    fallback={"add video to queue"}
  >
    <img src={queue.nowVideo().thumbnailURL} style={{
      height: "100vw",
      width: "100%",
      "object-fit": "contain",
      "background-color": "#000",
    }} />
    <div>{queue.nowVideo().title}</div>
  </Show>;
};

export default PlayerPage;
