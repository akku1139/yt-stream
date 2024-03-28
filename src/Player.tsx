import { apiURL } from "./lib/youtube.ts";
import queue from "./queue.ts";

import { createSignal, createEffect, onMount, Show } from "solid-js";

const Player = () => {

  const Inner = () => {
    let music: HTMLAudioElement;
    let bar: HTMLProgressElement;

    const [time, setTime] = createSignal<Number>(0);
    let currentTime = () => 0;

    const [isPlaying, setPlaying] = createSignal<Boolean>(true);

    onMount(() => {
      createEffect(() => {
        bar.value = time();
      });

      music.addEventListener("loadedmetadata", (e) => {
        currentTime = () => music.currentTime;
        bar.max = music.duration;
      });

      bar.max = Number.MAX_SAFE_INTEGER;
    });

    return <div id="player" style={{
      height: "70px",
      width: "100%",
      position: "fixed",
      bottom: 0,
      display: "flex",
      "background-color": "#111",
    }}>
      <progress ref={bar}></progress>
      <img src={queue.nowVideo().thumbnailURL} style={{
          height: "70px",
          width: "70px",
          "object-fit": "cover",
      }} />
      <div>{queue.nowVideo().title}</div>
      <div style={{
        display: "flex",
        height: "100%",
        width: "150px",
      }}>
        <Show
          when={isPlaying()}
          fallback={<button onClick={()=>{
            music.play();
            setPlaying(true);
          }}>{"▶"}</button>}
        >
          <button onClick={()=>{
            music.pause();
            setPlaying(false);
          }}>{"||"}</button>
        </Show>
        <button onClick={()=>queue.next()}>{"->"}</button>
      </div>
      <audio autoplay ref={music}
        src={apiURL(`latest_version?id=${queue.nowVideo().id}&itag=139`)}
        onTimeUpdate={()=>setTime(currentTime)}
        onEnded={()=>queue.next()}
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
