import { createSignal, createEffect } from 'solid-js';
import { YouTubeVideo, YouTubeVideo } from "./lib/youtube";

const [nowVideoID, setVideoID] = createSignal();
export const setVideoID;

export let nowVideo;

createEffect(()=>{
  nowVideo = new YouTubeVideo(nowVideoID);
});

let queue: Array<YouTubeVideo>;
