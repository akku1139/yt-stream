import { createSignal, createEffect } from 'solid-js';
import { YouTubeVideo, YouTubeVideo } from "./lib/youtube";

export const [nowVideoID, setVideoID] = createSignal();

export let nowVideo: YouTubeVideo;

createEffect(()=>{
  nowVideo = new YouTubeVideo(nowVideoID);
});

let queue: Array<YouTubeVideo>;
