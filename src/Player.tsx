import { apiURL } from "./lib/youtube.ts";
import queue from "./queue.ts";

import { createSignal, createEffect, onMount, Show } from "solid-js";

const Player = () => {
  let music: HTMLAudioElement;
  let bar: HTMLProgressElement;

  const [time, setTime] = createSignal<Number>(0);

  onMount(() => {
    bar.max = music.duration;
  });

  createEffect(() => {
    bar.value = time();
  });

  return <Show
    when={queue.list().length}
  >
    <div id="player">
      <progress ref={bar}></progress>
      <img src={queue.nowVideo().thumbnailURL} />
      <div>{queue.nowVideo().title}</div>
      <div>
        <div onClick={queue.next()}>{"next ->"}</div>
      </div>
      <audio autoplay ref={music}
        src={apiURL(`latest_version?id=${queue.nowVideo().id}&itag=139`)}
        onTimeUpdate={setTime(music.currentTime)}
        onEnded={(e) => {queue.next()}}
      ></audio>
    </div>
  </Show>
};

export default Player;
