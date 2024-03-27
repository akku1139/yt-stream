import queue from "../queue";
import { Show } from "solid-js";

const PlayerPage = () => {
  return <Show
    when={queue.list().length}
    fallback={"add video to queue"}
  >
    <img src={queue.nowVideo().thumbnailURL} class="big-thumbnail" />
    <div>{queue.nowVideo().title}</div>
  </Show>;
};

export default PlayerPage;
