import { apiURL } from "./lib/youtube.ts";
import queue from "./queue.ts";

import { createSignal, createEffect, onMount, Show } from "solid-js";

const Player = () => {

  const Inner = () => {
    let music: HTMLAudioElement;
    let bar: HTMLProgressElement;

    const [time, setTime] = createSignal<Number>(0);
    let currentTime = () => 0;

    onMount(() => {
      createEffect(() => {
        bar.value = time();
      });

      music.addEventListener("loadedmetadata", (e) => {
        currentTime = () => music.currentTime;
        bar.max = music.duration;
      });

      bar.max = Infinity;
    });

    return <div id="player">
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
    </div>;
  }

  return <Show
    when={queue.nowVideo()}
  >
    <Inner />
  </Show>
};

export default Player;
